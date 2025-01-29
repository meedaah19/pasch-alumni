import Navbar from "../component/navbar";
import { Outlet } from "react-router-dom";

function RootPage(){
    return(
        <>
        <Navbar/>
        <main>
        <Outlet/>
        </main>
        
        </>
    )
}
export default RootPage;