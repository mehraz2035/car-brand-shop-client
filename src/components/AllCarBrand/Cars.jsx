import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Cars = () => {
    const { brand } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/car/${brand}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, )



    return (
        <div className='grid grid-cols-4 gap-10 max-w-[1550px] mx-auto my-20'>
            {
                products.map(aaa =>
                   
                        <div key={aaa._id} className="card card-compact 
                     bg-base-100 shadow-xl border-2 ">
                            <figure><img src={aaa.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{aaa.name}</h2>
                               
                                <p>Brand : {aaa.brand}</p>
                                <p>Category : {aaa.category}</p>
                                <p>Price : {aaa.price}</p>
                                <p>{aaa. description}</p>
                                <p>rating : {aaa. rating}</p>

                                <div className="card-actions justify-end">
                                <Link to={`/details/${aaa._id}`}>
                                    <button className="btn btn-primary">Details</button>
                                </Link>
                                <Link to={`/update/${aaa._id}`}>
                                    <button className='btn btn-primary'>Update</button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    
                )
            }
        </div>
    );
};

export default Cars;