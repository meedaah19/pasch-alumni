import { Link, useNavigate } from "react-router-dom";

import Button from "../util/Button";

export default function Community() {
  const navigate = useNavigate();

  return (
    <main className="container mx-auto pt-25 ">
    <div className="mb-10 w-full lg:h-[350px]  font-serif text-white bg-cover bg-center " 
    style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn60oWhn5ZptyaS-m7-PidC1Qw4t1QQtDFNg&s')"}}>
        <h1 className="text-left font-semibold text-3xl md:text-5xl p-10 pb-5  ">Welcome to the Pasch Alumni Community!</h1>
        <p className="text-left text-2xl pl-10 p-2 ">We are excited to have you here! This is a space for alumni to reconnect, share experiences, and support one another. Whether you are looking to network, explore career opportunities, or simply stay in touch with old friends, this community is here for you.
        </p>
        <p className="text-left text-2xl pl-10 p-2 ">Join discussions, share your journey, and contribute to a thriving network of professionals and changemakers. Let us continue building lifelong connections and making an impact together!
        </p>
        <p className="text-left text-2xl pl-10 p-2 ">Welcome home, alumni! <Button className="bg-green-500 p-2 mb-0 rounded pb-0 hover:bg-green-600 cursor-pointer" onClick={() => navigate('/signin')}>Join Us</Button></p>
    </div>
    <div  className="flex items-center justify-center">
    <div className=" grid grid-cols-1 bg-gray-300 pt-5 pb-2  w-[35%] ">
       <Link to="community" className="text-center text-xl text-black font-medium pb-5 hover:text-gray-700">Community Overview</Link>
       <Link to=":userEmail" className="text-center pb-3 text-green-700 text-[20px] hover:text-green-500 ">My profile</Link>
       <Link to="discussion" className="text-center pb-3 text-green-700 text-[20px] hover:text-green-500">Discussion Board</Link>
       <Link to="events" className="text-center pb-3 text-green-700 text-[20px] hover:text-green-500">Event Calendar</Link>
    </div>
    <div>

    </div>

    </div>
    </main>
  );
}