

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

const Navbar = () => {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  const navbar = `
        <div class="navbar bg-base-100" style="background: transparent;">

    <div class="navbar-start">
      <button id="neonButton-alternative" class="btn btn-ghost" data-theme="luxury" href="#" data-uri="/rank">Rank</button>
      <button id="neonButton-alternative" class="btn btn-ghost" data-theme="luxury" href="#" data-uri="/rule">Rules</button>
    </div>

    <div class="navbar-center">
    </div>

    <div class="navbar-end">
    
      <button id="neonButton-alternative" class="btn btn-ghost" data-theme="luxury" href="#" data-uri="/login" style="margin-right: 3mm;">Login</button>
      <button id="neonButton-alternative" class="btn btn-ghost" data-theme="luxury" href="#" data-uri="/register">Register</button>

    </div>
  </div>
  `;

  navbarWrapper.innerHTML = navbar;

  

};

export default Navbar;
