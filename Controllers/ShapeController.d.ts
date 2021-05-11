import ShapeView from '../View/ShapeView';
import AppModel from '../Models/App';
/**
 * The class responsible for the logic and control of the application when the user interacts with it
 * @param {number} renderCounter - counter of the number of rendering frames, needed for smooth generation of shapes,
 *                                 depending on the shapesPerSec parameter
 * @param {number} shapesPerSec - the number of shapes that are generated per second
 * @param {ShapeView} view - an instance of the ShapeView class, for managing it through a controller
 * @param {AppModel} model - an instance of the AppModel class, for managing it through a controller
 */
export default class ShapeController {
    private view;
    private model;
    private renderCounter;
    private shapesPerSec;
    constructor(model: AppModel, view: ShapeView);
    /**
    * @method
    * determines the parameters of the game field
    */
    init(): void;
    /**
    * @method
    * changes gravity on the game field
    */
    private changeGravity;
    /**
    * @method
    * changes the number of generated shapes per second
    */
    private changeShapesQuantity;
    /**
    * @method
    * defines the parameters for creating a new shape
    */
    private generateNewShape;
    /**
    * @method
    * generate shape depend on shape per the second option
    */
    private generateShapes;
    /**
    * @method
    * determines for updating all parameters of the game field
    */
    private updateShapes;
    /**
    * @method
    * @param {number} oneFrameTime - duration of 1 frame of rendering (16.(6)ms)
    * @param {boolean} shouldGenerate - a flag that allows drawing the shape when true
    */
    private tickerLogic;
}
