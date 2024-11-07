import ComponentLayout from "../../layouts/ComponentLayout"
import { motion } from "framer-motion"
import Special1 from "../../assets/images/aboutus/Special1.png"
import Special2 from "../../assets/images/aboutus/Special2.png"
import Special3 from "../../assets/images/aboutus/Special3.png"
const Card = ({image,title}) =>{
    return (
        <motion.div 
        variants={{onScreen:{opacity:1, scale:1, transformOrigin:"top",}, offScreen:{opacity:0, scale:0,}}} 
        initial="offScreen" whileInView="onScreen" 
        viewport={{once:true}} 
        transition={{duration:1.5, type:"spring",}}
        className=" w-[380px]">
            <div className="rounded">
                <div style={{ backgroundImage: `url(${image})` }}  className="rounded aspect-square bg-no-repeat bg-cover bg-center" src={image}></div>
            </div>
            <div className="py-9 px-4 text-center">
                <div className="uppercase text-2xl">{title}</div>
                Lorem ipsum dolor sit amet <br />
                consectetur adipiscing.
            </div>
        </motion.div>
    )
}

const RestaurantSpecial = () =>{
    return (
        <ComponentLayout classname="py-[110px] flex flex-col gap-16 items-center justify-center">
            <motion.div 
            variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
            initial="offScreen" whileInView="onScreen" 
            viewport={{once:true}} 
            transition={{duration:1.5, type:"spring",}}
            className=" uppercase text-center">
                - Restaurant Facilities -
                <motion.div 
                variants={{onScreen:{opacity:1, scale:1, transformOrigin:"left",}, offScreen:{opacity:0, scale:0,}}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.5, type:"spring",}}
                className="pt-3 text-5xl font-semibold">
                    Restaurant Special
                </motion.div>
            </motion.div>
            <div className="flex gap-8">
                <Card image={Special1} title={"Mutton Kari Dosa"}/>
                <Card image={Special2} title={"Mutton Kari Dosa"}/>
                <Card image={Special3} title={"Mutton Kari Dosa"}/>
            </div>
        </ComponentLayout>
    )
}

export default RestaurantSpecial;