import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providres/AuthProvidres";


const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    return (
        <div>

            <div className="navbar bg-base-100 flex justify-between  max-w-[1550px] mx-auto">
                <div>
                <h1 className="text-3xl font-bold text-[#2f3242] ">CAR <br />.Com</h1>
                    
                </div>
                <div>
                    <ul className="flex gap-8">
                        <li>
                            <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#2f3242] underline font-bold text-lg" : ""}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/addProduct" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#2f3242] underline font-bold text-lg" : ""}>Add Product</NavLink>
                        </li>
                        <li>
                            <NavLink to="myCard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#2f3242] underline font-bold text-lg" : ""}>My Card</NavLink>
                        </li>
                        <li>
                            <NavLink to="signup" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#2f3242] underline font-bold text-lg" : ""}>SignUp</NavLink>
                        </li>
                        <li>
                            <NavLink to="signin" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#2f3242] underline font-bold text-lg" : ""}>SignIn</NavLink>
                        </li>
                        
                    </ul>

                </div>
               {
                user?
                <div>
                <button onClick={logOut} className=" btn text-md bg-black hover:text-black rounded-3xl px-8 text-white">Log Out</button>
                </div>
                :
                <div>
                <button className=" btn text-md bg-black hover:text-black rounded-3xl px-8 text-white">Login</button>
                </div>
               }
            </div>

        </div>
    );
};

export default Navbar;