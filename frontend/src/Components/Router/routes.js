import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import ProfilPage from '../Pages/ProfilPage';
import Rulepage from '../Pages/RulePage';

const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/new': NewPage,
  '/profil' : ProfilPage,
  '/rules' : Rulepage
};

export default routes;
