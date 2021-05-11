import { Application } from 'pixi.js';
import { ShapesType, IShapeModel } from '../interfaces';
/**
  * The class responsible for generating shape parameters, creating, deleting, and managing their properties
  * @param {number} gravity - the speed at which shapes fall in pixels per frame
  * @param {number} shapesPerSec - the number of shapes that are generated per second
  * @param {Application} app - PIXI.Application object instance, game field
  * @param {ShapesClassesArrayType} shapeClasses - An array for randomly selecting a shape to generate
  * @param {shapes} ShapesType[] - an array that stores all instances of the figure classes on the game field
*/
export default class AppModel {
    private shapeClasses;
    shapes: ShapesType[];
    gravity: number;
    shapesPerSec: number;
    app: Application;
    constructor();
    /**
    * @method
    * determines the parameters of the game field
    */
    gameFieldConfig(generateNewShape: (x: number, y: number) => void): void;
    /**
    * @method
    * changes the colors of shapes when deleting a shape of the same type
    */
    private changeColorSameShapes;
    /**
    * @method
    * create a new shape and add an event listener to delete shape when you click on them
    */
    createShape(options: IShapeModel, index: number): void;
    /**
    * @method
    * removes the shape on click, and calls the method for changing the color of the rest of the shapes
    */
    private deleteItemWhenClick;
    /**
    * @method
    * shifts each shape along the Y-axis depending on gravity
    */
    updateGravity(): void;
    /**
    * @method
    * find and delete shape from shape array
    */
    private deleteShape;
    /**
    * @method
    * remove shape when it hit bottom
    */
    checkCollision(): void;
}
