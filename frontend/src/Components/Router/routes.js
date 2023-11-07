import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import ProfilPage from '../Pages/ProfilPage';
import LoginPage from '../Pages/LoginPage';

const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/new': NewPage,
  '/profil' : ProfilPage,
  '/login' : LoginPage,
};

export default routes;
