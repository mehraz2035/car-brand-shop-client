// import { useLoaderData } from "react-router-dom";
// import ToyotaProductCard from "./ToyotaProductCard";
// import { useState } from "react";


// const ToyotaBrandProduct = () => {
//     const loadedcoffees = useLoaderData();
//     const [coffees, setCoffees] = useState(loadedcoffees);
//     return (
//         <div className="m-20">
//             <h1 className='text-center text-3xl py-4'>hot hot cold coffee: {coffees.length}</h1>

//             <div className="grid grid-cols-2 gap-4">
//                 {
//                     coffees.map(coffee => <ToyotaProductCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees} ></ToyotaProductCard>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default ToyotaBrandProduct;