import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db, auth } from "../firebase/firebase"; 
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const JobForm = () => {
  const redirect = useNavigate();
    const [user] = useAuthState(auth);
    const [loading, setLoading] = useState(false);
    const [job, setJob] = useState({
      title: "",
      company: "",
      location: "",
      description: "",
      link: "",
    });
  
    const handleChange = (e) => {
      setJob({ ...job, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      if (!job.title || !job.company || !job.location || !job.description || !job.link) {
        alert("Please fill all fields");
        return;
      }
     try {
      await addDoc(collection(db, "jobs"), {
        ...job,
        postedBy: user.email,
        postedDate: Timestamp.now(),
      });
      alert("Job posted successfully!");
      setJob({ title: "", company: "", location: "", description: "", link: "" });
    } catch (error) {
      console.error("Error posting job:", error);
      alert("Error posting job. Please try again.");
    } finally {
      redirect("/alumni/jobBoard");
    }}
 

  if(!user){
    return <p className="text-center pt-25 text-xl">Please sign in to post a job</p>
  }
  

  return (
        <form onSubmit={handleSubmit} className=" pt-2  max-w-4xl p-4 m-25 border rounded-lg shadow-md   mx-auto">
    <h3 className="text-lg font-bold mb-2 font-serif">Post a Job</h3>
    <input
      type="text"
      name="title"
      placeholder="Job Title"
      value={job.title}
      onChange={handleChange}
      className="block w-full p-2 border rounded mb-2"
    />
    <input
      type="text"
      name="company"
      placeholder="Company Name"
      value={job.company}
      onChange={handleChange}
      className="block w-full p-2 border rounded mb-2"
    />
    <input
      type="text"
      name="location"
      placeholder="Location"
      value={job.location}
      onChange={handleChange}
      className="block w-full p-2 border rounded mb-2"
    />
    <textarea
      name="description"
      placeholder="Job Description"
      value={job.description}
      onChange={handleChange}
      className="block w-full p-2 border rounded mb-2"
    />
    <input
      type="text"
      name="link"
      placeholder="Application Link"
      value={job.link}
      onChange={handleChange}
      className="block w-full p-2 border rounded mb-2"
    />
    <button type="submit" className="bg-green-500 text-white p-2 rounded">
    {loading ? 'Posting Job...' : 'Post Job'}
    </button>
    </form>
  ) };

export default JobForm;
