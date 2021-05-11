import { minShapeSize } from '../constants';
import { getRandomColor } from '../helpers';
import Shape from './Shape';
import { IShapeModel } from '../interfaces';

/**
 * Creates an instance of the Triangle class.
 * @constructor
 * @extends Shape
 * @this  {Triangle}
 * @param {string} type - Shape type (Triangle), needed to be checked when redrawing with a different color
 * @param {number} sizeX - Shape width, in pixels
 * @param {number} sizeY - Shape height, in pixels
 * @param {number} coefficient - a random coefficient by which the base size is multiplied to obtain
 *                               a pseudo-random number within a given range.
 * @returns {PIXI.Graphics}
 */
export default class Triangle extends Shape {
  public readonly type: string;

  private readonly sizeX: number;

  private readonly sizeY: number;

  public readonly coefficient: number;

  constructor(options: IShapeModel) {
    super(options);
    this.coefficient = options.coefficient;
    /**
    * @param {number} minShapeSize - minimum shape size (30px)
    */
    this.sizeX = this.coefficient * 100 + minShapeSize;
    this.sizeY = this.coefficient * 100 + minShapeSize;
    this.type = 'triangle';
    /**
    * Drawing a shape, with a random color, and the parameters specified above
    */
    this.beginFill(getRandomColor());
    this.drawPolygon([-this.sizeX / 2, -this.sizeY, this.sizeX / 2, -this.sizeY, 0, 0]);
    this.endFill();
    /**
    * @param {number} area - Formula for calculating the area of a figure
    */
    this.area = (this.sizeY ** 2) / 2;
  }
}
