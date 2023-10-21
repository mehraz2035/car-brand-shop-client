

const CarType = () => {
    return (
        <div>




            <div className=" grid grid-cols-2  gap-32  ">


                <div className="mt-6">


                    <h1 className="text-[#2f3242] text-5xl my-8 ">Two common type car</h1>

                    <div className="card  text-primary-content  rounded-none bg-base-200 h-[300px]  ">
                        <div className="card-body text-black">
                            <h2 className="card-title my-6">Motor car</h2>
                            <p>Sedans: Typically have four doors and a separate trunk for luggage.
                                SUVs (Sports Utility Vehicles): Combining elements of off-road vehicles and regular cars, often with four-wheel drive.
                                Coupes: Two-door cars, often designed for performance or sporty appeal.
                                Convertibles: Cars with a retractable roof, also known as cabriolets or roadsters.
                                Hatchbacks: Cars with a rear door that swings upward to provide access to a cargo area.</p>

                        </div>
                    </div>
                    <div className="card  text-primary-content  rounded-none bg-base-200 h-[300px] mt-16 ">
                        <div className="card-body text-black">
                            <h2 className="card-title my-6">Electric car</h2>
                            <p>Battery Electric Vehicles (BEVs) and Plug-in Hybrid Electric Vehicles (PHEVs) are common types of electric cars.
                                BEVs run entirely on electricity, while PHEVs combine electric motors with internal combustion engines.
                                Hybrid Electric Vehicles (HEVs) use both electric and gas power for improved fuel efficiency.
                                Extended Range Electric Vehicles (EREVs) always operate electrically and have a gasoline engine as a backup.
                                Fuel Cell Electric Vehicles (FCEVs) use hydrogen fuel cells to generate electricity, emitting only water vapor.</p>

                        </div>
                    </div>
                </div>

                <div>
                    <div className="CAR1 ">
                        <div className="hero h-[800px] w-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/5Y4DvTV/martin-katler-Lz53-Hp-Zkt-Q-unsplash.jpg)' }}>
                        </div>
                    </div>

                    <div className="CAR2 h-[405px] w-[355px] -mt-80 ml-96">
                        <div className="hero h-[400px] w-[350px] border-8  border-white" style={{ backgroundImage: 'url(https://i.ibb.co/zs6Xtvh/chuttersnap-x-JLs-Hl0h-Iik-unsplash.jpg)' }}>
                        </div>
                    </div>
                </div>


            </div>



        </div>
    );
};

export default CarType;