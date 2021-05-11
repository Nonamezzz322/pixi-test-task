import { getRandomColor } from '../helpers';
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
  public readonly type: string;

  private readonly path: number[];

  public readonly coefficient: number;

  constructor(options: IShapeModel) {
    super(options);
    this.coefficient = options.coefficient > 0.5 ? options.coefficient : 1;
    this.path = [0, 0, 45, -25, 45, -75, 0, -100, -45, -75, -45, -25];
    this.type = 'hexagon';
    /**
    * Drawing a shape, with a random color, and the parameters specified above
    */
    this.beginFill(getRandomColor());
    this.drawPolygon(this.path.map((el) => el * this.coefficient));
    this.endFill();
    /**
    * @param {number} area - Formula for calculating the area of a figure
    */
    this.area = (50 * this.coefficient * 2 * 6 * (50 / Math.sqrt(3))) / 2;
  }
}
