import { Link } from "react-router-dom";
import Activities from "./Activities";

export default function Highlight(){
    return(
        <main className="pl-10 pr-10">
           <h2 className="text-4xl text-center font-bold text-gray-900 mt-7">
                Activities to Volunteer <span className="text-[#FFD700]">/ Get Involved In</span>
                <span className="block w-16 h-1 bg-[#FFD700] mx-auto mt-2 rounded"></span>
           </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-7  ">
            <Activities program="Mentorship Programs" description="Share your expertise and experiences by becoming a mentor for younger alumni or students in the network."/>
            <Activities program="Event Planning & Organization" description="Help plan and execute alumni events, reunions, or networking functions, either virtual or in-person."/>
            <Activities program="Community Service Projects" description="Participate in local charity drives, volunteering at shelters, or organizing community clean-ups."/>
            <Activities program="Fundraising & Donation Drives" description="Assist in organizing fundraising campaigns to support scholarships, alumni initiatives, or charitable causes."/>
            <Activities program="Social Media & Marketing Support" description="Help spread the word about alumni events or opportunities by managing social media accounts or creating promotional materials."/>
            <Activities program="Alumni Outreach & Recruitment" description="Assist in reaching out to fellow alumni to increase membership and involvement in various activities or events."/>
          </div>

          <section className="bg-gray-500 text-[#FFD700] py-12 text-left mt-7 rounded-4xl">
            <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-6 pr-10  pl-10">
                <div className="container mx-auto px-6  ">
                    <h2 className="text-3xl font-bold mb-4">Enroll in a Course Today!</h2>
                    <p className="text-lg mb-6">As a Pasch Alumni, your journey of growth never stops! Take advantage of our specially curated courses designed to expand your skills, boost your career, and connect you with a thriving network of fellow alumni. Keep learning, keep growing.</p>
                    <h4 className="font-bold">Why Enroll?</h4>
                    <p>Gain new skills for career advancement</p>
                    <p> Learn from industry experts</p>
                    <p className="mb-6">Be part of an engaged alumni learning community</p>
                    <h4 className="font-bold mb-8"> Don’t miss out—enroll today!</h4>
                    <Link to="/courses" className="bg-black text-[#ffae00] px-6 py-3 rounded-md font-semibold hover:bg-gray-200">
                    Explore Courses
                    </Link>
                </div>
                <div className="container mx-auto px-6">
                    <img src="https://images.pexels.com/photos/1181297/pexels-photo-1181297.jpeg?auto=compress&cs=tinysrgb&w=600" alt="person studying" className="w-full h-[450px] rounded" />
                </div>
            </div>
            </section>

        </main>
    )
}