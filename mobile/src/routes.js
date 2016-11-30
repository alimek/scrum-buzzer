import { createRouter } from '@exponent/ex-navigation';

import HomePage from './containers/HomePage';
import Game from './containers/Game';

const Router = createRouter(() => ({
  home: () => HomePage,
  game: () => Game,
}));

export default Router;

