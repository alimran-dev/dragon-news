import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password)
    }
  return (
    <div>
      <Navbar />
      <h1 className="text-center text-3xl font-semibold mt-10">Please Login</h1>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
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
              <button className="btn btn-primary bg-[#403F3F]">Login</button>
            </div>
            <span className="text-center mt-3">
              Don&apos;t have an account?{" "}
              <Link to={"/register"} className="text-blue-600 font-semibold">
                Register
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
