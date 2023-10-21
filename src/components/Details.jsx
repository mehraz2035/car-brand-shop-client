import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Details = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch(`https://car-brand-shop-server-i6v9pxbdj-mehraz2035.vercel.app/cars/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDetails(data);
            });
    }, [id]); // Include id as a dependency in the useEffect dependency array

   
    const hadnleAddToCart = () => {


        fetch("https://car-brand-shop-server-i6v9pxbdj-mehraz2035.vercel.app/cart", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ details }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Adding Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })

                }
                
            });
    };

    return (
        <div className='max-w-[1550px] mx-auto'>
            <div className="card card-side bg-[#E5E0FF] shadow-xl my-20 h-[600px] rounded-none">
                <figure><img className="w-[600px] h-[600px]" src={details.image} /></figure>
                <div className="card-body mt-10 ">
                    <h2 className="card-title font-bold text-4xl">{details.name}</h2>
                    <p className="w-[800px] py-8">{details.description}</p>

                    <div className="card-actions justify-end">
                        <p className="font-bold text-xl  ">${details.price}</p>
                        <button onClick={hadnleAddToCart} className="btn btn-primary  bg-[#2f3242] hover:bg-[#E5E0FF] hover:text-black text-white border-hidden rounded-none mb-5 mr-5 ">Add Cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;
