import Footer from "../components/Footer"
import Header from "../components/Header"

const Pagelayout = ({children}) =>{
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default Pagelayout;