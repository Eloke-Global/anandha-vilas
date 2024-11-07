import HeadingBanner from "../../assets/images/ContactusBanner.png";
import { motion } from "framer-motion";
const PageHeading = ({heading, text}) => {
    return (
        <motion.div
        variants={{onScreen:{opacity:1, transformOrigin:"center",}, offScreen:{opacity:0,}}} 
        initial="offScreen" whileInView="onScreen" 
        viewport={{once:true}} 
        transition={{duration:1.75, type:"spring",stiffness:250}} 
        className="w-full">
            <div className="w-full max-w-screen-1920 mx-auto h-[300px] flex items-center justify-center">
                <div
                    style={{ backgroundImage: `url(${HeadingBanner})` }} 
                    className="text-center bg-cover bg-center w-full h-full flex flex-col items-center justify-center"
                >
                    <motion.h1 
                    variants={{onScreen:{scale:1, transformOrigin:"top"}, offScreen:{scale:0}}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:2.25, type:"spring", stiffness:200}}
                    className="text-[80px] font-semibold uppercase">{heading}</motion.h1>
                    <motion.div 
                    variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:1.5, type:"spring",}}
                    className="text-[15px] font-semibold uppercase text-[#89A14B]"> - {text} - </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default PageHeading;
