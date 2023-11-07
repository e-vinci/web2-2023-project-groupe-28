/* 
    to review when authenticated is done
    need user to be authenticated
*/

const ProfilPage = () =>{
    const main = document.querySelector('main');
    main.innerHTML = `<div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">
            <div class="col-xl-6 col-md-12">
                <div class="card user-card-full">
                    <div class="row m-l-0 m-r-0">
                        <div class="col-sm-4 bg-img-profil user-profile">
                            <div class="card-block text-center">
                                    <div class="img-profil">
                                        <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image">
                                    </div>
                            </div>
                            </div>
                                <div class="col-sm-8">
                                    <div class="card-block">
                                        <h6 class="m-b-20 p-b-5 b-b-default title-info-user">Information</h6>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <p class="box-ecart title-info-user">Username</p>
                                                    <h6 class="text-muted title-info-user"></h6>
                                                    <p class="box-ecart title-info-user">Number of game played</p>
                                                       <h6 class="text-muted title-info-user"></h6>
                                                    <p class="box-ecart title-info-user">Rank</p>
                                                    <h6 class="text-muted title-info-user"></h6>
                                                    <p class="box-ecart title-info-user">Number of win game</p>
                                                    <h6 class="text-muted title-info-user"></h6>
                                                    <p class="box-ecart title-info-user">Number of loss game</p>
                                                    <h6 class="text-muted title-info-user"></h6>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
};  

export default ProfilPage;
