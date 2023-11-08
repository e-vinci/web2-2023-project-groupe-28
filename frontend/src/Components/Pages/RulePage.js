import { clearPage } from '../../utils/render';

const RulePage = () => {
  clearPage();
  const main = document.querySelector('main');
  const login = `
  
  <img src="../../img/wireframe_img/logo.png"/>
  <h1>this is RulePage</h1>
  
  
  `
  main.innerHTML = login;


};

export default RulePage;