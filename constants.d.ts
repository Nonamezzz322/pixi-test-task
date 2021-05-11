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
export declare const gameFieldSize: IgameFieldSize;
/**
* minimum shape size, in pixels
*/
export declare const minShapeSize = 30;
/**
* An array for randomly selecting a shape to generate
*/
export declare const shapesArray: (typeof RandomShape | typeof Circle | typeof Ellipse | typeof Rectangle | typeof Triangle | typeof Pentagon | typeof Hexagon)[];
/**
* Initialization of Html elements
*/
export declare const shapesQuantity: HTMLSpanElement;
export declare const areaCovered: HTMLSpanElement;
export declare const shapesPerSecond: HTMLSpanElement;
export declare const currentGravity: HTMLSpanElement;
export declare const decreaseShapes: HTMLButtonElement;
export declare const increaseShapes: HTMLButtonElement;
export declare const decreaseGravity: HTMLButtonElement;
export declare const increaseGravity: HTMLButtonElement;
export declare const gameField: HTMLDivElement;
