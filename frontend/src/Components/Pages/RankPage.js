/*eslint-disable*/
import { clearPage, grow, playVideoIfPaused, returnHomePage } from '../../utils/render';
import { getAuthenticatedUserLeaderboard } from '../../utils/leaderboard';


const RankPage = () => {
    playVideoIfPaused();
    clearPage();
    const user = getAuthenticatedUserLeaderboard();
    const main = document.querySelector('main');
    const login = `
    
    <div id="page-container-rule" class="card w-72 mx-auto my-8 bg-base-100 text-primary-content p-4" >
        <div id="padding">
            <button class="btn btn-outline" id="returnbtn"><-</button>
            <div id="card-body-rule" class="card-body text-center">
                <div id="title-rule" class="card-title text-2xl text-center">Rank</div>  
                <br>
                <p> N° | player :</p>
                <br>
                <p> 1  | Arthi25</p>
                <p> 2  | heathcliff</p>
                <p> 3  | boxvers</p>
                <p> 4  | nemuriciu</p>
                <p> 5  | jdrjuju</p>
                <p> 6  | player6</p>
                <p> 7  | player7</p>
                <p> 8  | player8</p>
                <p> 9  | player9</p>
                <p> 10 | player10</p>
            </div>
        </div>
    </div>
  
    `
    main.innerHTML = login;
    returnHomePage();
    grow();
  };
  
export default RankPage;