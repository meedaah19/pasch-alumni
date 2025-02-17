import { Link } from "react-router-dom";
import AlumniDirectory from "../component/Alumni/AlumniDirectory";
import Profile from "../component/Alumni/Profile";

function Alumni(){
    return(
        <>
        <Profile/>
        <AlumniDirectory/>
        <div className="container mx-auto text-center py-12">
            <h1 className="text-xl mb-4 font-bold text-gray-800 text-center font-serif pl-0.5 pr-0.5">Explore Exciting Opportunities on Our Job Board!</h1>
            <p className="text-gray-700 p-3">Looking for your next career move or a place to share job openings? Our Alumni Job Board connects talented professionals with exciting opportunities. Browse listings, post job openings, and grow your network.
                <Link className=" text-gray-700  cursor-pointer font-bold hover:text-green-500 underline " to="/alumni/jobBoard">Visit the Job Board</Link>
            </p>
            <p  className="text-gray-700 p-3 mb-5">Stay connected and take the next step in your career today!</p>
        
        </div>
        </>
    )
}
export default Alumni;