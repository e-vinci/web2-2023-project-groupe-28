

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

const Footer = () => {
    const footerWrapper = document.querySelector('#footerWrapper');
    const footer = `
        <div class="dropdown dropdown-hover dropdown-top">
            <label data-theme="luxury" tabindex="0" class="btn m-1">Themes</label>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">

                <li><a data-theme="luxury">luxury</a></li> 
                <li><a data-theme="forest">forest</a></li>
                <li><a data-theme="dark">dark</a></li> 

                <li><a data-theme="synthwave">synthwave</a></li>
                <li><a data-theme="halloween">halloween</a></li>
                <li><a data-theme="black">black</a></li>

                <li><a data-theme="dracula">dracula</a></li>
                <li><a data-theme="business">business</a></li>
                <li><a data-theme="night">night</a></li>

                <li><a data-theme="coffee">coffee</a></li>
                <li><a data-theme="aqua">aqua</a></li>
                <li><a data-theme="garden">garden</a></li>

                <li><a data-theme="retro">retro</a></li>
                <li><a data-theme="valentine">valentine</a></li>
                <li><a data-theme="wireframe">wireframe</a></li>
            </ul>
        </div>
    `;
  
    footerWrapper.innerHTML = footer;
  
    // ----------------------------------------------changement de theme----------------------------------------------------------------------

  // Sélectionnez tous les liens du dropdown
  const dropdownLinks = document.querySelectorAll('.menu li a');

  // Définissez une fonction pour changer le thème
  function changeTheme(theme) {
    // Récupérez la balise <html>
    const htmlTag = document.getElementById('htmlTag');

    // Définissez la valeur de l'attribut data-theme de la balise <html>
    htmlTag.setAttribute('data-theme', theme);

  };

  // Ajoutez un gestionnaire d'événements pour le clic sur les liens du dropdown
  dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Récupérez la valeur de l'attribut data-theme du lien
      const themeValue = link.getAttribute('data-theme');

      // Appelez la fonction pour changer le thème
      changeTheme(themeValue);
    });
  });
  
  };
  
  export default Footer;