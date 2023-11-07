const RegisterPage = () => {
    const main = document.querySelector('main');
    const login = `
    <div class="justify-self-center">
    <div class="hero-content flex-col lg:flex-row-reverse scale-110" >
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-50">
        <form class="card-body" style="padding-top: 20%;">
          <div class="form-control">
          <h1>Create an Account</h1>
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" class="input input-bordered" required />

            <label class="label">
              <span class="label-text">Username</span>
            </label>
            <input type="text" placeholder="username" class="input input-bordered" required />
          </div>
          <div class="form-control">

            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" class="input input-bordered" required />

            <label class="label">
              <span class="label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm password" class="input input-bordered" required />
            
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>

    `
    main.innerHTML = login;


  };
  
  export default RegisterPage;