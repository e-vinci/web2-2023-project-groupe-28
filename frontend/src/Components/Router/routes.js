/*eslint-disable*/
import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import ProfilPage from '../Pages/ProfilPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import RankPage from '../Pages/RankPage';
import RulePage from '../Pages/RulePage';
import Logout from '../Logout/Logout';;

const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/profil' : ProfilPage,
  '/login' : LoginPage,
  '/register' : RegisterPage,
  '/rank' : RankPage,
  '/rule' : RulePage,
  '/logout': Logout,
};

export default routes;
