import Input from "../component/util/Input";
import {useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db, auth, storage } from "../firebase/firebase"; 
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";

export default function EditApplicationForm(){
    const [user] = useAuthState(auth);
    const userData = useLoaderData();
    const [formData, setFormData] = useState(userData);
    
      const [loading, setLoading] = useState(false);
      const redirect = useNavigate();
    
      const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

      const handleSubmit = async (e, userId, updatedData) => {
        e.preventDefault();
        setLoading(true);
    
        if (user?.email !== userData.postedBy) {
          alert("You are not authorized to edit this job.");
          setLoading(false);
          return;
        }
    
          try {
            const userRef = doc(db, "jobs", userId);
            const userSnap = await getDoc(userRef);
    
            if(!userSnap.exists()) {
              return
            }
    
            await updateDoc(userRef, updatedData);
            alert("Profile updated successfully!");
            redirect("/alumni/jobBoard"); 
          } catch (error) {
            console.error("Error updating job:", error);
            alert("Error updating job. Please try again.");
          } finally {
            setLoading(false);
          }
      };
    

    return(
        <div className="bg-gray-100 min-h-screen p-10 pt-25 flex flex-col items-center">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-black mb-5">Alumni Application</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md" >
          <Input type="text" name="name" label="Full Name" value={formData.name} onChange={handleChange} required />
          <Input type="email" name="email" label="Email" value={formData.email} onChange={handleChange} required />
          <Input type="tel" name="phone" label="Phone" value={formData.phone} onChange={handleChange} required />
          <Input type="file" name="Profile-image" label="Profile-Image" accept="image/*" onChange={handleChange} required />
          <Input type="text" name="location" label="Location" value={formData.location} onChange={handleChange} required />
          <Input type="text" name="bio" label="Short Bio" value={formData.bio} onChange={handleChange} required />
          <Input type="text" name="degree" label="Degree" value={formData.degree} onChange={handleChange} required />
          <Input type="text" name="major" label="Major" value={formData.major} onChange={handleChange} required />
          <Input type="number" name="gradYear" label="Graduation Year" value={formData.gradYear} onChange={handleChange} required />
          <Input type="text" name="jobTitle" label="Job Title" value={formData.jobTitle} onChange={handleChange} />
          <Input type="text" name="company" label="Company" value={formData.company} onChange={handleChange} />
          <Input type="number" name="startYear" label="Start Year" value={formData.startYear} onChange={handleChange} />
          {!formData.present && <Input type="number" name="endYear" label="End Year" value={formData.endYear} onChange={handleChange} />}
          <label className="flex items-center gap-2">
            <input type="checkbox" name="present" checked={formData.present} onChange={handleChange} className="h-5 w-5" />
            Present
          </label>
          <Input type="text" name="industry" label="Industry" value={formData.industry} onChange={handleChange} required />
          <Input type="text" name="github" label="GitHub/Portfolio (Optional)" value={formData.github} onChange={handleChange} />
          <Input type="text" name="linkedin" label="LinkedIn (Optional)" value={formData.linkedin} onChange={handleChange} />
          <Input type="text" name="projects" label="Projects (Optional)" value={formData.projects} onChange={handleChange} />
          <Input type="text" name="volunteer" label="Volunteer Work (Optional)" value={formData.volunteer} onChange={handleChange} />
          <button  type="submit" className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold mt-4 cursor-pointerb" disabled={loading}>
            {loading ? "Updating..." : "Update Application"}
          </button>
        </form>
    </div>
  );
}