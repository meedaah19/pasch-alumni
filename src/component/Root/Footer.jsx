import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <div className="bg-red-500 text-white mt-7 rounded  bottom-0 w-full ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 pl-20 pr-20 ">
                <div>
                    <h3 className="font-bold mb-5">Social Media</h3>
                    <Link to='https://www.instagram.com/paschalumnighana/' >Instagram</Link>
                </div>
                <div>
                    <h3 className="font-bold mb-5">Get Help</h3>
                </div>
                <div>
                    <h3 className="font-bold mb-5">About The Site</h3>
                </div>
            </div>
        </div>
    )
}