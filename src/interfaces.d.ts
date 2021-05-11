import Circle from './Models/Circle';
import Ellipse from './Models/Ellipse';
import RandomShape from './Models/RandomShape';
import Rectangle from './Models/Rectangle';
import Triangle from './Models/Triangle';
import Pentagon from './Models/Pentagon';
import Hexagon from './Models/Hexagon';

/**
 * Describes which shape can be drawn
 * @type
 */
type ShapesType = Circle | Ellipse | RandomShape | Rectangle | Triangle | Pentagon | Hexagon

/**
 * The type for the array by which the shape is selected
 * @type
 */
type ShapesClassesArrayType = (
  typeof RandomShape |
  typeof Circle |
  typeof Ellipse |
  typeof Rectangle |
  typeof Triangle |
  typeof Pentagon |
  typeof Hexagon
  )[];

/**
 * Interface for classes that represent a Shape constructor arguments.
 * @interface IShapeModel
 */
interface IShapeModel {
  x: number,
  y: number,
  id: string,
  coefficient: number
}
/**
 * game field sizes interface
 * @interface IShapeModel
 */
interface IgameFieldSize {
  w: number,
  h: number
}

export {
  ShapesType,
  IShapeModel,
  IgameFieldSize,
  ShapesClassesArrayType,
};
