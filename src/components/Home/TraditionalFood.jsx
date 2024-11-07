import LeftImg from "../../assets/images/TraditionalSection.png"
import { motion } from "framer-motion";
const TraditionalFood = ()=>{
    return (
        <div className="w-full">
            <div className="w-full max-w-screen-1920 mx-auto py-[110px] relative z-40">
                <motion.div 
                variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.5, type:"spring",}}
                className="absolute -top-12 left-0 w-full h-10 text-center z-30">
                    <div className="text-[200px] text-[#89A14B60] z-10">TRADITIONAL</div>
                </motion.div>
                <div className="w-full mx-auto max-w-[1300px] flex items-center z-40">
                    <motion.img 
                    variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:1.5, type:"spring",}}
                    className="z-40" src={LeftImg} alt="" />
                    <div className=" flex-1 flex flex-col gap-4">
                        <motion.div 
                        variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                        initial="offScreen" whileInView="onScreen" 
                        viewport={{once:true}} 
                        transition={{duration:1.5, type:"spring",}}
                        className="uppercase text-[#F6C000] flex items-center font-semibold gap-2 ">
                            <svg width="71" height="3" viewBox="0 0 71 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.660034" y="0.859375" width="70" height="2" fill="#F6C000"/>
                            </svg>
                            Since 1988
                        </motion.div>
                        <motion.div 
                        variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                        initial="offScreen" whileInView="onScreen" 
                        viewport={{once:true}} 
                        transition={{duration:1.5, type:"spring",}}
                        className="uppercase font-semibold text-5xl">Wonderful Dining Experience and Food</motion.div>
                        <motion.div 
                        variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                        initial="offScreen" whileInView="onScreen" 
                        viewport={{once:true}} 
                        transition={{duration:1.5, type:"spring",}}
                        className="">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit <br />
                            do eiusmod tempor incididunt ut labore et dolore <br />
                            magna minim veniam nostrud exercitation.
                        </motion.div>
                        <motion.button 
                        variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                        initial="offScreen" whileInView="onScreen" 
                        viewport={{once:true}} 
                        transition={{duration:1.5, type:"spring",}}
                        className="uppercase px-7 py-4 rounded text-white bg-[#F6C000] max-w-fit">
                        About Restaurant
                        </motion.button>

                    </div>
                </div>
                <motion.div 
                variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.5, type:"spring",}}
                className="flex w-full items-center justify-center gap-8 pt-12">
                    <motion.div 
                    variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:1.5, type:"spring",}}
                    className="items-center max-w-[380px] flex gap-4">
                        <div className="h-[100px] shadow-md aspect-square rounded-full flex items-center justify-center">
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.34 2.26672C17.1133 2.1156 16.8867 2.1156 16.66 2.26672L3.96667 7.36672L9.06667 9.40672L22.1 4.08005L17.34 2.26672ZM24.9333 5.32672L11.9 10.5401L17 12.58L30.0333 7.36672L24.9333 5.32672ZM31.8467 8.84005L18.02 14.3934V31.2801L31.8467 25.7267V8.84005ZM15.98 31.2801V14.3934L2.15333 8.84005V25.7267L15.98 31.2801ZM15.8667 0.226715C16.6222 -0.0755081 17.3778 -0.0755081 18.1333 0.226715L33.32 6.34672C33.7733 6.49783 34 6.83783 34 7.36672V25.7267C34 26.1801 33.8867 26.5767 33.66 26.9167C33.4333 27.2567 33.0933 27.5023 32.64 27.6534L17.34 33.7734C17.1133 33.9245 16.8867 33.9245 16.66 33.7734L1.36 27.6534C0.906667 27.5023 0.566667 27.2567 0.34 26.9167C0.113333 26.5767 0 26.1801 0 25.7267V7.36672C0 6.83783 0.226667 6.49783 0.68 6.34672L15.8667 0.226715Z" fill="#89A14B"/>
                            </svg>
                        </div>
                        <motion.div 
                        variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                        initial="offScreen" whileInView="onScreen" 
                        viewport={{once:true}} 
                        transition={{duration:1.5, type:"spring",}}
                        className="uppercase text-2xl">
                            Fast Delivery
                            <div className="text-base text-gray-300 normal-case">Within 30 mins</div>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                    variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:1.5, type:"spring",}}
                    className="items-center max-w-[380px] flex gap-4">
                        <div className="h-[100px] shadow-md aspect-square rounded-full flex items-center justify-center">
                            <svg width="25" height="35" viewBox="0 0 25 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.1637 2.40318L12.6503 0.589844L9.13702 2.40318L5.17035 2.96984L3.35702 6.59651L0.523682 9.42984L1.20368 13.2832L0.523682 17.2498L3.35702 20.0832L5.17035 23.7098L9.13702 24.2765L12.6503 26.0898L16.1637 24.2765L20.1303 23.7098L21.9437 20.0832L24.777 17.2498L24.097 13.2832L24.777 9.42984L21.9437 6.59651L20.1303 2.96984L16.1637 2.40318ZM18.7703 5.00984L20.2437 7.84318L22.5103 10.1098L21.9437 13.2832L22.5103 16.5698L20.2437 18.8365L18.7703 21.6698L15.4837 22.2365L12.6503 23.7098L9.81702 22.2365L6.53035 21.6698L5.05701 18.8365L2.79035 16.5698L3.35702 13.2832L2.79035 10.1098L5.05701 7.84318L6.53035 5.00984L9.81702 4.44318L12.6503 2.96984L15.4837 4.44318L18.7703 5.00984ZM4.15035 25.6365V34.5898L12.6503 32.4365L21.1503 34.5898V25.6365L16.8437 26.3165L12.6503 28.4698L8.45702 26.3165L4.15035 25.6365Z" fill="#89A14B"/>
                            </svg>

                        </div>
                        <motion.div 
                        variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                        initial="offScreen" whileInView="onScreen" 
                        viewport={{once:true}} 
                        transition={{duration:1.5, type:"spring",}}
                        className="uppercase text-2xl">
                            Absolute Dining
                            <div className="text-base text-gray-300 normal-case">Best Buffet Restaurant</div>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                    variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:1.5, type:"spring",}}
                    className="items-center max-w-[380px] flex gap-4">
                        <div className="h-[100px] shadow-md aspect-square rounded-full flex items-center justify-center">
                            <svg width="31" height="35" viewBox="0 0 31 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.4305 17.9298C21.5816 18.081 21.6572 18.3076 21.6572 18.6098C21.6572 18.9121 21.5816 19.1765 21.4305 19.4032L14.9705 25.7498C14.8194 25.9765 14.5928 26.0898 14.2905 26.0898C13.9883 26.0898 13.7239 25.9765 13.4972 25.7498L10.3239 22.5765C10.0972 22.3498 9.98387 22.1043 9.98387 21.8398C9.98387 21.5754 10.0972 21.3298 10.3239 21.1032C10.5505 20.8765 10.7961 20.7632 11.0605 20.7632C11.325 20.7632 11.5705 20.8765 11.7972 21.1032L14.2905 23.4832L19.8439 17.9298C20.0705 17.7032 20.335 17.5898 20.6372 17.5898C20.9394 17.5898 21.2039 17.7032 21.4305 17.9298ZM15.3105 2.74318C16.7461 2.74318 17.9928 3.25318 19.0505 4.27318C20.1083 5.29318 20.6372 6.55873 20.6372 8.06984V9.08984H9.98387V8.06984C9.98387 6.55873 10.5128 5.29318 11.5705 4.27318C12.6283 3.25318 13.875 2.74318 15.3105 2.74318ZM22.7905 9.08984V8.06984C22.7905 6.70984 22.4505 5.46318 21.7705 4.32984C21.0905 3.19651 20.1839 2.28984 19.0505 1.60984C17.9172 0.929844 16.6705 0.589844 15.3105 0.589844C13.9505 0.589844 12.7039 0.929844 11.5705 1.60984C10.4372 2.28984 9.53053 3.19651 8.85053 4.32984C8.17053 5.46318 7.83053 6.70984 7.83053 8.06984V9.08984H0.463867V30.2832C0.463867 31.4921 0.879423 32.5121 1.71053 33.3432C2.54165 34.1743 3.52387 34.5898 4.6572 34.5898H25.9639C27.0972 34.5898 28.0794 34.1743 28.9105 33.3432C29.7416 32.5121 30.1572 31.4921 30.1572 30.2832V9.08984H22.7905ZM2.6172 11.2432H28.1172V30.2832C28.1172 30.8876 27.9094 31.3976 27.4939 31.8132C27.0783 32.2287 26.5683 32.4365 25.9639 32.4365H4.6572C4.05276 32.4365 3.56165 32.2287 3.18387 31.8132C2.80609 31.3976 2.6172 30.8876 2.6172 30.2832V11.2432Z" fill="#89A14B"/>
                            </svg>

                        </div>
                        <motion.div 
                        variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                        initial="offScreen" whileInView="onScreen" 
                        viewport={{once:true}} 
                        transition={{duration:1.5, type:"spring",}}
                        className="uppercase text-2xl">
                            Pick Up Delivery
                            <div className="text-base text-gray-300 normal-case">GHrab your Food Order</div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default TraditionalFood;