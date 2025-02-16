import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase"; 

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
    <div className="job-board-container max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6 font-serif">Alumni Job Board</h2>
      
      {loading ? (
        <p>Loading jobs...</p>
      ) : jobs.length === 0 ? (
        <p className="text-center text-xl text-gray-200">No job opportunities available at the moment.</p>
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
              <a 
                href={job.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block text-green-500 hover:text-green-400"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobBoard;
