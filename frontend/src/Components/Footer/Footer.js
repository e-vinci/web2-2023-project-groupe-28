/* eslint-disable no-unused-vars */
/* eslint-disable no-lonely-if */


/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

// Creation du footer

const Footer = () => {
    const footerWrapper = document.querySelector('#footerWrapper');
    const footer = `
    <button id="neonButton" class="btn btn-outline" data-theme="luxury">fullscreen</button>
    
    `;
  
    footerWrapper.innerHTML = footer;
  

     // get the button
  const btn = footerWrapper.querySelector('.btn');

  // add event listener to the button
  btn.addEventListener('click', toggleFullScreen);

   // sound mute/unmute when clicking on the button
   const bgAudio = document.getElementById('bg-audio');

   document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
      bgAudio.play();
    } else {
      bgAudio.pause();
    }
  });
};

    function toggleFullScreen() {
      if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
          document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
          document.documentElement.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
          document.msExitFullscreen();
        }
      }
    }
  
    
  
  export default Footer;