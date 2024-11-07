import ComponentLayout from "../../layouts/ComponentLayout";
import HeroImg from "../../assets/images/menu/hero/HeroImg.png"
import { motion } from "framer-motion";
const Hero = () =>{
    return (
        <ComponentLayout>
            <motion.div 
            variants={{onScreen:{opacity:1, scale:1, transformOrigin:"center",}, offScreen:{opacity:0, scale:0,}}} 
            initial="offScreen" whileInView="onScreen" 
            viewport={{once:true}} 
            transition={{duration:1, type:"spring",}}
            className="w-full flex gap-16 items-center justify-center pb-[150px]">
                <div className="">
                    <img className="h-[500px]" src={HeroImg}/>
                </div>
                <motion.div 
                variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.5, type:"spring",}}
                className="flex flex-col gap-4 max-w-[400px]">
                    <motion.div 
                    variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:2.25, type:"spring",}}
                    className="uppercase font-semibold text-[#D51F0F]">BEST QUALITY FOOD</motion.div>
                    <motion.div 
                    variants={{onScreen:{opacity:1, scale:1, transformOrigin:"top",}, offScreen:{opacity:0, scale:0,}}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:2, type:"spring",}}
                    className="text-5xl uppercase font-semibold">The Greatest Table Luxury Restaurant</motion.div>
                    <motion.div 
                    variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:1.75, type:"spring",}}
                    className="">
                        Lorem ipsum dolor sit amet consectetur elit do
                        eiusmod tempor incididunt ut labore et dolore
                        magna minim veniam nostrud exercitation.
                    </motion.div>
                    <motion.button 
                    variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:1.5, type:"spring",}}
                    className="uppercase px-7 py-4 rounded text-white bg-black max-w-fit">About Restaurant</motion.button>
                </motion.div>
            </motion.div>
        </ComponentLayout>
    )
}

export default Hero;