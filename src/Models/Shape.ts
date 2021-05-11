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
  public readonly id: string;

  public area: number;

  public readonly coefficient: number;

  constructor(options: IShapeModel) {
    super();
    this.id = options.id;
    this.x = options.x;
    this.y = options.y;
    this.interactive = true;
    this.buttonMode = true;
    this.area = 0;
    this.coefficient = options.coefficient;
  }
}
