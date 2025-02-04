import Input from "../util/Input";

let classNameForm = " bg-white rounded-2xl mt-10";
let Div = "rounded-2xl  p-5 mb-8 max-w-lg w-full md:w-[500px] ";
let Header = "uppercase text-2xl font-bold mb-2 text-center text-black";


export default function ApplicationForm(){
    return(
        <div className="bg-gray-100 min-h-screen p-10 pt-25  flex flex-col items-center">
            <div className="md:w-[500px] w-full">
            <h1 className="text-4xl font-bold text-center text-black mb-5">Alumni Application</h1>
            <p className="text-center text-xl text-black">Please fill out the form below to apply to be a part of our Alumni Network.</p>
            <p className="text-center text-xl text-black">All fields are required.</p>
            <p className="text-center text-xl text-black">Please note that your application will be reviewed and you will be notified via email if you are accepted.</p>
            <p className="text-center text-xl text-black">Thank you for your interest in our Alumni Network.</p>
            <p className="text-center text-xl text-black">We look forward to having you as a part of our community.</p>
            </div>
            <form className={classNameForm} action="">
            <div className= {Div}>
            <h1 className={Header}>Profile</h1>
                <Input type="text" name="name" id="name" htmlFor="name" label='Full Name'/>            
                <Input type="text" name="username" id="username" htmlFor="username" label='UserName'/>   
                <Input type="text" name="password" id="password" htmlFor="password" label='Password'/>   
                <Input type="file" name="profile-pic" id="profile-pic" htmlFor="profile-pic" label='Profile Picture'/>   
                <Input type='location' name='location' id='location' htmlFor='location' label='Location'/>
                <Input type='bio' name='bio' id='bio' htmlFor='bio' label='Short Bio' className="h-15 pl-2 border-2"/>
            </div>
               <div className={Div}>
               <h1 className={Header}>Contact</h1>
               <Input type="email" name="email" id="email" htmlFor="email" label='Email'/>
                <Input type="tel" name="phone" id="phone" htmlFor="phone" label='Phone'/>
                <Input type='linkedin' name='linkedin' id='linkedin' htmlFor='linkedin' label='LinkedIn'/>
                <Input type='github' name='github' id='github' htmlFor='github' label='GitHub/Portfolio Website'/>
                <Input type='twitter/instagram' name='twitter/instagram' id='twitter/instagram' htmlFor='twitter/instagram' label='Twitter/Instagram'/>
               </div>
               <div className={Div}>
               <h1 className={Header}>Education</h1>
                <Input type="text" name="degree" id="degree" htmlFor="degree" label='Degree'/>
                <Input type="text" name="major" id="major" htmlFor="major" label='Major'/>
                <Input type="number" name="grad-year" id="grad-year" htmlFor="grad-year" label='Graduation Year'/>   
               </div>
                <div className={Div}>
                <h1 className={Header}>Work Experience</h1>
                <Input type='job-title' name='job-title' id='job-title' htmlFor='job-title' label='Job Title'/>
                <Input type='company' name='company' id='company' htmlFor='company' label='Company'/>
                <Input type='start-year' name='start-year' id='start-year' htmlFor='start-year' label='Start Year'/>
                <Input type='end-year' name='end-year' id='end-year' htmlFor='end-year' label='End Year'/>
                <Input type='checkbox' name='present' id='present' htmlFor='present' label='Present' className="h-5 w-5 accent-green-600"/>
                <Input type='description' name='description' id='description' htmlFor='description' label='Description of Role & Achievements'/>
                </div>
                <div className={Div}>
                <h1 className={Header}>Skills</h1>
                <Input type='endorsements' name='endorsements' id='endorsements' htmlFor='endorsements' label='Endorsements'/>
                <Input type='awards & recongnition' name='awards & recongnition' id='awards & recongnition' htmlFor='awards & recongnition' label='Awards & Recognitions'/>
                <Input type='projects' name='projects' id='projects' htmlFor='projects' label='Projects'/>
                <Input type='volunteer' name='volunteer' id='volunteer' htmlFor='volunteer' label='Volunteer'/>
                </div>
             </form>
        </div>
    )
}