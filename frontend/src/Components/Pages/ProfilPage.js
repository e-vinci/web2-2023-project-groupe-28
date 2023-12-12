
import { getAuthenticatedUser } from '../../utils/auths';
import { clearPage, grow, returnHomePage } from '../../utils/render';

const ProfilPage = () => {
    clearPage();
    renderProfilPageForm();
};

function renderProfilPageForm() {
    const authenticatedUser = getAuthenticatedUser();
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
    span1Email.innerText = `${authenticatedUser.email}`;

    const submitEmail = document.createElement('input');
    submitEmail.value = 'Change Email';
    submitEmail.type = 'submit';
    submitEmail.className = 'btn btn-outline';
    submitEmail.id = 'neonButton';
    submitEmail.setAttribute('data-theme', 'luxury');

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
    span2Username.innerText = `${authenticatedUser.username}`;

    const submitUsername = document.createElement('input');
    submitUsername.value = 'Change Username';
    submitUsername.type = 'submit';
    submitUsername.className = 'btn btn-outline';
    submitUsername.id = 'neonButton';
    submitUsername.setAttribute('data-theme', 'luxury');

    const label3 = document.createElement('label');
    label3.className = 'label';

    const span3 = document.createElement('span');
    span3.className ='label-text';
    span3.innerText = 'Score of the user : ';

    const label3Score = document.createElement('label');
    label3Score.className = 'label';

    const span3Score = document.createElement('span');
    span3Score.className = 'label-text';
    span3Score.innerText = `${authenticatedUser.score}`;

    const label4 = document.createElement('label');
    label4.className = 'label';

    const span4 = document.createElement('span');
    span4.className = 'label-text';
    span4.innerText = 'Number of loss games : ';

    const label4Loss = document.createElement('label');
    label4Loss.className = 'label';

    const span4Loss = document.createElement('span');
    span4Loss.className = 'label-text';
    span4Loss.innerText = `${authenticatedUser.defeatNumber}`;

    const label5 = document.createElement('label');
    label5.className = 'label';

    const span5 = document.createElement('span');
    span5.className = 'label-text';
    span5.innerText = 'Number of win games : ';

    const label5Win = document.createElement('label');
    label5Win.className = 'label';

    const span5Win = document.createElement('span');
    span5Win.className = 'label-text';
    span5Win.innerText = `${authenticatedUser.victoryNumber}`;



    main.appendChild(div1);
    main.appendChild(returnBtn);
    div1.appendChild(div2);
    div2.appendChild(div3);
    div3.appendChild(form);
    form.appendChild(div4);
    div4.appendChild(title);

    // Email label + button
    div4.appendChild(label1);
    label1.appendChild(span1);
    label1.appendChild(label1Email);
    label1Email.appendChild(span1Email);
    label1Email.appendChild(submitEmail);
    submitEmail.addEventListener('click', changeEmail);

    // Username label + button
    div4.appendChild(label2);
    label2.appendChild(span2);
    label2.appendChild(label2Username);
    label2Username.appendChild(span2Username);
    label2Username.appendChild(submitUsername);
    submitUsername.addEventListener('click', changeUsername);

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

// to update later 
function changeEmail(event) {
    event.preventDefault();
    const email = document.querySelector('#span1Email').value;
    alert('Email changed');
    return email;
};

// to update later
function changeUsername(event) {
    event.preventDefault();
    const username = document.querySelector('#span2Username').value;
    alert('Username changed');
    return username;
};


export default ProfilPage;