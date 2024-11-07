import HeadingBanner from "../../assets/images/ContactusBanner.png";

const Heading = () => {
    return (
        <div className="w-full">
            <div className="w-full max-w-screen-1920 mx-auto h-[300px] flex items-center justify-center">
                <div
                    style={{ backgroundImage: `url(${HeadingBanner})` }} 
                    className="text-center bg-cover bg-center w-full h-full flex flex-col items-center justify-center"
                >
                    <h1>Contact US</h1>
                    <div>Delicious Food</div>
                </div>
            </div>
        </div>
    );
}

export default Heading;
