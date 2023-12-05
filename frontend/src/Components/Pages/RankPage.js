import { clearPage } from '../../utils/render';

const RankPage = () => {
    clearPage();
    const main = document.querySelector('main');
    const login = `
    
    <div id="page-container" class="card w-72 mx-auto my-8 bg-base-100 text-primary-content p-4" >
        <div id="padding">
            <div id="card-body" class="card-body">
                <h1 class="text-align-center">Rank</h1> 
            </div>
        </div>
    </div>
  
    `
    main.innerHTML = login;


  };
  
export default RankPage;