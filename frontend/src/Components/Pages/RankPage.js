/*eslint-disable*/
import { clearPage, grow, playVideoIfPaused, returnHomePage } from '../../utils/render';
import { getAuthenticatedUserLeaderboard } from '../../utils/leaderboard';


const RankPage = async () => {
    playVideoIfPaused();
    clearPage();
    const main = document.querySelector('main');

    const list = await onBestScore();

    const login = `
    
    <div id="page-container-rule" class="card w-72 mx-auto my-8 bg-base-100 text-primary-content p-4" >
        <div id="padding">
            <button class="btn btn-outline" id="returnbtn"><-</button>
            <div id="card-body-rule" class="card-body text-center">
                <div id="title-rule" class="card-title text-2xl text-center">Rank</div>  
                <br>
                <p> N° | player : | score : </p>
                <br>
                <p> 1  | ${list.tableName[0]?.username} | ${list.records[0]?.score}</p>
                <p> 2  | ${list.tableName[1]?.username} | ${list.records[1]?.score}</p>
                <p> 3  | ${list.tableName[2]?.username} | ${list.records[2]?.score}</p>
                <p> 4  | ${list.tableName[3]?.username} | ${list.records[3]?.score}</p>
                <p> 5  | ${list.tableName[4]?.username} | ${list.records[4]?.score}</p>
                <p> 6  | ${list.tableName[5]?.username} | ${list.records[5]?.score}</p>
                <p> 7  | ${list.tableName[6]?.username} | ${list.records[6]?.score}</p>
                <p> 8  | ${list.tableName[7]?.username} | ${list.records[7]?.score}</p>
                <p> 9  | ${list.tableName[8]?.username} | ${list.records[8]?.score}</p>
                <p> 10 | ${list.tableName[9]?.username} | ${list.records[9]?.score}</p>
            </div>
        </div>
    </div>
  
    `

    async function onBestScore() {
        const response = await fetch('/api/leaderboard/bestScore', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
        } else {
          const listScore = await response.json();
          return listScore;
        }      
    }

    main.innerHTML = login;
    returnHomePage();
    grow();
  };
  
export default RankPage;