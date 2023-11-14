import { clearPage } from '../../utils/render';

const RankPage = () => {
    clearPage();
    const main = document.querySelector('main');
    const login = `
    <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          
          <ol>
            <li>Pomme</li>
            <li>Banane</li>
            <li>Cerise</li>
            <li>Datte</li>
            <li>Endive</li>
            <li>Fraise</li>
            <li>Grenade</li>
            <li>Haricot</li>
            <li>Ignames</li>
            <li>Jujube</li>
            <li>Kiwi</li>
            <li>Litchi</li>
            <li>Mangue</li>
            <li>Nectarine</li>
            <li>Orange</li>
            <li>Poire</li>
            <li>Quetsche</li>
            <li>Raisin</li>
            <li>Satsuma</li>
            <li>Tomate</li>
          </ol>
        </div>
    </div>
    `
    main.innerHTML = login;


  };
  
  export default RankPage;