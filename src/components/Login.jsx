import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-base-200 min-h-screen hero">
      <div className="lg:flex-row-reverse flex-col hero-content">
        <div className="text-center lg:text-left">
          <h1 className="font-bold text-5xl">
            Welcome Back to Your MedExpress Hub!
          </h1>
          <p className="py-6">
            Sign in with your email and password to access your prescriptions,
            refill history, and manage deliveries.
          </p>
        </div>
        <div className="bg-base-100 shadow-2xl w-full max-w-sm card shrink-0">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input-bordered input"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input-bordered input"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
                <a href="#" className="label-text-alt">
                  Don't have an account?{" "}
                  <Link className="font-semibold label-text-alt link link-hover">
                    Register here
                  </Link>
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
