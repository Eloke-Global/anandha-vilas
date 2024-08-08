// import React from 'react'

// import CTA from "../components/CTA"
// import Diamond from "../components/Diamond"
import Logo from "../assets/Logo.png"
import food1 from "../assets/Food1.png"
import CTA from "../components/CTA"
import PeopleEating from "../assets/People Eating.png"
const ComingSoon = () => {
  return (
    <div className="bg-primaryGreen pt-[110px] pb-[64px] w-full jost">
        <div className="pt-2.5 flex flex-col items-center gap-28 pb-24">
            <img className="animate-slide-in-elliptic" src={Logo}/>
            <div className="max-w-[600px] text-white text-3xl text-center font-extralight animate-fade-in-up">
                EXPERIENCE THE FLAVOURS OF <br /> KONGUNADU WITH ANANDHA VILLAS!
                <div className="saint text-golden pt-8 text-5xl animate-fade-in-down">
                    For the Finest Dining Delight
                </div>
            </div>
        </div>


        {/* Middle Section Start */}
        <div className="mt-[60px] max-w-[1300px] flex mx-auto text-white pb-40 relative">
            <div className="absolute left-0 top-[40px] cormorant font-extralight text-8xl opacity-20 animate-fade-in-down">
                COMING <br /> SOON
            </div>
            <div className="flex-1 flex gap-8 pl-24 flex-col justify-center animate-fade-in-left">
                <div className="text-4xl font-light">
                    Our website <br /> is being <br /> cooked to <br /> perfection!
                </div>
                <div className="max-w-[300px] font-extralight">
                    At Anandha Vilas, we craft experiences, not just food. Our restaurant celebrates the rich culinary heritage of the Kongu region. Each dish is a testament to the flavors, traditions, and love that define Kongu cuisine.
                </div>
                <CTA className={"max-w-fit text-xs"} text={"CONTACT US"}/>
            </div>
            <div className="flex-1 relative animate-fade-in-down">
                <img src={food1} alt="" />
                <div className="absolute -left-[30%] top-[300px] animate-flip-x">
                    <img src={PeopleEating}/>
                </div>
            </div>
        </div>
        {/* Middle Section End */}

        {/* Footer Section Start */}
        <div className="pt-32 flex justify-center bg-secGreen pb-24">
            <div className="w-[420px] flex gap-4 p-7  flex-col text-center text-white font-extralight  animate-fade-in-up">
                CONTACT US
                <div className="font-extralight">
                    CIT Nagar - 098844 32960
                    <div className="font-extralight">
                        Nungambakkam- 095660 73229
                    </div>
                </div>
            </div>
            <div className="w-[420px] flex gap-4 p-7  flex-col text-center text-white font-extralight border-x border-golden animate-fade-in-up">
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