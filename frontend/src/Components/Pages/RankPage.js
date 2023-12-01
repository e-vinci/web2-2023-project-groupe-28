import { clearPage, grow, playVideoIfPaused } from '../../utils/render';

const RankPage = () => {
    playVideoIfPaused();
    clearPage();
    const main = document.querySelector('main');
    const login = `
    <h1>this is RankPage</h1>
    `
    main.innerHTML = login;

    grow();
  };
  
  export default RankPage;