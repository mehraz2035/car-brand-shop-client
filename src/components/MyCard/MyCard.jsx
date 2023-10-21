import { useLoaderData } from 'react-router-dom';

const MyCard = () => {
    const cartitems = useLoaderData();

    const handleRemove = (id) => {
        console.log("Remove button clicked", id);
        fetch(`http://localhost:5000/cart/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert("Product removed from cart");
                } else {
                    alert("Product removal failed");
                }
            });
    };

    return (
        <div className='max-w-[1550px] mx-auto grid grid-cols-2 gap-10 my-20'>
            {cartitems.map((item) => (

                <div key={item._id} className="card card-side rounded-lg bg-green-200 glass">
                    <div className="lg:flex">
                        <img className="sm:h-64 w-screen  lg:w-80 lg:rounded" src={item.details.image} alt="" />
                        <div className="card-body">
                            <h2 className="w-fit p-2 rounded-md" >{item.details.brand}</h2>
                            <p className=" text-xl font-bold" >{item.details.name}</p>
                            <p>${item.details.price}</p>

                            <div className="card-actions ">
                                <button onClick={() => handleRemove(item._id)} className="btn btn-error ">X</button>
                            </div>

                        </div>
                    </div>
                </div>





            ))}
        </div>
    );
};

export default MyCard;
