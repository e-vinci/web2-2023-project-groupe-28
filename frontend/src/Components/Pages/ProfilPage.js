import { getAuthenticatedUser } from '../../utils/auths';
import { clearPage, grow, returnHomePage } from '../../utils/render';

const ProfilPage = () => {
  clearPage();
  renderProfilPageForm();
};

async function renderProfilPageForm() {
  const authenticatedUser = getAuthenticatedUser();
  const dataGame = await getDataGameUser();
  const main = document.querySelector('main');

  const returnBtn = document.createElement('button');
  returnBtn.className = 'btn btn-outline';
  returnBtn.id = 'returnbtn';
  returnBtn.innerText = '<-';

  const div1 = document.createElement('div');
  div1.className = 'justify-self-center';

  const div2 = document.createElement('div');
  div2.className = 'hero-content flex-col lg:flex-row-reverse scale-110';

  const div3 = document.createElement('div');
  div3.className = 'card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-0';

  const form = document.createElement('form');
  form.className = 'card-body';
  form.style.paddingTop = '20%';

  const div4 = document.createElement('div');
  div4.className = 'form-control';

  const title = document.createElement('h1');
  title.className = 'label-text';
  title.innerText = 'Profil User';

  const label1 = document.createElement('label');
  label1.className = 'label';

  const span1 = document.createElement('span');
  span1.className = 'label-text';
  span1.innerText = 'Email : ';

  const label1Email = document.createElement('label');
  label1Email.className = 'label';

  const span1Email = document.createElement('span');
  span1Email.className = 'label-text';
  span1Email.id = 'span1Email';
  span1Email.innerText = `${authenticatedUser?.email}`;

  const label2 = document.createElement('label');
  label2.className = 'label';

  const span2 = document.createElement('span');
  span2.className = 'label-text';
  span2.innerText = 'Username : ';

  const label2Username = document.createElement('label');
  label2Username.className = 'label';

  const span2Username = document.createElement('span');
  span2Username.className = 'label-text';
  span2Username.id = 'span2Username';
  span2Username.innerText = `${authenticatedUser?.username}`;

  /* const submitUsername = document.createElement('input');
  submitUsername.value = 'Change Username';
  submitUsername.type = 'submit';
  submitUsername.className = 'btn btn-outline';
  submitUsername.id = 'neonButton';
  submitUsername.setAttribute('data-theme', 'luxury');

  const submitArrea = document.createElement('input');
  submitArrea.value = 'Enter new Username';
  submitArrea.type = 'text'; // Changer le type de 'hidden' à 'text'
  submitArrea.className = 'input input-bordered';
  submitArrea.id = 'inputUsername';
  submitArrea.setAttribute('data-theme', 'luxury');
  submitArrea.style.display = 'none'; // Cacher le champ de texte par défaut */

  const label3 = document.createElement('label');
  label3.className = 'label';

  const span3 = document.createElement('span');
  span3.className = 'label-text';
  span3.innerText = 'Score of the user : ';

  const label3Score = document.createElement('label');
  label3Score.className = 'label';

  const span3Score = document.createElement('span');
  span3Score.className = 'label-text';
  span3Score.innerText = `${dataGame?.score}`;

  const label4 = document.createElement('label');
  label4.className = 'label';

  const span4 = document.createElement('span');
  span4.className = 'label-text';
  span4.innerText = 'Number of loss games : ';

  const label4Loss = document.createElement('label');
  label4Loss.className = 'label';

  const span4Loss = document.createElement('span');
  span4Loss.className = 'label-text';
  span4Loss.innerText = `${dataGame?.defeatNumber}`;

  const label5 = document.createElement('label');
  label5.className = 'label';

  const span5 = document.createElement('span');
  span5.className = 'label-text';
  span5.innerText = 'Number of win games : ';

  const label5Win = document.createElement('label');
  label5Win.className = 'label';

  const span5Win = document.createElement('span');
  span5Win.className = 'label-text';
  span5Win.innerText = `${dataGame?.victoryNumber}`;

  main.appendChild(div1);
  main.appendChild(returnBtn);
  div1.appendChild(div2);
  div2.appendChild(div3);
  div3.appendChild(form);
  form.appendChild(div4);
  div4.appendChild(title);

  // Email label
  div4.appendChild(label1);
  label1.appendChild(span1);
  label1.appendChild(label1Email);
  label1Email.appendChild(span1Email);

  // Username label + button
  div4.appendChild(label2);
  label2.appendChild(span2);
  label2.appendChild(label2Username);
  label2Username.appendChild(span2Username);
  /* label2Username.appendChild(submitUsername);
  submitUsername.addEventListener('click', changeUsername);
  label2Username.appendChild(submitArrea); */

  // Score label
  div4.appendChild(label3);
  label3.appendChild(span3);
  label3.appendChild(label3Score);
  label3Score.appendChild(span3Score);

  // Loss label
  div4.appendChild(label4);
  label4.appendChild(span4);
  label4.appendChild(label4Loss);
  label4Loss.appendChild(span4Loss);

  // Win label
  div4.appendChild(label5);
  label5.appendChild(span5);
  label5.appendChild(label5Win);
  label5Win.appendChild(span5Win);

  returnHomePage();
  grow();
}

// Fonction pour changer le nom d'utilisateur en utilisant la methode PATCH de l'api router/profil
/* function changeUsername(e) {
  e.preventDefault();
  const authenticatedUser = getAuthenticatedUser();
  const inputUsername = document.getElementById('inputUsername');
  const span2Username = document.getElementById('span2Username');
  const submitUsername = document.getElementById('neonButton');

  // Si le champ de texte est caché, on l'affiche et on change le bouton
  if (inputUsername.style.display === 'none') {
    inputUsername.style.display = 'block';
    submitUsername.value = 'Submit';
  } else {
    // Sinon on cache le champ de texte et on change le bouton
    inputUsername.style.display = 'none';
    submitUsername.value = 'Change Username';

    // On récupère la valeur du champ de texte
    const newUsername = inputUsername.value;

    // On fait une requête PATCH à l'api router/profil
    fetch(`/api/profil/${authenticatedUser.username}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authenticatedUser.token}`,
      },
      body: JSON.stringify({ username: newUsername }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Si la requête est un succès, on change le nom d'utilisateur dans le DOM
        if (data.success) {
          span2Username.innerText = newUsername;
        }
      })
      .catch((err) => console.log(err));
  }
} */

async function getDataGameUser() {
  try {
    const authenticatedUser = getAuthenticatedUser();
    const response = await fetch(`/api/profil/${authenticatedUser.username}`);
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

    const dataGame = await response.json();
    console.log('dataGame:');
    console.log(dataGame);
    return dataGame;
  } catch (error) {
    console.error('getDataGameUser::error: ', error);
    throw error;
  }
}

export default ProfilPage;
