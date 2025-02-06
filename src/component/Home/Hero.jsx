import Button from "../util/Button";
import {useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();
    return (
      <main
        className="relative w-full h-[900px] md:h-[800px] lg:h-[800px] flex items-center justify-center text-white bg-cover bg-center overflow-x-hidden"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/8093046/pexels-photo-8093046.jpeg?auto=compress&cs=tinysrgb&w=600')" }}
      >
        <div >
             <div className="relative w-full flex justify-center  mb-6 md:mt-6 pr-10 pl-10 pt-12 lg:mt-0   ">
          <img src='https://images.pexels.com/photos/7944235/pexels-photo-7944235.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Alumni image" className="w-2xl h-[350px] object-cover rounded" />
        </div>
        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to Pasch Alumni</h1>
          <p className="mt-4 text-lg md:text-xl">The Pasch Alumni Network fosters a dynamic and engaged community of alumni worldwide. We connect past and present members through enriching events, networking opportunities, and lifelong learning programs. Join us in building lasting connections and shaping the future together.</p>
          <Button onClick={() => navigate('/signup')} className="cursor-pointer mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-md text-lg">
            Join Now
          </Button> 
        </div>
        </div>
      </main>
    );
}
