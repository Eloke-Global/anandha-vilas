import { useState } from 'react';
import DessertIcon from "../../assets/icons/Desserts.svg"
import DrinksIcon from "../../assets/icons/Drinks.svg"
import NonvegIcon from "../../assets/icons/Nonveg.svg"
import StarterIcon from "../../assets/icons/Starters.svg"
import VegIcon from "../../assets/icons/Veg.svg"
import { motion } from 'framer-motion';
const tabs = [
    { name: 'Starters',icon:StarterIcon },
    { name: 'Nonvege',icon:NonvegIcon },
    { name: 'Vegetarian',icon:VegIcon },
    { name: 'Dessert',icon:DessertIcon },
    { name: 'Drinks',icon:DrinksIcon },
];
const Menu = () => {
    const [activeTab, setActiveTab] = useState('Starters');
    return (
        <div className="bg-ylw py-[110px] w-full">
            <div className="w-full max-w-1920 flex flex-col items-center gap-12">
                <motion.div 
                variants={{onScreen:{opacity:1,   transformOrigin:"left",}, offScreen:{opacity:0,  }}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.5, type:"spring",}}
                className="text-center">
                    <motion.div 
                    variants={{onScreen:{opacity:1,   transformOrigin:"left",}, offScreen:{opacity:0,  }}} 
                    initial="offScreen" whileInView="onScreen" 
                    viewport={{once:true}} 
                    transition={{duration:1.5, type:"spring",}}
                    className="">CHOOSE DELICIOS</motion.div>
                    POPULAR MENU
                </motion.div>
                <motion.div 
                variants={{onScreen:{opacity:1,   transformOrigin:"left",}, offScreen:{opacity:0,  }}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.5, type:"spring",}}
                className="flex gap-[100px]">
                    {tabs.map((tab) => (
                        <button
                            key={tab.name}
                            onClick={() => setActiveTab(tab.name)}
                            className={`flex gap-3 flex-col items-center p-1.5 transition-colors
                            ${activeTab === tab.name ? 'border-b-2 border-black' : 'border-black'}`}
                        >
                            <img 
                            style={{
                                filter: activeTab === tab.name
                                  ? 'brightness(0) saturate(100%)'
                                  : 'brightness(0) saturate(100%) invert(100%)'
                            }}
                            src={tab.icon}/>
                            <span 
                                className={`${activeTab === tab.name ? 'text-black' : 'text-white'}`}
                            >{tab.name}</span>
                        </button>
                    ))}
                </motion.div>
                <div className=""></div>
                <motion.div 
                variants={{onScreen:{opacity:1,   transformOrigin:"left",}, offScreen:{opacity:0,  }}} 
                initial="offScreen" whileInView="onScreen" 
                viewport={{once:true}} 
                transition={{duration:1.5, type:"spring",}}
                className="flex gap-2 items-center text-white">
                    <div className="bg-[#89A14B] rounded-full px-5 text-white py-1">ANANDHA VILAS</div>
                    Unique and delicious dishes from the
                    <span className="underline">
                        flavous of kongunadu
                    </span>
                </motion.div> 
            </div>
        </div>
    )
}

export default Menu