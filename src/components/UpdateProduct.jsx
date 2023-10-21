import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {

    const { id } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch(`https://car-brand-shop-server-i6v9pxbdj-mehraz2035.vercel.app/cars/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDetails(data);
            });
    }, [id]);



    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const formUpdate = { image, name, brand, category, price, description, rating }
        console.log(formUpdate)

        fetch(`https://car-brand-shop-server-i6v9pxbdj-mehraz2035.vercel.app/cars/${id}`, {
            method: "put",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formUpdate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })

                }
                else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Failed To Update Unsuccessfully',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            })

    };



    return (





        <div className="bg-[#E5E0FF]  my-16 p-20 max-w-[1550px] mx-auto  shadow-xl">



            <h2 className="text-3xl font-extrabold">Update Car</h2>
            <form onSubmit={handleUpdate}>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder={details.image} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2  ml-4">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder={details.name} className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" placeholder={details.brand} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder={details.category} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder={details.price} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder={details.description} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder={details.rating} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Submit" className="btn btn-block bg-black text-white hover:text-black" />

            </form>




        </div>
    );
};

export default UpdateProduct;