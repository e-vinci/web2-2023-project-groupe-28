/* eslint-disable no-console */
import { setAuthenticatedUser } from '../../utils/auths';
import { clearPage, grow, returnHomePage, playVideoIfPaused, renderError } from '../../utils/render';

import Navigate from '../Router/Navigate';
import Navbar from '../Navbar/Navbar';

const LoginPage = () => {
  playVideoIfPaused();
  clearPage();
  // renderPageTitle('Login');
  renderLoginForm();
};

function renderLoginForm() {
  // récupère le contenu de la balise html <main>
  const main = document.querySelector('main');

  const returnBtn = document.createElement('button');
  returnBtn.className = 'btn btn-outline';
  returnBtn.id = 'returnbtn';
  returnBtn.innerText = '<-';

  // créer une balise html <div>
  const div1 = document.createElement('div');
  // créer une classe dans la balise <div class="justify-self-center">
  div1.className = 'justify-self-center';

  const div2 = document.createElement('div');
  div2.className = 'hero-content flex-col lg:flex-row-reverse scale-110';
  // créer un style dans la balise <div class="..." style="padding-top: 50%">
  div2.style.paddingTop = '50%';

  const div3 = document.createElement('div');
  div3.className = 'card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-0';

  const form = document.createElement('form');
  form.className = 'card-body';

  const div4 = document.createElement('div');
  div4.className = 'form-control';

  const title = document.createElement('h1');
  // écrit dans la balise h1 <h1>Login</h1>
  title.className = 'label-text';
  title.innerText = 'Login';

  const label1 = document.createElement('label');
  label1.className = 'label';

  const span1 = document.createElement('span');
  span1.className = 'label-text';
  span1.innerText = 'Login User';

  const eMail = document.createElement('input');
  eMail.type = 'text';
  eMail.id = 'loginUser';
  eMail.placeholder = 'Email or username';
  eMail.className = 'input input-bordered';
  // rajoute un required dans la balise <input type="..." id="..." placeholder="..." class="..." required/>
  eMail.required = true;

  const div5 = document.createElement('div');
  div5.className = 'form-control';

  const label2 = document.createElement('label');
  label2.className = 'label';

  const span2 = document.createElement('span');
  span2.className = 'label-text';
  span2.innerText = 'Password';

  const password = document.createElement('input');
  password.type = 'password';
  password.placeholder = 'password';
  password.className = 'input input-bordered';
  password.required = true;
  password.id = 'password';

  const label3 = document.createElement('label');
  label3.className = 'label';

  const spanerror1 = document.createElement('spanError');

  const registerPage = document.createElement('a');
  registerPage.className = 'label-text-alt link link-hover';
  registerPage.innerText = 'Create a free account';
  registerPage.id = 'cursor-Delete';

  const div6 = document.createElement('div');
  div6.className = 'form-control mt-6';

  const submit = document.createElement('input');
  submit.value = 'Login';
  submit.type = 'submit';
  submit.className = 'btn btn-outline';
  submit.id = 'neonButton';
  submit.setAttribute('data-theme', 'luxury');

  /* ajoute la balise div à main 
    <main>
        <div>
            ...
        </div>
    </main>
    */

  main.appendChild(div1);
  main.appendChild(returnBtn);
  div1.appendChild(div2);
  div2.appendChild(div3);
  div3.appendChild(form);
  form.appendChild(div4);
  div4.appendChild(title);
  div4.appendChild(label1);
  label1.appendChild(span1);
  div4.appendChild(eMail);
  form.appendChild(div5);
  div5.appendChild(label2);
  label2.appendChild(span2);
  div5.appendChild(password);
  div5.appendChild(label3);
  div5.appendChild(spanerror1);
  label3.appendChild(registerPage);
  form.appendChild(div6);
  div6.appendChild(submit);
  form.addEventListener('submit', onLogin);
  registerPage.onclick = () => {
    Navigate('/register');
  };

  returnHomePage();

  grow();
}

async function onLogin(event) {
  event.preventDefault();
  const loginUser = document.querySelector('#loginUser').value;
  const password = document.querySelector('#password').value;
  const response = await fetch('/api/auths/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      loginUser,
      password,
    }),
  });
  if (!response.ok) {
    renderError('Incorrect email, username or password');
    //  throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
  } else {
    const authenticatedUser = await response.json();

    console.log('Authenticated user : ', authenticatedUser);

    setAuthenticatedUser(authenticatedUser);

    Navbar();

    Navigate('/');
  }
}

export default LoginPage;
