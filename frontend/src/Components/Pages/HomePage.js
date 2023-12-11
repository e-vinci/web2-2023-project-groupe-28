/* eslint-disable prefer-arrow-callback */

import { clearPage, grow, playVideoIfPaused /* , renderPageTitle */ } from '../../utils/render';
import Navigate from '../Router/Navigate';

const HomePage = () => {
  playVideoIfPaused();
  clearPage();
  const main = document.querySelector('main');
  main.innerHTML = `
  
    <div id="neon">
      <span>Battle</span>
      <span id="ship-neon">Ship</span>
    </div>

   
    <button id="redirectGameButton" class="btn btn-outline animate-bounce animate-duration-1000 animate-ease-in animate-normal animate-fill-forwards">Press "Space" to play</button>
   

      
    
  `;

  // redirect to game page
  const gameRedirectory = document.querySelector('#redirectGameButton');

  gameRedirectory.addEventListener('click', () => {
    Navigate('/game');
  });

  if (gameRedirectory != null) {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'Space') {
        Navigate('/game');
      }
    });
  }

 


  grow();

};

export default HomePage;
