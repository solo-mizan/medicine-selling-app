import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-base-200 min-h-screen hero">
      <div className="lg:flex-row-reverse flex-col hero-content">
        <div className="text-center lg:text-left">
          <h1 className="font-bold text-5xl">Register now!</h1>
          <p className="py-6">
            This is the login and registration page for MedExpress, your
            one-stop shop for ordering medications online. Existing users can
            sign in with their email and password, while new users can create an
            account with just a few details. Get started and experience a
            convenient way to manage your prescriptions and health needs.
          </p>
        </div>
        <div className="bg-base-100 shadow-2xl w-full max-w-sm card shrink-0">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input-bordered input"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone No</span>
              </label>
              <input
                type="number"
                placeholder="Your phone number"
                className="input-bordered input"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
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
                  Already have an account?{" "}
                  <Link
                    className="font-semibold label-text-alt link link-hover"
                    to="/login"
                  >
                    Login here
                  </Link>
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
