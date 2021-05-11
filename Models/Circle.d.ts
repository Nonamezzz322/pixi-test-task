import Shape from './Shape';
import { IShapeModel } from '../interfaces';
/**
 * Creates an instance of the Circle class.
 * @constructor
 * @extends Shape
 * @param {string} type - Shape type (Circle), needed to be checked when redrawing with a different color
 * @param {number} radius - The radius of the circle.
 * @param {number} coefficient - The coefficient by which the base size is multiplied.
 * @returns {PIXI.Graphics}
 */
export default class Circle extends Shape {
    readonly type: string;
    private readonly radius;
    readonly coefficient: number;
    constructor(options: IShapeModel);
}
