/**
 * The class responsible for interacting with the DOM
 * @this  {ShapeView}
 * @param {number} areaOccupied - area occupied by all pieces on the playing field
 * @param {number} shapesNumber - number of shapes on the field
 */
import { ShapesType } from '../interfaces';
import {
  shapesQuantity,
  areaCovered,
  shapesPerSecond,
  currentGravity,
  decreaseShapes,
  increaseShapes,
  decreaseGravity,
  increaseGravity,
} from '../constants';

export default class ShapeView {
  private areaOccupied: number;

  private shapesNumber: number;

  constructor() {
    this.areaOccupied = 0;
    this.shapesNumber = 0;

    this.updateInfo = this.updateInfo.bind(this);
  }

  /**
  * @method
  * creates listeners, and applies function handlers to buttons
  */
  public bindControls(
    changeGravity: (value: number) => void,
    changeShapesQuantity: (value: number) => void,
  ): void {
    /**
    * @event
    * reduces the falling speed of shapes by 1 pixel per frame
    */
    decreaseGravity.addEventListener('click', changeGravity.bind(this, -1));
    /**
    * @event
    * increases the falling speed of shapes by 1 pixel per frame
    */
    increaseGravity.addEventListener('click', changeGravity.bind(this, 1));
    /**
    * @event
    * decreases the number of generated shapes per second by 1
    */
    decreaseShapes.addEventListener('click', changeShapesQuantity.bind(this, -1));
    /**
    * @event
    * increases the number of generated shapes per second by 1
    */
    increaseShapes.addEventListener('click', changeShapesQuantity.bind(this, 1));
  }

  /**
  * @method
  * updates information about the current number of shapes,
  * the area they occupy, and the shape generation and gravity parameters
  */
  public updateInfo(gravity: number, shapesPerSec: number, shapes: ShapesType[]): void {
    /**
    * disable buttons when gravity or shapes equal 0
    */
    decreaseGravity.disabled = gravity < 1;
    decreaseShapes.disabled = shapesPerSec < 1;
    this.shapesNumber = shapes.length;
    this.areaOccupied = shapes.reduce((acc: number, shape: ShapesType) => acc + shape.area, 0);
    /**
    * updates counters in html
    */
    shapesPerSecond.innerHTML = shapesPerSec.toString();
    currentGravity.innerHTML = gravity.toString();
    shapesQuantity.innerHTML = this.shapesNumber.toString();
    areaCovered.innerHTML = this.areaOccupied.toFixed(2).toString();
  }
}
