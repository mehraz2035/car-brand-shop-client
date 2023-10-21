import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providres/AuthProvidres";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

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

                        {
                            user && <li>
                                <NavLink to="/addProduct" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#2f3242] underline font-bold text-lg" : ""}>Add Product</NavLink>
                            </li>
                        }

                        {
                            user && <li>
                                <NavLink to="myCard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#2f3242] underline font-bold text-lg" : ""}>My Cart</NavLink>
                            </li>
                        }

                    </ul>

                </div>
                {user ? (
                    <div className="flex items-center gap-4">
                        <img
                            src={user.photoURL} // Assuming user.photoURL contains the URL of the user's image
                            alt={user.displayName}
                            className="w-10 h-10 rounded-full"
                        />
                        <p className="text-[#2f3242] text-md font-semibold">{user.displayName}</p>
                        <button onClick={logOut} className="btn text-md bg-black hover:text-black rounded-3xl px-8 text-white">
                            Log Out
                        </button>
                    </div>
                ) : (
                    <Link to='/signin'>
                        <button className="btn text-md bg-black hover:text-black rounded-3xl px-8 text-white">Login</button>
                    </Link>
                )}
            </div>

        </div>
    );
};

export default Navbar;