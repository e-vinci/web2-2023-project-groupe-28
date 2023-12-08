import { clearPage } from '../../utils/render';

const RankPage = () => {
    clearPage();
    const main = document.querySelector('main');
    const login = `
    
    <div id="page-container-rule" class="card w-72 mx-auto my-8 bg-base-100 text-primary-content p-4" >
        <div id="padding">
            <div id="card-body-rule" class="card-body text-center">
                <div id="title-rule" class="card-title text-2xl text-center">Rank</div>  

                <p> N° | player :</p>
                <p> 1  | player1</p>
                <p> 2  | player2</p>
                <p> 3  | player3</p>
                <p> 4  | player4</p>
                <p> 5  | player5</p>
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


  };
  
export default RankPage;