import Footer from '../component/Root/Footer';
import Navbar from '../component/Root/Navbar';
import { Outlet } from "react-router-dom";

function RootPage(){
    return(
        <>
        <Navbar/>
        <main>
        <Outlet/>
        </main>
        <Footer/>
        </>
    )
}
export default RootPage;