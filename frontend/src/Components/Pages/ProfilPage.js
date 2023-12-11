/* 
    to review when authenticated is done
    need user to be authenticated
*/
import { getAuthenticatedUser } from '../../utils/auths';
import { clearPage, grow, returnHomePage } from '../../utils/render';


const ProfilPage = () =>{
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
    span1.innerText = 'Email';

    const span1Email = document.createElement('span');
    span1Email.className = 'label-text'
    span1Email.innerText = `${authenticatedUser.email}`

    const label2 = document.createElement('label');
    label2.className = 'label';

    const span2 = document.createElement('span');
    span2.className = 'label-text';
    span2.innerText = 'Username';

    const div5 = document.createElement('div');
    div5.className = 'form-control';

    const label3 = document.createElement('label');
    label3.className = 'label';

    const span3 = document.createElement('span');
    span3.className ='label-text';
    span3.innerText = 'Password';

    const label4 = document.createElement('label');
    label4.className = 'label';

    const div6 = document.createElement('div');
    div6.className = 'form-control mt-6';

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
    div4.appendChild(label2);
    label2.appendChild(span2);
    form.appendChild(div5);
    div5.appendChild(label3);
    label3.appendChild(span3)
    div5.appendChild(label4);
    form.appendChild(div6);
    div6.appendChild(submit);

    returnHomePage();

    grow();
}
export default ProfilPage;
