import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase.config"; // Assuming you have the Firebase Storage config in firebase.config.js
import { AuthContext } from "../providres/AuthProvidres";

function fileToUint8Array(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const arrayBuffer = reader.result;
      const uint8Array = new Uint8Array(arrayBuffer);
      resolve(uint8Array);
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

const SignUp = () => {
  const { createAccount, updateUserProfile, googleLogin } = useContext(AuthContext);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.files[0]; // Get the selected image file

    const email = form.email.value;
    const password = form.password.value;

    try {
      // Create a Uint8Array from the image file
      const uint8Array = await fileToUint8Array(image);

      createAccount(email, password)
        .then((result) => {
          const createdAt = result.user?.metadata?.creationTime;
          const user = { email, createdAt: createdAt };

          // Upload the user's image to Firebase Storage
          const storageRef = ref(storage, `user-images/${result.user.uid}/${image.name}`);
          uploadBytes(storageRef, uint8Array).then(() => {
            // Get the download URL of the uploaded image
            getDownloadURL(storageRef).then((downloadURL) => {
              // Update user profile with name and image URL
              updateUserProfile(name, downloadURL)
                .then(() => {
                  fetch("https://car-brand-shop-server-i6v9pxbdj-mehraz2035.vercel.app/user", {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify(user),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      if (data.insertedId) {
                        console.log("user added to user data");
                      }
                    });
                })
                .catch((error) => {
                  console.error(error);
                });
            });
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

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
                            <button onClick={googleLogin} className=" btn text-xl  flex items-center gap-2"><p>Google</p><img className="w-6 h-6  " src="https://i.ibb.co/tKWsFHK/Google-G-Logo-svg.webp" alt="" /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;