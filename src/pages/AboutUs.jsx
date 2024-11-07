import Achievement from "../components/Aboutus/Achievement";
import AwesomeFood from "../components/Aboutus/AwesomeFood";
import Hero from "../components/Aboutus/Hero";
import Rating from "../components/Aboutus/Rating";
import RestaurantSpecial from "../components/Aboutus/RestaurantSpecial";
import PageHeading from "../components/utils/PageHeading";
import Pagelayout from "../layouts/PageLayout";

const AboutUs = () =>{
    return (
        <Pagelayout>
            <PageHeading text={"Authentic Restaurant"} heading={"About Us"}/>
            <Hero/>
            <Rating/>
            <RestaurantSpecial/>
            <AwesomeFood/>
            <Achievement/>
        </Pagelayout>
    )
}

export default AboutUs;