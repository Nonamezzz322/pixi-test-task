import { getRandomColor } from '../helpers';
import { minShapeSize } from '../constants';
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
  public readonly type: string;

  private readonly sizeX: number;

  private readonly sizeY: number;

  public readonly coefficient: number;

  constructor(options: IShapeModel) {
    super(options);
    this.coefficient = options.coefficient;
    this.type = 'ellipse';
    /**
    * determining the size of the figure
    * @param {number} minShapeSize - minimum shape size (30px)
    */
    this.sizeX = minShapeSize + this.coefficient * 60;
    this.sizeY = minShapeSize + this.coefficient * 30;
    /**
    * Drawing a shape, with a random color, and the parameters specified above
    */
    this.beginFill(getRandomColor());
    this.drawEllipse(0, -this.sizeY / 2, this.sizeX, this.sizeY);
    this.endFill();
    /**
    * @param {number} area - Formula for calculating the area of a figure
    */
    this.area = Math.PI * this.sizeX * this.sizeY;
  }
}
