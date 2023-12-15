

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

import { getAuthenticatedUser, isAuthenticated } from '../../utils/auths';

const Navbar = () => {
  renderNavbar();
};

function renderNavbar() {
  const authenticatedUser = getAuthenticatedUser();

  const anonymousUserNavbar = `
        <div class="navbar bg-base-100" style="background: transparent;">

    <div class="navbar-start">
      <button id="neonButton-alternative" class="btn btn-ghost" data-theme="luxury" href="#" data-uri="/rank">Rank</button>
      <button id="neonButton-alternative" class="btn btn-ghost" data-theme="luxury" href="#" data-uri="/rule" style="margin-left: 3mm;">Rules</button>
    </div>

    <div class="navbar-center">
    </div>

    <div class="navbar-end">

      <button id="neonButton-alternative" class="btn btn-ghost" data-theme="luxury" href="#" data-uri="/login" style="margin-right: 3mm;">Login</button>
      <button id="neonButton-alternative" class="btn btn-ghost" data-theme="luxury" href="#" data-uri="/register">Register</button>

    </div>
  </div>
  `;
  const authenticatedUserNavbar = `
  <div class="navbar bg-base-100" style="background: transparent;">

<div class="navbar-start">
<button id="neonButton-alternative" class="btn btn-ghost" data-theme="luxury" href="#" data-uri="/rank">Rank</button>
<button id="neonButton-alternative" class="btn btn-ghost" data-theme="luxury" href="#" data-uri="/rule" style="margin-left: 3mm;">Rules</button>
</div>

<div class="navbar-center">
</div>
<p style="text-align: center; color: black; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Hi ${authenticatedUser?.username} !</p>
<div class="navbar-end">

<button id="neonButton-alternative" class="btn btn-ghost" data-theme="luxury" href="#" data-uri="/profil" style="margin-right: 3mm;">Profil</button>

<button id="neonButton-alternative" class="btn btn-ghost" data-theme="luxury" href="#" data-uri="/logout">Logout</button>

</div>
</div>
`;

  const navbarWrapper = document.querySelector('#navbarWrapper');

  navbarWrapper.innerHTML = isAuthenticated() ? authenticatedUserNavbar : anonymousUserNavbar;

};

export default Navbar;
