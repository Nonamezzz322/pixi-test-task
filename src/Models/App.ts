import { Application, InteractionEvent, Rectangle } from 'pixi.js';
import { gameFieldSize, shapesArray, gameField } from '../constants';
import { ShapesType, IShapeModel, ShapesClassesArrayType } from '../interfaces';

/**
  * The class responsible for generating shape parameters, creating, deleting, and managing their properties
  * @param {number} gravity - the speed at which shapes fall in pixels per frame
  * @param {number} shapesPerSec - the number of shapes that are generated per second
  * @param {Application} app - PIXI.Application object instance, game field
  * @param {ShapesClassesArrayType} shapeClasses - An array for randomly selecting a shape to generate
  * @param {shapes} ShapesType[] - an array that stores all instances of the figure classes on the game field
*/
export default class AppModel {
  private shapeClasses: ShapesClassesArrayType;

  public shapes: ShapesType[] = [];

  public gravity: number;

  public shapesPerSec: number;

  public app: Application;

  constructor() {
    this.shapeClasses = shapesArray;
    this.shapes = [];
    this.gravity = 1;
    this.shapesPerSec = 1;
    /**
    * creating an instance of the PIXI.Application class, and defining the basic parameters of the game field
    */
    this.app = new Application({
      width: gameFieldSize.w,
      height: gameFieldSize.h,
      backgroundColor: 0xDAAFD2,
    });

    this.gameFieldConfig = this.gameFieldConfig.bind(this);
    this.updateGravity = this.updateGravity.bind(this);
    this.checkCollision = this.checkCollision.bind(this);
  }

  /**
  * @method
  * determines the parameters of the game field
  */
  public gameFieldConfig(generateNewShape: (x: number, y: number) => void) {
    const { view, stage } = this.app;
    gameField.appendChild(view);
    /**
    * @param stage.hitArea - defines the clickable surface of the game field
    */
    stage.hitArea = new Rectangle(0, 0, gameFieldSize.w, gameFieldSize.h);
    stage.interactive = true;
    stage.buttonMode = true;
    /**
    * @event
    * adds a listener to the game field, which, when clicked, creates a shape at the coordinates of the cursor
    */
    stage.on('click', (e: InteractionEvent) => {
      generateNewShape(e.data.global.x, e.data.global.y);
    });
  }

  /**
  * @method
  * changes the colors of shapes when deleting a shape of the same type
  */
  private changeColorSameShapes(item: ShapesType): void {
    const sameShapes = this.shapes.filter((el: ShapesType) => el.id !== item.id && item.type === el.type);
    sameShapes.forEach((el: ShapesType) => {
      const {
        x, y, id, constructor, coefficient,
      } = el;
      this.deleteShape(el);
      const index: number = this.shapeClasses.findIndex((shapeModel) => constructor.name === shapeModel.name);
      this.createShape({
        x, y, id, coefficient,
      }, index);
    });
  }

  /**
  * @method
  * create a new shape and add an event listener to delete shape when you click on them
  */
  public createShape(options: IShapeModel, index: number): void {
    const { stage } = this.app;
    /**
    * creates an instance of the random shape class
    */
    const shape: ShapesType = new this.shapeClasses[index](options);
    /**
    * @event
    * adds a listener to the game field, which, when clicked, creates a shape at the coordinates of the cursor
    */
    shape.on('click', (e: MouseEvent) => {
      e.stopPropagation();
      this.deleteItemWhenClick(shape);
    });
    /**
    * adds a shape to an array of shapes, and to the game field
    */
    stage.addChild(shape);
    this.shapes.push(shape);
  }

  /**
  * @method
  * removes the shape on click, and calls the method for changing the color of the rest of the shapes
  */
  private deleteItemWhenClick(item: ShapesType): void {
    this.deleteShape(item);
    this.changeColorSameShapes(item);
  }

  /**
  * @method
  * shifts each shape along the Y-axis depending on gravity
  */
  public updateGravity(): void {
    this.shapes.forEach((el: ShapesType) => {
      // eslint-disable-next-line no-param-reassign
      el.y += this.gravity;
    });
  }

  /**
  * @method
  * find and delete shape from shape array
  */
  private deleteShape(shape: ShapesType): void {
    const { stage } = this.app;
    stage.removeChild(shape);
    const index: number = this.shapes.findIndex((el: ShapesType) => el.id === shape.id);
    this.shapes.splice(index, 1);
  }

  /**
  * @method
  * remove shape when it hit bottom
  */
  public checkCollision(): void {
    for (let i = 0; i <= this.shapes.length; i += 1) {
      if (this.shapes[i]?.y > gameFieldSize.h + this.shapes[i]?.height) {
        this.deleteShape(this.shapes[i]);
      }
    }
  }
}
