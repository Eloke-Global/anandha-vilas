import Pagelayout from "../layouts/PageLayout";
import PageHeading from "../components/utils/PageHeading"
import PopularMenu from "../components/Home/Menu"
import Menu1 from "../assets/images/menu/Menu1.png"
import Menu2 from "../assets/images/menu/Menu2.png"
import SpecialOccasions from "../components/Menu/SpecialOccasions";
import Hero from "../components/Menu/Hero";
import { motion } from "framer-motion";
const Menu = () =>{
    return (
        <Pagelayout>
            <PageHeading heading={"Our Menu"} text={"Remarkable Recipies"}/>
            <Hero/>
            <PopularMenu/>
            <motion.div 
            variants={{onScreen:{opacity:1, scale:1, transformOrigin:"center",}, offScreen:{opacity:0, scale:0,}}} 
            initial="offScreen" whileInView="onScreen" 
            viewport={{once:true}} 
            transition={{duration:1.5, type:"spring",}}
            className="flex items-center flex-col pt-[170px] pb-[40px] gap-8">
                <motion.img 
                variants={{onScreen:{opacity:1, scale:1, transformOrigin:"center",}, offScreen:{opacity:0, scale:0,}}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.5, type:"spring",}}
                src={Menu1}/>
                <motion.img 
                variants={{onScreen:{opacity:1, scale:1, transformOrigin:"center",}, offScreen:{opacity:0, scale:0,}}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.5, type:"spring",}}
                src={Menu2}/>
            </motion.div>
            <SpecialOccasions/>
        </Pagelayout>
    )
}


export default Menu;