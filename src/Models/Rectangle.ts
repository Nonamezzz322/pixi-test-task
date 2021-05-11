import { minShapeSize } from '../constants';
import { getRandomColor } from '../helpers';
import Shape from './Shape';
import { IShapeModel } from '../interfaces';

/**
 * Creates an instance of the Rectangle class.
 * @constructor
 * @extends Shape
 * @param {string} type - Shape type (Rectangle)
 * @param {number} sizeX - Shape width, in pixels
 * @param {number} sizeY - Shape height, in pixels
 * @param {number} coefficient - a random coefficient by which the base size is multiplied
 *                               to obtain a pseudo-random number within a given range.
 * @returns {PIXI.Graphics}
 */
export default class Rectangle extends Shape {
  public readonly type: string;

  private readonly sizeX: number;

  private readonly sizeY: number;

  public readonly coefficient: number;

  constructor(options: IShapeModel) {
    super(options);
    this.coefficient = options.coefficient;
    this.type = 'rectangle';
    /**
    * @param {number} minShapeSize - minimum shape size (30px)
    */
    this.sizeX = minShapeSize + 100 * this.coefficient;
    this.sizeY = minShapeSize + 100 * this.coefficient;
    /**
    * Drawing a shape, with a random color, and the parameters specified above
    */
    this.beginFill(getRandomColor());
    this.drawRect(0, -this.sizeY, this.sizeX, this.sizeY);
    this.endFill();
    /**
    * @param {number} area - Formula for calculating the area of a figure
    */
    this.area = this.sizeY * this.sizeX;
  }
}
