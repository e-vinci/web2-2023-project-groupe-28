import Navigate from '../Components/Router/Navigate';

const innerCursor = document.querySelector(".inner-cursor");

const clearPage = () => {
  const main = document.querySelector('main');
  main.innerHTML = '';
};

const renderPageTitle = (title) => {
  if (!title) return;
  const main = document.querySelector('main');
  const pageTitle = document.createElement('h4');
  pageTitle.innerText = title;
  main.appendChild(pageTitle);
};

// aggrandit le curseur quand il passe sur un lien, un bouton ou un champ de saisie
function grow() {
  const links = Array.from(document.querySelectorAll("input, button, a"));

  console.log(links);

  links.forEach((link) => {
      link.addEventListener("mouseover", () => {
          innerCursor.classList.add("grow");
      });
      link.addEventListener("mouseleave", () => {
          innerCursor.classList.remove("grow");
      });
  });
}

function returnHomePage() {
  // redirect to game page
  const gameRedirectory = document.querySelector('#returnbtn');

  gameRedirectory.addEventListener('click', () => {
      Navigate('/');
  });
}

function playVideoIfPaused() {
  const bgVideo = document.querySelector('#bg-video'); // Replace '#bgVideoId' with the actual id or selector of your background video
  if (bgVideo && bgVideo.paused) {
    bgVideo.play();
  }
}

export { clearPage, renderPageTitle, grow, returnHomePage, playVideoIfPaused };
