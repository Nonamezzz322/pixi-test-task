import { getRandomColor } from '../helpers';
import { minShapeSize } from '../constants';
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
  public readonly type: string;

  private readonly radius: number;

  public readonly coefficient: number;

  constructor(options: IShapeModel) {
    super(options);
    this.coefficient = options.coefficient;
    /**
    * @param {number} minShapeSize - minimum shape radius (30px)
    */
    this.radius = minShapeSize + (50 * this.coefficient);
    this.type = 'circle';
    /**
    * Drawing a shape, with a random color, and the parameters specified above
    */
    this.beginFill(getRandomColor());
    this.drawCircle(0, -this.radius, this.radius);
    this.endFill();
    /**
    * @param {number} area - Formula for calculating the area of a figure
    */
    this.area = Math.PI * this.radius ** 2;
  }
}
