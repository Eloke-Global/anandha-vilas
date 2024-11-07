import ComponentLayout from "../../layouts/ComponentLayout"
import DiningHall from "../../assets/images/Dining Hall.png"
import { motion } from "framer-motion"
const AwesomeFood = () =>{
    return (
        <ComponentLayout>
            <div className="w-full flex gap-20 items-center justify-center">
                <motion.div
                variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.5, type:"spring",}}
                >
                    <img src={DiningHall}/>
                </motion.div>
                <div className="flex gap-6 flex-col">
                    <motion.div 
                    variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:1.5, type:"spring",}}
                    className="uppercase text-[#89A14B] flex items-center gap-4 font-semibold">
                        <svg width="71" height="3" viewBox="0 0 71 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.660034" y="0.859375" width="70" height="2" fill="#89A14B"/>
                        </svg>
                        Since 1988 Restaurant
                    </motion.div>
                    <motion.div 
                    variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:1.5, type:"spring",}}
                    className="uppercase text-6xl font-semibold">
                        Awesome Dining <br /> Delicious Food
                    </motion.div>
                    <motion.div
                    variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:1.5, type:"spring",}}
                    >
                        Lorem ipsum dolor sit amet consectetur adipiscing elit <br />
                        do eiusmod tempor incididunt ut labore et dolore <br />
                        magna minim veniam nostrud exercitation.
                    </motion.div>
                </div>
            </div>
        </ComponentLayout>
    )
}

export default AwesomeFood;