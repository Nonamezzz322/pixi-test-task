import Circle from './Models/Circle';
import Ellipse from './Models/Ellipse';
import RandomShape from './Models/RandomShape';
import Rectangle from './Models/Rectangle';
import Triangle from './Models/Triangle';
import Pentagon from './Models/Pentagon';
import Hexagon from './Models/Hexagon';
import { IgameFieldSize } from './interfaces';
/**
* game field canvas sizes
*/
export const gameFieldSize: IgameFieldSize = {
  w: 1200,
  h: 800,
};
/**
* minimum shape size, in pixels
*/
export const minShapeSize = 30;
/**
* An array for randomly selecting a shape to generate
*/
export const shapesArray = [RandomShape, Circle, Ellipse, Rectangle, Triangle, Pentagon, Hexagon];
/**
* Initialization of Html elements
*/
export const shapesQuantity = document.querySelector('.top_info_shapes span') as HTMLSpanElement;
export const areaCovered = document.querySelector('.top_info_area span') as HTMLSpanElement;
export const shapesPerSecond = document.querySelector('.shapes_info span') as HTMLSpanElement;
export const currentGravity = document.querySelector('.gravity_info span') as HTMLSpanElement;
export const decreaseShapes = document.querySelector('.shapes_decrease') as HTMLButtonElement;
export const increaseShapes = document.querySelector('.shapes_increase')as HTMLButtonElement;
export const decreaseGravity = document.querySelector('.gravity_decrease') as HTMLButtonElement;
export const increaseGravity = document.querySelector('.gravity_increase') as HTMLButtonElement;
export const gameField = document.getElementById('game_field') as HTMLDivElement;
