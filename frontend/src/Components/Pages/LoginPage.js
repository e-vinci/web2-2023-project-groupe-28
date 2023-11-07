const LoginPage = () => {
    const main = document.querySelector('main');
    const login = `
    <div class="justify-self-center">
    <div class="hero-content flex-col lg:flex-row-reverse scale-110" >
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-0">
        <form class="card-body" style="padding-top: 50%;">
          <div class="form-control">
            <h1>Login</h1>
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" class="input input-bordered" required />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" class="input input-bordered" required />
            <label class="label">
              <a href="#" class="label-text-alt link link-hover">have you already an account ?</a>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>

    `
    main.innerHTML = login;


  };
  
  export default LoginPage;