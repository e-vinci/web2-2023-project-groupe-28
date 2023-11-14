

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
      <button id="cursor-Delete" class="btn btn-ghost" href="#" data-uri="/rank"><svg data-uri="/rank"  class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path data-uri="/rank" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg></button>
      <button id="cursor-Delete" class="btn btn-ghost" href="#" data-uri="/rule">Rules</button>
    </div>

    <div class="navbar-center">
      <a id="cursor-Delete" class="btn btn-ghost normal-case text-xl" href="#" data-uri="/" >BattleShip</a>
    </div>

    <div class="navbar-end">

      <button id="cursor-Delete" class="btn btn-ghost" href="#" data-uri="/game">Game</button>
      <button id="cursor-Delete" class="btn btn-ghost" href="#" data-uri="/new">New Page</button>
      <button id="cursor-Delete" class="btn btn-ghost" href="#" data-uri="/login">Login</button>
      <button id="cursor-Delete" class="btn btn-ghost" href="#" data-uri="/register">Register</button>

    </div>
  </div>
  `;

  navbarWrapper.innerHTML = navbar;

  

};

export default Navbar;
