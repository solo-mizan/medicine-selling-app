import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-base-100 navbar">
      <div className="flex-1">
        <Link to="/home" className="text-xl btn btn-ghost">
          MedExpress
        </Link>
      </div>
      <div className="flex-none gap-2">
        <Link to="/order" className="btn btn-outline">
          Order now
        </Link>
        <Link to="/login" className="btn btn-outline">
          Login
        </Link>
        <Link to="/register" className="btn btn-outline">
          Register
        </Link>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input-bordered w-24 md:w-auto input"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="avatar btn btn-circle btn-ghost"
          >
            <div className="rounded-full w-10">
              <img alt="Tailwind CSS Navbar component" src="/user-1.jpg" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="z-[1] bg-base-100 shadow mt-3 p-2 rounded-box w-52 dropdown-content menu menu-sm"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
