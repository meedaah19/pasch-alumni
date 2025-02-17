import React, { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../firebase/firebase"; 
import { useParams, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

export default function EditJobForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [loading, setLoading] = useState(false);
    const [job, setJob] = useState({
      title: "",
      company: "",
      location: "",
      description: "",
      link: "",
      postedBy: "",
    });

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const jobRef = doc(db, "jobs", id);
        const jobSnap = await getDoc(jobRef);
        if (jobSnap.exists()) {
          setJob(jobSnap.data());
        } else {
          alert("Job not found!");
          navigate("/alumni/jobBoard");
        }
      } catch (error) {
        console.error("Error fetching job:", error);
      }
    };
    
    fetchJob();
  }, [id, navigate]);

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (user.email !== job.postedBy) {
      alert("You are not authorized to edit this job.");
      return;
    }

    try {
      await updateDoc(doc(db, "jobs", id), {
        ...job,
      });
      alert("Job updated successfully!");
      navigate("/alumni/jobBoard"); 
    } catch (error) {
      console.error("Error updating job:", error);
      alert("Error updating job. Please try again.");
    } finally {
      setLoading(false);
    }
  };
   return (
  <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4 border rounded-lg shadow-md">
  <h3 className="text-lg font-bold mb-2">Edit Job</h3>
  <input type="text" name="title" value={job.title} onChange={handleChange} className="block w-full p-2 border rounded mb-2" />
  <input type="text" name="company" value={job.company} onChange={handleChange} className="block w-full p-2 border rounded mb-2" />
  <input type="text" name="location" value={job.location} onChange={handleChange} className="block w-full p-2 border rounded mb-2" />
  <textarea name="description" value={job.description} onChange={handleChange} className="block w-full p-2 border rounded mb-2" />
  <input type="text" name="link" value={job.link} onChange={handleChange} className="block w-full p-2 border rounded mb-2" />
  <button type="submit" className="bg-green-500 text-white p-2 rounded">{loading ? 'Updating Job...' : 'Update Job'}</button>
</form>
);
}