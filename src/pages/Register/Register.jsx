import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const {createUser, setUser}= useContext(AuthContext)
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
      console.log(email, password, name, photo);
      createUser(email, password)
          .then(result => {
            setUser(result.user)
          })
          .catch(error => {
              console.error(error);
      })
    };
  return (
    <div>
      <Navbar />
      <h1 className="text-center text-3xl font-semibold mt-10">
        Please Register
      </h1>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-[#403F3F]">Register</button>
            </div>
            <span className="text-center mt-3">
              Already have an account?{" "}
              <Link to={"/login"} className="text-blue-600 font-semibold">
                Login
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
