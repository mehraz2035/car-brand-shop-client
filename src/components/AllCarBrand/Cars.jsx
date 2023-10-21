import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Cars = () => {
    const { brand } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://car-brand-shop-server-i6v9pxbdj-mehraz2035.vercel.app/car/${brand}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    },)



    return (
        <div>


            <div className='h-[900px] max-w-[1550px] mx-auto'>


                <div className="carousel h-3/5 w-full mt-32">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://img.freepik.com/free-vector/flat-car-poster-with-photo-horizontal_52683-64510.jpg?size=626&ext=jpg&ga=GA1.1.628696852.1674919388&semt=ais" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://img.freepik.com/free-psd/black-friday-car-automotive-super-sale-facebook-cover-template_106176-1560.jpg?size=626&ext=jpg&ga=GA1.1.628696852.1674919388&semt=ais" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://img.freepik.com/free-psd/car-rental-automotive-facebook-cover-template_106176-2489.jpg?size=626&ext=jpg&ga=GA1.1.628696852.1674919388&semt=ais" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>

            </div>




            <div className='grid grid-cols-4 gap-10 max-w-[1550px] mx-auto mb-20'>

                {
                    products.map(aaa =>

                        <div key={aaa._id} className="card card-compactbg-base-100 shadow-xl  rounded-none h-fit ">
                            <figure ><img src={aaa.image} alt="Shoes" /></figure>
                            <div className="card-body ">
                                <h2 className="card-title">{aaa.name}</h2>

                                <div className='grid grid-cols-2 gap-2'>
                                    <p>Brand : {aaa.brand}</p>
                                    <p>Category : {aaa.category}</p>
                                    <p>Price : {aaa.price}</p>

                                    <p>Rating : {aaa.rating}</p>

                                </div>
                                <p>Description : {aaa.description}</p>

                            </div>
                            <div className=" mx-3">
                                <Link to={`/update/${aaa._id}`}>
                                    <button className='btn rounded-none w-full my-3 bg-[#E5E0FF] text-black '>Update</button>
                                </Link>
                                <Link to={`/details/${aaa._id}`}>
                                    <button className="btn rounded-none w-full my-3 bg-black text-white hover:text-black ">Details</button>
                                </Link>

                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default Cars;