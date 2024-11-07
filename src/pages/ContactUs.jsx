import Contact from "../components/Contactus/Contact";
import PageHeading from "../components/utils/PageHeading";
import Map from "../components/Contactus/Map";
import Pagelayout from "../layouts/PageLayout";
const ContactUs = ()=>{
    return (
        <Pagelayout>
            <PageHeading heading={"Contact us"} text={"Delicious Food"}/>
            <Map/>
            <Contact/>
        </Pagelayout>
    )
}

export default ContactUs;