import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllCarBrand = () => {
    const [brands, setBrand] = useState([])

    useEffect(() => {
        fetch('https://car-brand-shop-server-i6v9pxbdj-mehraz2035.vercel.app/brands')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBrand(data)
            })

    }, [])




    return (
        <div className="my-32">
            <h1 className="text-[#2f3242] font-bold text-4xl my-8 ">Choose! car brand</h1>
            

            <div className=" grid grid-cols-6 gap-10 mt-20 mb-32">

                {
                    brands.map(item => <div key={item._id} className="flex items-center justify-around w-72  ">
                        <Link to={`/cars/${item.brand}`}>
                            
                            <div className="ui-card w-44 relative overflow-hidden transition duration-300 ease-out  hover:scale-110 hover:translate-y-[-20px] hover:opacity-100  h-60">
                                <img className="transform scale-130 h-36 transition duration-300 ease-out" src={item.photo} alt="Brand" />
                                <h2 className="text-center my-8 text-3xl font-bold items-end">{item.brand}</h2>
                            </div>
                           
                        </Link>
                    </div>)
                }





            </div>


        </div>
    );
};

export default AllCarBrand;