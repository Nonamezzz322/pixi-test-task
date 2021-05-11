import './styles.css';
import ShapeController from './Controllers/ShapeController';
import ShapeView from './View/ShapeView';
import AppModel from './Models/App';

/**
 * The entry point of game, init when window.onload
 */
const app = (): void => {
  const model: AppModel = new AppModel();
  const view: ShapeView = new ShapeView();
  const controller: ShapeController = new ShapeController(model, view);

  controller.init();
};

window.onload = app;
