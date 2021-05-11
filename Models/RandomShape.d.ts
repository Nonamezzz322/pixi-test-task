import Shape from './Shape';
import { IShapeModel } from '../interfaces';
/**
 * Creates an instance of the RandomShape class.
 * @constructor
 * @extends Shape
 * @this  {RandomShape}
 * @param {string} type - Shape type (regular polygon with a random number of sides),
 *                        needed to be checked when redrawing with a different color
 * @param {number} size - Shape sizes
 * @param {number} sides - A random number of sides from 7 to 17.
 * @param {number} Xcenter - the X coordinate of the center of the shape.
 * @param {number} Ycenter -  the Y coordinate of the center of the shape.
 * @param {number} coefficient - the random coefficient by which the base size is multiplie
 *                                to get a pseudo-random number within a given range.
 * @returns {PIXI.Graphics}
 */
export default class RandomShape extends Shape {
    readonly type: string;
    private readonly size;
    private readonly sides;
    private readonly Xcenter;
    private readonly Ycenter;
    readonly coefficient: number;
    constructor(options: IShapeModel);
}
