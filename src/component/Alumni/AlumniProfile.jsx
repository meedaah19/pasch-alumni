import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function AlumniProfile() {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden mt-[100px] ">
      {/* Header with Banner */}
      <div className="relative h-40 bg-gradient-to-r from-red-500 to-red-700"></div>

      {/* Profile Info */}
      <div className="text-center p-6 -mt-16">
        <img
          className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-md"
          src="/profile.jpg" // Replace with actual image URL
          alt="Alumni Profile"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mt-2">John Doe</h2>
        <p className="text-gray-600">Pasch Alumni - Class of 2020</p>
        <p className="text-gray-500">Software Engineer at Google</p>
        <p className="mt-3 text-gray-700">Passionate about AI & Web Development.</p>
      </div>

      {/* Contact & Social Links */}
      <div className="flex justify-center gap-4 my-4">
        <a href="#" className="text-blue-600 text-2xl">
          <FaLinkedin />
        </a>
        <a href="#" className="text-gray-900 text-2xl">
          <FaGithub />
        </a>
        <a href="#" className="text-blue-400 text-2xl">
          <FaTwitter />
        </a>
      </div>

      {/* Education & Work Experience */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">Education</h3>
        <p className="text-gray-600">B.Sc. Computer Science, MIT (2016 - 2020)</p>

        <h3 className="mt-4 text-xl font-semibold text-gray-800">Work Experience</h3>
        <p className="text-gray-600">Software Engineer, Google (2021 - Present)</p>
      </div>

      {/* Skills */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">React.js</span>
          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">JavaScript</span>
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">AI/ML</span>
        </div>
      </div>
    </div>
  );
}
