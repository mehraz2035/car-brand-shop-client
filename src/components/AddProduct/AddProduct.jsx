import Swal from 'sweetalert2'

const AddProduct = () => {



    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        // dont change const name
        const newCar = { image, name, brand, category, price, description, rating }

        console.log(newCar);

        // server site data send dont touch
        fetch('https://car-brand-shop-server-i6v9pxbdj-mehraz2035.vercel.app/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Car Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })

                }
            })
    }








    return (
        <div className="bg-[#E5E0FF] my-16 p-20 max-w-[1550px] mx-auto  shadow-xl">



            <h2 className="text-3xl font-extrabold">Add a Car</h2>
            <form onSubmit={handleAddCoffee} >
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2  ml-4">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" placeholder="Brand name" className="input input-bordered w-full" />
                        </label>
                    </div>
                   
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input  type="submit" value="Add Car" className="btn btn-block bg-black text-white hover:text-black" />

            </form>




        </div>
    );
};

export default AddProduct;