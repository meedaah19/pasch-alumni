import { Link } from "react-router-dom";

export default function Profile(){
    return(
        <div className="max-w-5xl mx-auto p-4 pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mt-20 text-center">
            Welcome to the PASCH Alumni Network! 🎓
            </h2>
            <p className="text-gray-700 text-center mt-3">
            We're delighted to have you here! As a valued member of the PASCH Alumni community, you have the opportunity to reconnect with fellow alumni, explore career growth opportunities, and stay informed about our dynamic network. Whether you're looking to advance professionally, seek mentorship, or simply catch up with old friends, this is your space.
             </p>
             <p className="text-gray-700 text-center mt-3">
             Explore the alumni directory, discover exciting opportunities on the job board, and stay engaged with our ever-growing community. No matter where you are in your journey, we're here to support and celebrate your success.
             Take a moment to update your profile, connect with others, and make the most of your alumni experience!
             </p>
             <p className="text-gray-700 text-center mt-3">
             Reconnect with your network and make the most of your alumni experience. <Link className="cursor-pointer hover:text-green-400 underline font-medium" to="/alumni/:userEmail">Update your profile</Link>
             </p>
        </div>
    )
}