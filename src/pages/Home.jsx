import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Home/Menu";
import PopularDishes from "../components/Home/PopularDishes";
import RecentArticles from "../components/Home/RecentArticles";
import TraditionalFood from "../components/Home/TraditionalFood";

const Home = () =>{
    return (
        // <div className="bg-red-500">
        //     Hellof rom Home
        // </div>
        <>
            <Header/>
            <TraditionalFood/>
            <Menu/>
            {/* <PopularDishes/>
            <RecentArticles/> */}
            <Footer/>
        </>
    )
}

export default Home;