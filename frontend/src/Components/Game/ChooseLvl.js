/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import { clearPage } from '../../utils/render';

class ChooseGame{
    constructor(){
        clearPage();
        const lvl = 0;
    }

    chooseLvl(){
        const main = document.querySelector('main');  
        main.innerHTML += `<div class="justify-self-center">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-0">
                <span>
                    <h1>Choose Level</h1>                    
                    <button value="Easy" class="btn btn-primary" id="cursor-Delete"> Easy </button>
                    <button value="Normal" class="btn btn-primary" id="cursor-Delete"> Normal </button>
                    <button value="Hard" class="btn btn-primary" id="cursor-Delete"> Hard </button>
                </span>
            </div>
        </div>
        `
    }
}

export default ChooseGame;