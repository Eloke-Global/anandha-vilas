import ComponentLayout from "../../layouts/ComponentLayout"
import Img1 from "../../assets/images/menu/specialfood/IMG1.png"
import Img2 from "../../assets/images/menu/specialfood/IMG2.png"
import Img3 from "../../assets/images/menu/specialfood/IMG3.png"
import { motion } from "framer-motion"
const menuItems = [
    {
        name: 'GRILLED STEAK MARINADES',
        image: Img1,
        rating: 4.9,
        oldPrice: 25.00,
        newPrice: 19.00
    },
    {
        name: 'BEEF MASALA GRILL',
        image: Img2,
        rating: 4.3,
        oldPrice: 24.00,
        newPrice: 18.00
    },
    {
        name: 'SLOW COOKER POTPOURRI',
        image: Img3,
        rating: 4.9,
        oldPrice: 22.00,
        newPrice: 20.00
    }
];

const StarRating = ({ rating }) => {
    return (
        <motion.div 
        variants={{onScreen:{opacity:1,   transformOrigin:"left",}, offScreen:{opacity:0,  }}} 
        initial="offScreen" whileInView="onScreen" 
        viewport={{once:true}} 
        transition={{duration:1.5, type:"spring",}}
        className="flex items-center justify-center">
            {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    className={`w-4 h-4 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
            <span className="ml-1 text-sm text-gray-600">{rating}</span>
        </motion.div>
    );
};

const FoodCard = ({ item }) => {
    return (
        <motion.div 
        variants={{onScreen:{opacity:1, transformOrigin:"top",}, offScreen:{opacity:0,}}} 
        initial="offScreen" whileInView="onScreen" 
        viewport={{once:true}} 
        transition={{duration:2.5, type:"spring",}}
        className="h-[430px] w-[400px] flex flex-col justify-between p-2 items-center">
            <div className="h-[285px] w-full">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-full"
                />
            </div>
            <div className="flex flex-col items-center gap-2">
                <StarRating rating={item.rating} />
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <div className="flex items-center gap-2">
                    <span className="text-red-500 line-through">${item.oldPrice.toFixed(2)}</span>
                    <span className="text-gray-800 font-bold">${item.newPrice.toFixed(2)}</span>
                </div>
            </div>
        </motion.div>
    )
}

const SpecialOccasions = () => {
    return (
        <ComponentLayout classname="py-[110px]">
            <div className="flex w-full items-center justify-center flex-col gap-16">
                <div className="text-center">
                    <motion.div 
                    variants={{onScreen:{opacity:1,   transformOrigin:"center",}, offScreen:{opacity:0,  }}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:1.5, type:"spring",}}
                    className="text-yellow-500 text-sm font-medium mb-2">- MASTER CHEF'S SPECIAL -</motion.div>
                    <motion.h2 
                    variants={{onScreen:{opacity:1,   transformOrigin:"top",}, offScreen:{opacity:0,  }}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:2.5, type:"spring",}}
                    className="text-3xl font-bold text-gray-800">FOR SPECIAL OCCASIONS</motion.h2>
                </div>
                <motion.div 
                variants={{onScreen:{opacity:1,   transformOrigin:"center",}, offScreen:{opacity:0,  }}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.5, type:"spring",}}
                className="flex gap-4">
                    {menuItems.map((item, index) => (
                        <FoodCard key={index} item={item} />
                    ))}
                </motion.div>
            </div>
        </ComponentLayout>
    )
}

export default SpecialOccasions;