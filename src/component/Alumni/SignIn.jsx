let classNameForm = "bg-green-600 rounded-2xl";
let Div = "rounded-2xl border-3 border-black p-5 mb-8 w-[700px]";
let Header = "uppercase text-2xl font-bold mb-2 text-center";
let div = "grid grid-cols-1 mb-2 text-white";
let label = "font-medium text-xl " ;
let input = "h-10 pl-2 border-2 border-black"

export default function SignIn(){
    return(
        <div className="bg-gray-300 mt-[80px] p-10  flex justify-center text-yellow-400">
            <form className={classNameForm} action="">
            <div className= {Div}>
            <h1 className={Header}>Profile</h1>
                <div className={div}>
                    <label className={label}htmlFor="name">Full Name</label>
                    <input className={input} type="text" name="name" id="name" />
                </div>
                <div className={div}>
                    <label className={label} htmlFor="name">UserName</label>
                    <input className={input} type="text" name="name" id="name" />
                </div>
                <div className={div}>
                    <label className={label} htmlFor="password">Password</label>
                    <input className={input} type="text" name="password" id="password" />
                </div>
                <div className={div}>
                    <label className={label} htmlFor="profile-pic">Profile Picture</label>
                    <input className={input} type="file" name="profile-pic" id="profile-pic" />
                </div>
                <div className={div}>
                    <label className={label} htmlFor="grad-year">Graduation Year</label>
                    <input className={input} type="number" name="grad-year" id="grad-year" />
                </div>
                <div className={div}>
                    <label className={label} htmlFor="job-title">Current Job & Company</label>
                    <input className={input} type="text" name="job-title" id="job-title" />
                </div>
                <div className={div}>
                    <label className={label} htmlFor="location">Location</label>
                    <input className={input} type="text" name="location" id="location" />
                </div>
                <div className={div}>
                    <label className={label} htmlFor="bio">Short Bio</label>
                    <textarea className={"h-15 pl-2 border-2 border-black"} type="text" name="bio" id="bio" />
                </div>
            </div>
               <div className={Div}>
               <h1 className={Header}>Contact</h1>
                <div className={div}>
                    <label className={label} htmlFor="email">Email</label>
                    <input className={input} type="email" name="email" id="email" />
                </div>
                <div className={div}>
                    <label className={label} htmlFor="phone">Phone</label>
                    <input className={input} type="tel" name="phone" id="phone" />
                </div>
                <div className={div }>
                    <label className={label} htmlFor="linkedin">LinkedIn</label>
                    <input className={input} type="url" name="linkedin" id="linkedin" />
                </div>
                <div className={div}>
                    <label className={label} htmlFor="github">GitHub/Portfolio Website</label>
                    <input className={input} type="url" name="github" id="github" />
                </div>
                <div className={div}>
                    <label className={label} htmlFor="twitter/instagram">Twitter/Instagram</label>
                    <input className={input} type="url" name="twitter/instagram" id="twitter/instagram" />
                </div>
               </div>
               <div className={Div}>
               <h1 className={Header}>Education</h1>
                <div className={div}>
                    <label className={label} htmlFor="school">School</label>
                    <input className={input} type="text" name="school" id="school" />
                </div>
                <div className={div}>
                    <label className={label} htmlFor="degree">Degree</label>
                    <input className={input} type="text" name="degree" id="degree" />
                </div>
                <div className={div}>
                    <label className={label} htmlFor="major">Major</label>
                    <input className={input} type="text" name="major" id="major" />
                </div>
                <div className={div}>
                    <label className={label} htmlFor="grad-year">Graduation Year</label>
                    <input className={input} type="number" name="grad-year" id="grad-year" />
                </div>
               </div>
                <div className={Div}>
                <h1 className={Header}>Work Experience</h1>
                <div className={div}>
                    <label className={label} htmlFor="job-title">Job Title</label>
                    <input className={input} type="text" name="job-title" id="job-title" />
                </div>
                <div className={div}>
                    <label className={label} htmlFor="company">Company</label>
                    <input className={input} type="text" name="company" id="company" />
                </div>
                <div className={div}>
                    <label className={label} htmlFor="start-year">Start Year</label>
                    <input className={input} type="number" name="start-year" id="start-year" />
                </div>
                <div className={div}>
                    <label className={label} htmlFor="end-year">End Year</label>
                    <input className={input} type="number" name="end-year" id="end-year" />
                </div>
                <div className="grid grid-cols-2 mb-4 text-white">
                    <label className={label} htmlFor="present">Present</label>
                    <input type="checkbox" name="present" id="present" />
                </div>
                <div className={div}>
                    <label className={label} htmlFor="description">Description of Role & Achievements</label>
                    <input className={input} type="text" name="description" id="description" />
                </div>
                </div>
                <div className={Div}>
                <h1 className={Header}>Skills</h1>
                <div className={div}>
                    <label className={label} htmlFor="skills">Skills</label>
                    <input className={input} type="text" name="skills" id="skills" />
                </div>
                <div className={div}>
                    <label className={label} htmlFor="endorsements">Endorsement</label>
                    <input className={input} type="number" name="endorsements" id="endorsements" />
                </div>
                </div>
                <div className={Div}>
                <h1 className={Header}>Achievements & Contributions</h1>
                <div className={div}>
                    <label className={label} htmlFor="awards & recongnition">Awards & Recognitions </label>
                    <input className={input} type="text" name="awards & recongnition" id="awards & recongnition" />
                </div>
                <div className={div}>
                    <label className={label} htmlFor="projects">Projects</label>
                    <input className={input} type="text" name="projects" id="projects" />
                </div>
                <div className={div}>
                    <label className={label} htmlFor="volunteer">Volunteer</label>
                    <input className={input} type="text" name="volunteer" id="volunteer" />
                </div>
                </div>
             </form>
        </div>
    )
}