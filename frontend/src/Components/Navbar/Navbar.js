

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

const Navbar = () => {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  const navbar = `
        <div class="navbar bg-base-100">
    <div class="navbar-start">
      <button class="btn btn-ghost" href="#" data-uri="/rank">Rank</button>
      <button class="btn btn-ghost" href="#" data-uri="/rule">Rules</button>
    </div>
    <div class="navbar-center">
    
    <a class="btn btn-ghost normal-case text-xl" href="#" data-uri="/" >BattleShip</a>
    </div>
    <div class="navbar-end">

      <button class="btn btn-ghost" href="#" data-uri="/game">Game</button>
      <button class="btn btn-ghost" href="#" data-uri="/new">New Page</button>
      <button class="btn btn-ghost" href="#" data-uri="/login">Login</button>
      <button class="btn btn-ghost" href="#" data-uri="/register">Register</button>
      

      

    </div>
  </div>
  `;

  navbarWrapper.innerHTML = navbar;

  

};

export default Navbar;
