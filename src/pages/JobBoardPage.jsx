import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase"; 
import { Link } from "react-router-dom";
import {auth} from "../firebase/firebase";

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUserEmail(currentUser.email);
    }

    const fetchJobs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "jobs"));
        const jobsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setJobs(jobsList);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="job-board-container max-w-4xl mx-auto p-4 pt-25">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6 font-serif">Alumni Job Board</h2>
      
      <p className="mb-3 text-center text-xl text-black"> Find a job that fits your skills and interests!</p>
      {loading ? (
        <p>Loading jobs...</p>
      ) : jobs.length === 0 ? (
        <p className="text-center text-xl text-black">No job opportunities available at the moment.</p>
      ) : (
        <div className="job-list">
          {jobs.map((job) => (
            <div key={job.id} className="max-w-4xl mx-auto job-card p-4 mb-4 border rounded-lg shadow-md">
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="text-lg">{job.company} - {job.location}</p>
              <p className="text-sm text-gray-600">{job.description}</p>
              <p className="text-xs text-gray-400 mt-2">
                Posted on: {new Date(job.postedDate?.seconds * 1000).toLocaleDateString()}
              </p>
              <div className="flex justify-between items-center">
              <Link
                to={job.link}
                className="mt-4 inline-block text-green-500 hover:text-green-400"
              >
                Apply Now
              </Link>
              {userEmail === job.postedBy && (
              <Link to="edit" className="border-1 border-green-500 rounded-md p-1 hover:bg-green-500 hover:text-white">
                Edit
              </Link>
              )}
              </div>
            </div>
          ))}
        </div>
        
      )}
       <div>
            <h1 className="text-xl mb-4 font-bold text-gray-800 text-center font-serif pt-10 pl-0.5 pr-0.5">Post a Job on Our Alumni Job Board! </h1>
            <p className="text-gray-700 p-3">Looking to hire top talent from our alumni community? Share your job openings and connect with skilled professionals. Posting a job is quick and easy!
                <Link className="text-gray-700 cursor-pointer font-bold hover:text-green-500 underline" to="/alumni/jobForm">Post a Job Now</Link>
            </p>
            <p className="text-gray-700 mb-5">Support fellow alumni and find the right candidate today!</p>
        </div>
    </div>
    
  );
};

export default JobBoard;
