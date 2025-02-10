import Footer from '../component/Root/Footer';
import Navbar from '../component/Root/Navbar';
import { Outlet } from "react-router-dom";
//import ScrollToTop from '../component/Root/ScrollToTheTop';

function RootPage(){
    return(
        <>
       {/* // <ScrollToTop/> */}
        <Navbar/>
        <main>
        <Outlet/>
        </main>
        <Footer/>
        </>
    )
}
export default RootPage;