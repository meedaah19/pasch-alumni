import Button from "../util/Button";

export default function Hero() {
    return (
      <section
        className="relative w-full h-[900px] md:h-[800px] lg:h-[800px] flex items-center justify-center text-white bg-cover bg-center overflow-x-hidden"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/8093046/pexels-photo-8093046.jpeg?auto=compress&cs=tinysrgb&w=600')" }}
      >
        <div >
             <div className="relative w-full flex justify-center  mb-6 md:mt-6 pr-10 pl-10 pt-12 lg:mt-0   ">
          <img src='https://images.pexels.com/photos/7944235/pexels-photo-7944235.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Alumni image" className="w-2xl h-[350px] object-cover rounded" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to Pasch Alumni</h1>
          <p className="mt-4 text-lg md:text-xl">The Pasch Alumni Network fosters a dynamic and engaged community of alumni worldwide. We connect past and present members through enriching events, networking opportunities, and lifelong learning programs. Join us in building lasting connections and shaping the future together.</p>
          <Button className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 rounded-md text-lg">
            Join Now
          </Button> 
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  top-60">
            <div className="bg-black p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Mentorship Programs</h3>
              <p>Share your expertise and experiences by becoming a mentor for younger alumni or students in the network.</p>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Event Planning & Organization</h3>
              <p>Help plan and execute alumni events, reunions, or networking functions, either virtual or in-person.</p>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Community Service Projects</h3>
              <p>Participate in local charity drives, volunteering at shelters, or organizing community clean-ups.</p>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Fundraising & Donation Drives</h3>
              <p>Assist in organizing fundraising campaigns to support scholarships, alumni initiatives, or charitable causes.</p>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Social Media & Marketing Support</h3>
              <p>Help spread the word about alumni events or opportunities by managing social media accounts or creating promotional materials.</p>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Alumni Outreach & Recruitment</h3>
              <p>Assist in reaching out to fellow alumni to increase membership and involvement in various activities or events.</p>
            </div>
          </div>
        </div>
      </section>
    );
}
