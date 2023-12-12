import { clearAuthenticatedUser } from '../../utils/auths';
import Navbar from '../Navbar/Navbar';
import Navigate from '../Router/Navigate';

const Logout = async () => { // il est important de mettre async s'il y a un await
  await fetch('/api/auths/logout');
  clearAuthenticatedUser();
  Navbar();
  Navigate('/login');
};

export default Logout;
