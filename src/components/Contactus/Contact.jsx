import { motion } from "framer-motion";

const Contact = () =>{
    return (
        <div className="w-full">
            <div className="py-[110px] mx-auto max-w-screen-1920 flex items-center justify-center">
                <motion.div 
                variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.5, type:"spring",}}
                className="flex items-center">
                    <div className="w-[400px] flex gap-[15px] flex-col">
                        <div className="">NEED A PRIVATE SPACE?</div>
                        Reserve a Table <br />
                        Lets talk us
                    </div>
                    <motion.div 
                    variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:1.5, type:"spring",}}
                    className="w-[270px]">
                        WRITE US
                        <div className="">
                            mail <br /> mail
                        </div>
                    </motion.div>
                    <motion.div 
                    variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:1.5, type:"spring",}}
                    className="w-[270px]">
                        WRITE US
                        <div className="">
                            mail <br /> mail
                        </div>
                    </motion.div>
                    <motion.div 
                    variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:1.5, type:"spring",}}
                    className="w-[270px]">
                        WRITE US
                        <div className="">
                            mail <br /> mail
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact;