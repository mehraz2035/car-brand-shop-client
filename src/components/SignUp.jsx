import { useContext } from "react";
import { AuthContext } from "../providres/AuthProvidres";
import { Link } from "react-router-dom";


const SignUp = () => {

    const { createAccount, googleLogin } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, image, email, password);
        createAccount(name, image, email, password
        )
            .then(result => {
                console.log(result.user)

                const createdAt = result.user?.metadata?.creationTime;
                const user = { email, createdAt: createdAt };
                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            console.log('user adding to user data')
                        }
                    })
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="hero  bg-base-200 border-2">

            <div className="hero-content flex-col lg:flex-row-reverse py-44 w-4/12 ">
                <div className="text-center lg:ml-36">

                    <h1 className=" lg:w-[400px] text-5xl font-bold">Sign Up Now</h1>
                </div>
                <div className="card flex-shrink-0 w-full dow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            
                            <input type="file" name="image" className="file-input text-sm text-lowercase file-input-ghost w-full input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-black text-white hover:text-black">Sign Up</button>
                            <p className="py-6 text-center">Already have an account? <span className=" text-blue-600 font-semibold"><Link to="/signin">Sign In</Link></span> </p>
                        </div>
                        <div className="flex justify-center">
                            <button className=" btn text-xl  flex items-center gap-2"><p>Google</p><img className="w-6 h-6  " src="https://i.ibb.co/tKWsFHK/Google-G-Logo-svg.webp" alt="" /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;