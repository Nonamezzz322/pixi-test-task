/**
 * The class responsible for interacting with the DOM
 * @this  {ShapeView}
 * @param {number} areaOccupied - area occupied by all pieces on the playing field
 * @param {number} shapesNumber - number of shapes on the field
 */
import { ShapesType } from '../interfaces';
export default class ShapeView {
    private areaOccupied;
    private shapesNumber;
    constructor();
    /**
    * @method
    * creates listeners, and applies function handlers to buttons
    */
    bindControls(changeGravity: (value: number) => void, changeShapesQuantity: (value: number) => void): void;
    /**
    * @method
    * updates information about the current number of shapes,
    * the area they occupy, and the shape generation and gravity parameters
    */
    updateInfo(gravity: number, shapesPerSec: number, shapes: ShapesType[]): void;
}
