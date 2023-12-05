import { clearPage, grow, returnHomePage /* , renderPageTitle */ } from '../../utils/render';
import { setAuthenticatedUser } from '../../utils/auths';
import Navigate from '../Router/Navigate';
// import Navigate from '../Router/Navigate';

const RegisterPage = () => {
    clearPage();
    // renderPageTitle('Login');
    renderRegisterForm();
};

function renderRegisterForm() {
    const main = document.querySelector('main');

    const returnBtn = document.createElement('button');
    returnBtn.className = 'btn btn-outline';
    returnBtn.id = 'returnbtn';
    returnBtn.innerText = '<--';

    const div1 = document.createElement('div');
    div1.className = 'justify-self-center';

    const div2 = document.createElement('div');
    div2.className = 'hero-content flex-col lg:flex-row-reverse scale-110';

    const div3 = document.createElement('div');
    div3.className = 'card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-50';

    const form = document.createElement('form');
    form.className = 'card-body';
    form.style.paddingTop = '20%';

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

    const submit = document.createElement('input');
    submit.className = 'btn btn-primary';
    submit.value = 'Register';
    submit.type = 'submit';
    submit.id = 'cursor-Delete';

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
    label3.appendChild(span3)
    div5.appendChild(password);
    div5.appendChild(label4);
    label4.appendChild(span4);
    div5.appendChild(confirmPassword);
    form.appendChild(div6);
    div6.appendChild(submit);
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
    // eslint-disable-next-line no-use-before-define
    if (password !== passwordConfirm) return;

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
        throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    }

    const authenticatedUser = await response.json();

    console.log('Newly registered & authenticated user : ', authenticatedUser);

    setAuthenticatedUser(authenticatedUser);
    
    Navigate('/');
}

export default RegisterPage;