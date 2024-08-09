// import React from 'react'

// import CTA from "../components/CTA"
// import Diamond from "../components/Diamond"
import Logo from "../assets/Logo.png"
import food1 from "../assets/Food1.png"
import CTA from "../components/CTA"
import PeopleEating from "../assets/People Eating.png"
const ComingSoon = () => {
  return (
    <div className="bg-primaryGreen lg:pt-[110px] pt-[60px] pb-0 lg:pb-[64px] w-full jost">
        <div className="pt-2.5 flex flex-col items-center lg:gap-28 gap-12 pb-7 lg:pb-24">
            <img className="lg:h-auto h-12" src={Logo}/>
            <div className="max-w-[600px] text-white lg:text-3xl text-lg text-center font-extralight animate-fade-in-up">
                EXPERIENCE THE FLAVOURS OF <br/> KONGUNADU WITH ANANDHA VILLAS!
                <div className="saint text-golden lg:pt-8 pt-2 lg:text-5xl text-2xl animate-fade-in-down">
                    For the Finest Dining Delight
                </div>
            </div>
        </div>


        {/* Middle Section Start */}
        <div className="lg:mt-[60px] max-w-[1300px] flex lg:flex-row flex-col-reverse mx-auto text-white pb-40">
            <div className="flex-1 flex gap-8 md:px-24 lg:pl-24 p-8 flex-col justify-center animate-fade-in-left pt-[250px]">
                <div className="lg:text-4xl text-xl font-light relative">
                    <div className="absolute bottom-1/2 -left-5 cormorant font-extralight text-6xl lg:text-8xl opacity-20 animate-fade-in-down">
                        COMING <br /> SOON
                    </div>
                    OUR WEBSITE <br className="hidden lg:block"/> IS BEING <br className="hidden lg:block"/> COOKED TO <br className="hidden lg:block"/> PERFECTION!
                </div>
                <div className="lg:max-w-[300px] font-extralight ">
                    At Anandha Vilas, we craft experiences, not just food. Our restaurant celebrates the rich culinary heritage of the Kongu region. Each dish is a testament to the flavors, traditions, and love that define Kongu cuisine.
                </div>
                <CTA className={"max-w-fit text-xs"} text={"CONTACT US"}/>
            </div>
            <div className="flex-1 relative animate-fade-in-down p-4 lg:p-0 flex items-center justify-center">
                <img className="" src={food1} alt="" />
                <div className="absolute lg:-left-[30%] lg:top-[300px] right-12 top-2/3 animate-flip-x">
                    <img src={PeopleEating}/>
                </div>
            </div>
        </div>
        {/* Middle Section End */}

        {/* Footer Section Start */}
        <div className="pt-32 flex flex-col lg:flex-row gap-16 justify-center items-center bg-secGreen pb-24">
            <div className="w-[420px] flex gap-4 p-7  flex-col text-center text-white font-extralight  animate-fade-in-up">
                CONTACT US
                <div className="font-extralight">
                    CIT Nagar - 098844 32960
                    <div className="font-extralight">
                        Nungambakkam- 095660 73229
                    </div>
                </div>
            </div>
            <div className="w-[420px] flex gap-4 p-7  flex-col text-center text-white font-extralight lg:border-x lg:border-golden animate-fade-in-up">
                LOCATIONS
                <div className="font-extralight">
                    CIT Nagar,
                    <div className="font-extralight">
                        Nungambakkam, Perungudi
                    </div>
                </div>
            </div>
            <div className="w-[420px] flex gap-4 p-7  flex-col text-center text-white font-extralight animate-fade-in-up">
                OPENING HOURS
                <div className="font-extralight">
                    Everyday : From 12PM To 4PM
                    <div className="font-extralight">
                        From 7PM To 11PM
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ComingSoon