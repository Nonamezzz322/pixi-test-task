import { minShapeSize } from '../constants';
import { getRandomColor } from '../helpers';
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
  public readonly type: string;

  private readonly size: number;

  private readonly sides: number;

  private readonly Xcenter: number;

  private readonly Ycenter: number;

  public readonly coefficient: number;

  constructor(options: IShapeModel) {
    super(options);
    this.coefficient = options.coefficient;
    this.type = 'randomShape';
    this.size = minShapeSize + 50 * this.coefficient;
    this.sides = 7 + 10 * this.coefficient;
    this.Xcenter = 10;
    this.Ycenter = -minShapeSize - 50 * this.coefficient;
    /**
    * Drawing a shape, with a random color, and the parameters specified above
    */
    this.beginFill(getRandomColor());
    this.moveTo(0, 0);

    this.moveTo(this.Xcenter + this.size * Math.cos(0), this.Ycenter + this.size * Math.sin(0));
    /**
    * Loop drawing the sides of a shape using a formula
    */
    for (let i = 1; i <= this.sides; i += 1) {
      this.lineTo(
        this.Xcenter
        + this.size
        * Math.cos((i * 2 * Math.PI) / this.sides), this.Ycenter + this.size * Math.sin((i * 2 * Math.PI) / this.sides),
      );
    }
    this.endFill();
    /**
    * @param {number} area - Formula for calculating the area of a regular polygon
    */
    this.area = (1 / 2) * ((this.sides * this.size) * (this.getBounds().width / 2));
  }
}
