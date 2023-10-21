// loginUser
// onClick={handleGoogleSignIn}

import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <div>
            <div>

                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse py-52 w-4/12">
                        <div className="text-center lg:ml-36">
                            <h1 className=" lg:w-[400px] text-5xl font-bold">Login Now</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full   shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-black text-white hover:text-black">Login</button>
                                    <p className="py-6 text-center">Dont have an account? <span className=" text-blue-600 font-semibold"><Link to="/signup">Sign Up</Link></span> </p>
                                </div>
                                <div className="flex justify-center">
                                <button className=" btn text-xl  flex items-center gap-2"><p>Google</p><img className="w-6 h-6  " src="https://i.ibb.co/tKWsFHK/Google-G-Logo-svg.webp" alt="" /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SignIn;


