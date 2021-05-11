import * as PIXI from 'pixi.js';
import { IShapeModel } from '../interfaces';
/**
 * Creates an instance of the ShapeModel class from which shapes inherit
 * @constructor
 * @extends PIXI.Graphics
 * @param {string} id - unique shape identifier
 * @param {number} area - area of the figure in pixels
 * @param {number} coefficient - a random number on which the parameters of the rendered shape depend
 */
export default class ShapeModel extends PIXI.Graphics {
    readonly id: string;
    area: number;
    readonly coefficient: number;
    constructor(options: IShapeModel);
}
