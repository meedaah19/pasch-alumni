import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "../../firebase/firebase";
import { db } from "../../firebase/firebase";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function AlumniProfile() {
  const {userEmail} = useParams();
  const [alumniData, setAlumniData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userEmail) return;

    const fetchAlumniData = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "alumni", userEmail); // Using email as the document ID
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setAlumniData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching alumni data:", error);
      }
      setLoading(false);
    };

    fetchAlumniData();
  }, [userEmail]);

  if (loading) {
    return <p className="text-center text-gray-600 pt-25">Loading profile...</p>;
  }

  if (!alumniData) {
    return <p className="text-center text-gray-600">Profile not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden mt-[100px]">
      <div className="relative h-40 bg-gradient-to-r from-red-500 to-red-700"></div>

      <div className="text-center p-6 -mt-16">
        <img
          className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-md"
          src={alumniData.profilePic || "/profile.jpg"} 
          alt="Alumni Profile"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mt-2">{alumniData.name}</h2>
        <p className="text-gray-600">Pasch Alumni - Class of {alumniData.gradYear}</p>
        <p className="text-gray-500">{alumniData.jobTitle} at {alumniData.company}</p>
        <p className="mt-3 text-gray-700">{alumniData.bio}</p>
      </div>

      <div className="flex justify-center gap-4 my-4">
        {alumniData.linkedin && (
          <a href={alumniData.linkedin} className="text-blue-600 text-2xl" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        )}
        {alumniData.github && (
          <a href={alumniData.github} className="text-gray-900 text-2xl" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">Education</h3>
        <p className="text-gray-600">{alumniData.degree}, {alumniData.major}</p>

        <h3 className="mt-4 text-xl font-semibold text-gray-800">Work Experience</h3>
        <p className="text-gray-600">{alumniData.jobTitle}, {alumniData.company} ({alumniData.startYear} - {alumniData.present ? "Present" : alumniData.endYear})</p>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {alumniData.skills?.map((skill, index) => (
            <span key={index} className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}