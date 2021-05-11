import Shape from './Shape';
import { IShapeModel } from '../interfaces';
/**
 * Creates an instance of the Hexagon class.
 * @constructor
 * @extends Shape
 * @param {string} type - Shape type (Hexagon), needed to be checked when redrawing with a different color
 * @param {number[]} path - An array of coordinates at which the shape is drawn.
 * @param {number} coefficient - The coefficient by which the coordinate is multiplied
 *                               to obtain a random point on the coordinate grid.
 * @returns {PIXI.Graphics}
 */
export default class Hexagon extends Shape {
    readonly type: string;
    private readonly path;
    readonly coefficient: number;
    constructor(options: IShapeModel);
}
