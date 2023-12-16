
import { setAuthenticatedUser } from '../../utils/auths';
import Navigate from '../Router/Navigate';
import Navbar from '../Navbar/Navbar';
import { clearPage, grow, playVideoIfPaused, renderError, returnHomePage } from '../../utils/render';


const RegisterPage = () => {
    playVideoIfPaused();
    clearPage();
    // renderPageTitle('Login');
    renderRegisterForm();
};

function renderRegisterForm() {
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
    form.style.paddingTop = '5%';

    const div4 = document.createElement('div');
    div4.className = 'form-control';

    const title = document.createElement('h1');
    title.className = 'label-text';
    title.innerText = 'Create an Account';

    const label1 = document.createElement('label');
    label1.className = 'label';

    const span1 = document.createElement('span');
    span1.className = 'label-text';
    span1.innerText = 'Email';

    const email = document.createElement('input');
    email.type = 'text';
    email.id = 'email';
    email.placeholder = 'email';
    email.className = 'input input-bordered';
    email.required = true;

    const label2 = document.createElement('label');
    label2.className = 'label';

    const span2 = document.createElement('span');
    span2.className = 'label-text';
    span2.innerText = 'Username';

    const username = document.createElement('input');
    username.id = 'username';
    username.className = 'input input-bordered';
    username.type = 'text';
    username.placeholder = 'username';
    username.required = true;

    const div5 = document.createElement('div');
    div5.className = 'form-control';

    const label3 = document.createElement('label');
    label3.className = 'label';

    const span3 = document.createElement('span');
    span3.className ='label-text';
    span3.innerText = 'Password';

    const password = document.createElement('input');
    password.className = 'input input-bordered';
    password.type = 'password';
    password.id = 'pwd1';
    password.placeholder = 'password';
    password.required = true;

    const label4 = document.createElement('label');
    label4.className = 'label';

    const span4 = document.createElement('span');
    span4.className = 'label-text';
    span4.innerText = 'Confirm Password';

    const confirmPassword = document.createElement('input');
    confirmPassword.className = 'input input-bordered';
    confirmPassword.type = 'password';
    confirmPassword.id = 'pwd2';
    confirmPassword.placeholder = 'password';
    confirmPassword.required = true;

    const div6 = document.createElement('div');
    div6.className = 'form-control mt-6';

    const div7 = document.createElement('div');
    div7.className = 'form-control mt-4'; // Ajoutez une marge en haut

    const checkboxLabel = document.createElement('label');
    checkboxLabel.className = 'label';
    
    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.id = 'terms';
    checkboxInput.required = true; // La checkbox est maintenant requise
    
    const spanCheckbox = document.createElement('span');
    spanCheckbox.className = 'label-text';
    
    const rgpdLink = document.createElement('a');
    rgpdLink.href = 'https://www.autoriteprotectiondonnees.be/professionnel/rgpd-?ssp=1&darkschemeovr=1&setlang=fr-BE&safesearch=moderate'; 
    rgpdLink.target = '_blank'; 
    rgpdLink.innerText = 'I agree to the Terms of Use and Privacy Policy';

    const div8 = document.createElement('div');
    div8.className = 'form-control mt-6';

    const spanerror1 = document.createElement('spanError');

    const submit = document.createElement('input');
    submit.className = 'btn btn-outline';
    submit.value = 'Register';
    submit.type = 'submit';
    submit.id = 'neonButton';
    submit.setAttribute('data-theme', 'luxury');

    main.appendChild(div1);
    main.appendChild(returnBtn);
    div1.appendChild(div2);
    div2.appendChild(div3);
    div3.appendChild(form);
    form.appendChild(div4);
    div4.appendChild(title);
    div4.appendChild(label1);
    label1.appendChild(span1);
    div4.appendChild(email);
    div4.appendChild(label2);
    label2.appendChild(span2);
    div4.appendChild(username);
    form.appendChild(div5);
    div5.appendChild(label3);
    label3.appendChild(span3);
    div5.appendChild(password);
    div5.appendChild(label4);
    label4.appendChild(span4);
    div5.appendChild(confirmPassword);
    div5.appendChild(spanerror1);
    form.appendChild(div6);
    div6.appendChild(div7);
    div7.appendChild(checkboxLabel);
    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(spanCheckbox);
    spanCheckbox.appendChild(rgpdLink);
    form.appendChild(div8);
    div8.appendChild(submit);
    div5.appendChild(spanerror1);
    form.addEventListener('submit', onRegister);

    returnHomePage();

    grow();
}
async function onRegister(e) {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#pwd1').value;
    const passwordConfirm = document.querySelector('#pwd2').value;

    const regex = /^[a-zA-Z0-9]{5,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(username)) {
        renderError('username must be between 5 and 15 characters and must not have special characters');
        return;
    }
    if (!emailRegex.test(email)) {
        renderError('email is not valid');
        return;
    }

    if (password.length < 8) {
        renderError('The password must contain at least 8 characters.');
        return;
    }

    if (password !== passwordConfirm) {
        renderError('Passwords do not match.');
        return;
    }

    const options = {
        method: 'POST',
        body: JSON.stringify({
          username,
          email,
          password,
          passwordConfirm,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
    };
  
    const response = await fetch('/api/auths/register', options);
  
    if (!response.ok) {
        if (response.status === 409) {
            renderError(`email : ${email}\n or username : ${username}\n has already been created`);
        } else {
            throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
        }
    } else {

    const authenticatedUser = await response.json();

    console.log('Newly registered & authenticated user : ', authenticatedUser);

    setAuthenticatedUser(authenticatedUser);

    Navbar();
    
    Navigate('/');
    }
}

export default RegisterPage;