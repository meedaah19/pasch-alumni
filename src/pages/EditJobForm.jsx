import React, { useState} from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../firebase/firebase"; 
import { useLoaderData, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

export default function EditJobForm() {
    const redirect = useNavigate();
    const [user] = useAuthState(auth);
    const jobData = useLoaderData();
    const [loading, setLoading] = useState(false);
    const [job, setJob] = useState(jobData);

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, jobId, updatedData) => {
    e.preventDefault();
    setLoading(true);

    if (user?.email !== jobData.postedBy) {
      alert("You are not authorized to edit this job.");
      setLoading(false);
      return;
    }
    
      if(!jobId) {
        return;
      }

      try {
        const jobRef = doc(db, "jobs", jobId);
        const jobSnap = await getDoc(jobRef);

        if(!jobSnap.exists()) {
          return
        }

        await updateDoc(jobRef, updatedData);
        alert("Job updated successfully!");
        redirect("/alumni/jobBoard"); 
      } catch (error) {
        console.error("Error updating job:", error);
        alert("Error updating job. Please try again.");
      } finally {
        setLoading(false);
      }
  };
   return (
  <form onSubmit={handleSubmit} className="max-w-4xl mt-25 mx-auto p-4 border rounded-lg shadow-md">
  <h3 className="text-lg font-bold mb-2">Edit Job</h3>
  <input type="text" name="title" value={job.title} onChange={handleChange} required className="block w-full p-2 border rounded mb-2" />
  <input type="text" name="company" value={job.company} onChange={handleChange} required className="block w-full p-2 border rounded mb-2" />
  <input type="text" name="location" value={job.location} onChange={handleChange} required className="block w-full p-2 border rounded mb-2" />
  <textarea name="description" value={job.description} onChange={handleChange} required className="block w-full p-2 border rounded mb-2" />
  <input type="text" name="link" value={job.link} onChange={handleChange} required className="block w-full p-2 border rounded mb-2" />
  <button disabled={loading} type="submit" className="bg-green-500 text-white p-2 rounded">{loading ? 'Updating Job...' : 'Update Job'}</button>
</form>
);
} 