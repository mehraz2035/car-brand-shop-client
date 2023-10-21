import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/cars/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDetails(data);
            });
    }, [id]); // Include id as a dependency in the useEffect dependency array

    const hadnleAddToCart = () => {


        fetch("http://localhost:5000/cart", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ details }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };

    return (
        <div className='max-w-[1550px] mx-auto'>
            <div className="card card-side bg-base-100 shadow-xl my-20 h-[600px] rounded-none">
                <figure><img className="w-[600px] h-[600px]" src={details.image} /></figure>
                <div className="card-body mt-10 ">
                    <h2 className="card-title font-bold text-4xl">{details.name}</h2>
                    <p className="w-[800px] py-8">{details.description}</p>

                    <div className="card-actions justify-end">
                        <p className="font-bold text-xl  ">${details.price}</p>
                        <button onClick={hadnleAddToCart} className="btn btn-primary  bg-[#2f3242] text-white border-hidden rounded-none mb-5 mr-5 ">Add Cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;
