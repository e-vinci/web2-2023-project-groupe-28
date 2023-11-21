/* eslint-disable prefer-arrow-callback */

import { clearPage, grow /* , renderPageTitle */ } from '../../utils/render';
import Navigate from '../Router/Navigate';

const HomePage = () => {
  clearPage();
  const main = document.querySelector('main');
  main.innerHTML = `
    <div id="neon">
      <span>Battle</span>
      <span id="ship-neon">Ship</span>
    </div>

      <button id="redirectGameButton" class="btn btn-outline animate-bounce animate-duration-1000 animate-ease-in animate-normal animate-fill-forwards">Appuyez sur "Espace" pour lancer le jeu</button>
    
    
  `;
  const gameRedirectory = document.querySelector('#redirectGameButton');

  gameRedirectory.addEventListener('click', () => {
    Navigate('/game');
  });

  document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
      Navigate('/game');
    }
  });

  grow();

};

export default HomePage;
