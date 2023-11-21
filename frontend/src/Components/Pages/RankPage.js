import { clearPage, grow } from '../../utils/render';

const RankPage = () => {
    clearPage();
    const main = document.querySelector('main');
    const login = `
    <h1>this is RankPage</h1>
    `
    main.innerHTML = login;

    grow();
  };
  
  export default RankPage;