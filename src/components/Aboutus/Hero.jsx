import ComponentLayout from "../../layouts/ComponentLayout"
import MainImg from "../../assets/images/AboutusHero.png"
import DiningImg from "../../assets/images/DiningArea.png"
import HalfLeftPattern from "../../assets/patterns/HalfLeftPattern.png"
import { motion } from "framer-motion"
const Hero = () =>{
    return (
        <ComponentLayout>
            <div className="w-full relative flex items-center justify-center">
                <motion.img 
                variants={{onScreen:{opacity:1, transformOrigin:"center",}, offScreen:{opacity:0,}}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.75, type:"spring",stiffness:250}} 
                className="" src={MainImg}/>
                <div className="absolute h-full top-0 flex items-center right-0 w-auto">
                    <img className="scale-50 translate-x-12" src={HalfLeftPattern} alt="" />
                </div>
            </div>
            <motion.div 
            variants={{onScreen:{opacity:1,   transformOrigin:"center",}, offScreen:{opacity:0,  }}} 
            initial="offScreen" whileInView="onScreen" 
            viewport={{once:true}} 
            transition={{duration:1.5, type:"spring",}}
            className="h-[385px] bg-[#F6B801] flex ">
                <motion.div 
                variants={{onScreen:{opacity:1,   transformOrigin:"bottom",}, offScreen:{opacity:0,  }}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.5, type:"spring",}}
                className=" flex-1 relative">
                    <img className="right-0 absolute -top-[150px]" src={DiningImg} alt="" />
                </motion.div>
                <div className="p-16 flex-1 flex pt-[90px] gap-8">
                    <motion.svg 
                    variants={{onScreen:{opacity:1,   transformOrigin:"right",}, offScreen:{opacity:0,  }}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:1.5, type:"spring",}}
                    width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_220_358)">
                        <path d="M13.3333 59.4667C14.4 60.5334 14.9333 61.8667 14.9333 63.4667C14.5778 66.8445 13.8667 70.2223 12.8 73.6001C18.1333 72.3556 22.5778 70.8445 26.1333 69.0667C27.2 68.5334 28.3556 68.3556 29.6 68.5334C32.9778 69.6001 36.4444 70.1334 40 70.1334C46.5778 70.1334 52.5333 68.7556 57.8667 66.0001C63.2 63.2445 67.3778 59.5556 70.4 54.9334C73.4222 50.3112 74.9333 45.3334 74.9333 40.0001C74.9333 34.6667 73.4222 29.689 70.4 25.0667C67.3778 20.4445 63.2 16.7556 57.8667 14.0001C52.5333 11.2445 46.5778 9.86673 40 9.86673C33.4222 9.86673 27.4667 11.2445 22.1333 14.0001C16.8 16.7556 12.6222 20.4445 9.6 25.0667C6.57778 29.689 5.06667 34.6667 5.06667 40.0001C5.06667 43.5556 5.77778 47.0223 7.2 50.4001C8.62222 53.7778 10.6667 56.8001 13.3333 59.4667ZM10.9333 78.9334C9.68889 79.289 8.53333 79.5556 7.46667 79.7334C6.93333 79.7334 6.48889 79.5112 6.13333 79.0667C5.77778 78.6223 5.68889 78.2223 5.86667 77.8667L7.2 74.6667C8.62222 70.5778 9.51111 66.6667 9.86667 62.9334C6.66667 59.9112 4.22222 56.4001 2.53333 52.4001C0.844444 48.4001 0 44.2667 0 40.0001C0 33.6001 1.77778 27.7334 5.33333 22.4001C8.88889 17.0667 13.7333 12.8445 19.8667 9.7334C26 6.62228 32.7111 5.06673 40 5.06673C47.2889 5.06673 54 6.62228 60.1333 9.7334C66.2667 12.8445 71.1111 17.0667 74.6667 22.4001C78.2222 27.7334 80 33.6001 80 40.0001C80 46.4001 78.2222 52.2667 74.6667 57.6001C71.1111 62.9334 66.2667 67.1556 60.1333 70.2667C54 73.3778 47.2889 74.9334 40 74.9334C36.0889 74.9334 32.1778 74.489 28.2667 73.6001C23.8222 75.7334 18.0444 77.5112 10.9333 78.9334ZM35.2 33.8667C34.3111 32.2667 32.9778 31.1556 31.2 30.5334C29.4222 29.9112 27.6444 29.8667 25.8667 30.4001C24.0889 30.9334 22.6667 31.9112 21.6 33.3334C20.5333 34.7556 20 36.3112 20 38.0001C20 39.689 20.4 41.2001 21.2 42.5334C22 43.8667 23.0667 44.889 24.4 45.6001C25.7333 46.3112 27.1556 46.6667 28.6667 46.6667C30.1778 46.6667 31.5556 46.2223 32.8 45.3334C32.0889 47.4667 30.7556 49.5112 28.8 51.4667C28.4444 51.8223 28.2667 52.3112 28.2667 52.9334C28.2667 53.5556 28.4889 54.0445 28.9333 54.4001C29.3778 54.7556 29.8667 54.9334 30.4 54.9334C30.9333 54.9334 31.4667 54.7556 32 54.4001C35.3778 50.8445 37.2444 47.0223 37.6 42.9334C37.7778 39.3778 36.9778 36.3556 35.2 33.8667ZM55.2 33.8667C54.3111 32.2667 52.9778 31.1556 51.2 30.5334C49.4222 29.9112 47.6444 29.8667 45.8667 30.4001C44.0889 30.9334 42.6667 31.9112 41.6 33.3334C40.5333 34.7556 40 36.3112 40 38.0001C40 39.689 40.4 41.2001 41.2 42.5334C42 43.8667 43.0667 44.889 44.4 45.6001C45.7333 46.3112 47.1556 46.6667 48.6667 46.6667C50.1778 46.6667 51.5556 46.2223 52.8 45.3334C52.0889 47.4667 50.7556 49.5112 48.8 51.4667C48.4444 51.8223 48.2667 52.3112 48.2667 52.9334C48.2667 53.5556 48.4889 54.0445 48.9333 54.4001C49.3778 54.7556 49.8667 54.9334 50.4 54.9334C50.9333 54.9334 51.4667 54.7556 52 54.4001C55.3778 50.8445 57.2444 47.0223 57.6 42.9334C57.7778 39.3778 56.9778 36.3556 55.2 33.8667Z" fill="#89A14B"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_220_358">
                        <rect width="80" height="80" fill="white" transform="matrix(1 0 0 -1 0 80)"/>
                        </clipPath>
                        </defs>
                    </motion.svg>
                    <motion.div 
                    variants={{onScreen:{opacity:1,   transformOrigin:"left",}, offScreen:{opacity:0,  }}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:1.5, type:"spring",}}
                    className="flex gap-4 flex-col">
                        <div>
                            The food you eat can be either the <br />
                            safest and most powerful medicine or <br />
                            the <span className="font-semibold underline">slowest form of poison</span>
                        </div>
                        <div>
                            - Alexander Harvard
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </ComponentLayout>
    )
}

export default Hero;