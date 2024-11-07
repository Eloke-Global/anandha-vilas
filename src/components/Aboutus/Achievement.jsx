import ComponentLayout from "../../layouts/ComponentLayout"
import Img1 from "../../assets/images/achievements/Ac1.png"
import Img2 from "../../assets/images/achievements/Ac2.png"
import Img3 from "../../assets/images/achievements/Ac3.png"
import Img4 from "../../assets/images/achievements/Ac4.png"
import { motion } from "framer-motion"
const Achievement  = () =>{
    return (
        <ComponentLayout>
            <div className="flex items-center justify-center gap-[100px] py-[110px]">
                <motion.div 
                variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.5, type:"spring",}}
                className="text-[#D51F0F] uppercase font-semibold">
                    - Awards and Honor
                    <motion.div 
                    variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:1.5, type:"spring",}}
                    className="text-black uppercase text-5xl pt-2">
                        Achievements
                    </motion.div>
                </motion.div>
                <motion.div 
                variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.5, type:"spring",}}
                className="flex gap-20">
                    <motion.img 
                    variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:1.5, type:"spring",}}
                    src={Img1}/>
                    <motion.img 
                    variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:1.5, type:"spring",}}
                    src={Img2}/>
                    <motion.img 
                    variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:1.5, type:"spring",}}
                    src={Img3}/>
                    <motion.img 
                    variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:1.5, type:"spring",}}
                    src={Img4}/>
                </motion.div>
            </div>
        </ComponentLayout>
    )
}

export default Achievement;