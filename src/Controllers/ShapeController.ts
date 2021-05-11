import { gameFieldSize, shapesArray } from '../constants';
import { controlledRandom } from '../helpers';
import ShapeView from '../View/ShapeView';
import AppModel from '../Models/App';

/**
 * The class responsible for the logic and control of the application when the user interacts with it
 * @param {number} renderCounter - counter of the number of rendering frames, needed for smooth generation of shapes,
 *                                 depending on the shapesPerSec parameter
 * @param {number} shapesPerSec - the number of shapes that are generated per second
 * @param {ShapeView} view - an instance of the ShapeView class, for managing it through a controller
 * @param {AppModel} model - an instance of the AppModel class, for managing it through a controller
 */
export default class ShapeController {
  private view: ShapeView;

  private model: AppModel;

  private renderCounter: number;

  private shapesPerSec: number;

  constructor(model: AppModel, view: ShapeView) {
    this.view = view;
    this.model = model;
    this.renderCounter = 0;
    this.shapesPerSec = 1;

    this.generateNewShape = this.generateNewShape.bind(this);
    this.changeGravity = this.changeGravity.bind(this);
    this.changeShapesQuantity = this.changeShapesQuantity.bind(this);
  }

  /**
  * @method
  * determines the parameters of the game field
  */
  public init(): void {
    const {
      gameFieldConfig, gravity, shapesPerSec, shapes,
    } = this.model;

    const {
      bindControls, updateInfo,
    } = this.view;

    gameFieldConfig(this.generateNewShape);
    bindControls(this.changeGravity, this.changeShapesQuantity);
    updateInfo(gravity, shapesPerSec, shapes);
    this.tickerLogic();
  }

  /**
  * @method
  * changes gravity on the game field
  */
  private changeGravity(value: number): void {
    this.model.gravity += value;
  }

  /**
  * @method
  * changes the number of generated shapes per second
  */
  private changeShapesQuantity(value: number): void {
    this.model.shapesPerSec += value;
  }

  /**
  * @method
  * defines the parameters for creating a new shape
  */
  private generateNewShape(x: number, y: number): void {
    /**
    * choose a random shape from the shapes array
    */
    const index: number = controlledRandom(shapesArray.length);
    /**
    *  generate random id
    */
    const id: string = controlledRandom(Date.now()).toString();
    /**
    * generate random size coeficient
    */
    const coefficient: number = Math.random();
    /**
    * calling the method for adding a shape to an array of shapes
    */
    this.model.createShape({
      x, y, id, coefficient,
    }, index);
  }

  /**
  * @method
  * generate shape depend on shape per the second option
  */
  private generateShapes(shouldGenerate: boolean): void {
    if (shouldGenerate) {
      this.generateNewShape(Math.ceil(Math.random() * gameFieldSize.w), 0);
    }
  }

  /**
  * @method
  * determines for updating all parameters of the game field
  */
  private updateShapes(): void {
    const {
      updateGravity, checkCollision, shapesPerSec, shapes, gravity,
    } = this.model;
    updateGravity();
    checkCollision();
    this.shapesPerSec = shapesPerSec;
    this.view.updateInfo(gravity, shapesPerSec, shapes);
  }

  /**
  * @method
  * @param {number} oneFrameTime - duration of 1 frame of rendering (16.(6)ms)
  * @param {boolean} shouldGenerate - a flag that allows drawing the shape when true
  */
  private tickerLogic(): void {
    const { app } = this.model;
    const { elapsedMS } = app.ticker;
    const oneFrameTime: number = elapsedMS;
    let shouldGenerate: boolean;
    app.ticker.add(() => {
      /**
      * formula for decision when to generate shape
      */
      shouldGenerate = (this.renderCounter * oneFrameTime) % (1000 / this.shapesPerSec) < oneFrameTime;
      /**
      * generating new shapes, and updating the field as time passes
      */
      this.generateShapes(shouldGenerate);
      this.updateShapes();
      this.renderCounter += 1;
    });
  }
}
