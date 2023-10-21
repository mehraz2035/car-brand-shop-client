
import AllCarBrand from '../AllCarBrand/AllCarBrand'
import Banner from '../Banner/Banner'
import CarStory from '../CarStory/CarStory';
import CarType from '../CarType/CarType';
import Faq from '../Faq/Faq';
import Footer from '../Footer/Footer';








const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <div className='max-w-[1550px] mx-auto'>
          
            <AllCarBrand></AllCarBrand>
            <CarType></CarType>
            <CarStory></CarStory>
           
            </div>
            <Faq></Faq>
           <Footer></Footer>
          
        </div>
    );
};

export default Home;