/* eslint-disable no-plusplus */
/* eslint-disable no-import-assign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { clearPage } from '../../utils/render';
import InitGame from '../Game/Game';
import ChooseLvl from '../Game/ChooseLvl';


const GamePage = () => {
    clearPage();
    const choose = new ChooseLvl();
    choose.chooseLvl();

    let lvl;
    const boutons = document.querySelectorAll("button");
    
    boutons.forEach((bouton) => {
        bouton.addEventListener('click', () => {
            lvl = bouton.value;
            console.log(lvl);
            if(lvl !== undefined){
                const game = new InitGame(lvl);
                game.renderMenuFromString();
                const divs = document.querySelectorAll("td.color-div");
                const divsBis = document.querySelectorAll("td.color-div2"); 

                divs.forEach((div) => {
                    div.addEventListener("click", () => {
                        if(game.tourJoueur(div) && game.compteurNavireBotTouche < 20){
                            game.tourBot(divsBis);
                        }               
                    });
                });
            }
        });
    });    

      
};


export default GamePage;