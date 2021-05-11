import Shape from './Shape';
import { IShapeModel } from '../interfaces';
/**
 * Creates an instance of the Ellipse class.
 * @constructor
 * @extends Shape
 * @param {string} type - Shape type (Ellipse), needed to be checked when redrawing with a different color
 * @param {number} sizeX - Shape width, in pixels
 * @param {number} sizeY - Shape height, in pixels
 * @param {number} coefficient - a random coefficient by which the base size is
 *                               multiplied to obtain a pseudo-random number within a given range.
 */
export default class Ellipse extends Shape {
    readonly type: string;
    private readonly sizeX;
    private readonly sizeY;
    readonly coefficient: number;
    constructor(options: IShapeModel);
}
