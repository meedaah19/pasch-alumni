import Input from "../component/util/Input";
import {useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db, auth} from "../firebase/firebase"; 
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";

export default function EditApplicationForm(){
    const [user] = useAuthState(auth);
    const userData = useLoaderData();
    const [formData, setFormData] = useState({
      ...userData, 
      skills: userData?.skills || [] 
    });
    const [loading, setLoading] = useState(false);
    const redirect = useNavigate();
    
    const handleImageUpload = async (file) => {
      if (!file) return;
  
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "profile-picture");
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dhkwvuzaz/image/upload",
          formData
        );
        return response.data.secure_url; 
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
        alert("Failed to upload image.");
        return null;
      }
    };
  
    const handleSkillAdd = (e) => {
      if (e.key === "Enter" && e.target.value.trim() !== "") {
        e.preventDefault(); 
        setFormData((prev) => ({
          ...prev,
          skills: [...prev.skills, e.target.value.trim()], 
        }));
        e.target.value = ""; 
      }
    };
    
    const handleSkillRemove = (index) => {
      setFormData((prev) => ({
        ...prev,
        skills: prev.skills.filter((_, i) => i !== index), // 
      }));
    };

    const handleChange = async (e) => {
      const { name, value, type, checked, files } = e.target;

      if (type === "file" && files[0]) {
        setLoading(true);
        const imageUrl = await handleImageUpload(files[0]);
        setLoading(false);
        if (imageUrl) {
          setFormData((prev) => ({ ...prev, image: imageUrl, imageFileName: files[0].name  }));
        }
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: type === "checkbox" ? checked : value,
        }));
      }
  }

      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!user || !user.email) {
          alert("You need to be logged in to update this job.");
          setLoading(false);
          return;
        }

        if (!userData || !userData.id) {
          alert("Error fetching user data. Please refresh and try again.");
          setLoading(false);
          return;
        }
    
        if (!user?.email ) {
          alert("You are not authorized to edit this job.");
          setLoading(false);
          return;
        }

        const sanitizeEmail = (email) => email.replace(/[@.#$/[\]]/g, "_");

    
          try {
            const userRef = doc(db, "alumni", userData.id);
    
            await updateDoc(userRef, formData);
            alert("Profile updated successfully!");
            redirect(`/community/user/${sanitizeEmail(user.email)}`); 
          } catch (error) {
            console.error("Error updating userData:", error);
            alert("Error updating userData. Please try again.");
          } finally {
            setLoading(false);
          }
      };
    

    return(
        <div className="bg-gray-100 min-h-screen p-10 pt-25 flex flex-col items-center">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-black mb-5">Alumni Application</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md" >
          <Input type="text" name="name" label="Full Name" value={formData.name} onChange={handleChange} required />
          <Input type="email" name="email" label="Email" value={formData.email} onChange={handleChange} required/>
          <Input type="tel" name="phone" label="Phone" value={formData.phone} onChange={handleChange} required />
          <p className="text-sm text-gray-500">Leave empty to keep your current profile picture.</p>
          <Input type="file" accept="image/*" name="image" label="Profile Image" onChange={handleChange}/>
          {formData.image && <img src={formData.image} alt="Profile picture" className="w-32 h-32 object-cover mt-2" />}
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
          <Input type="text" name="skills" label='Skills (Press Enter to add)' placeholder="Type a skill and press Enter"className="border rounded p-2 w-full mt-1" onKeyDown={handleSkillAdd} />
          <div className="flex flex-wrap gap-2 mt-2">
          {formData.skills.map((skill, index) => (
             <span 
             key={index} 
             className="bg-red-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
           >
             {skill}
             <button 
               type="button" 
               className="text-white font-bold hover:text-gray-300" 
               onClick={() => handleSkillRemove(index)}
             >
               ✕
             </button>
           </span>
          ))}
          </div>

          <button  type="submit" className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold mt-4 cursor-pointerb" disabled={loading}>
            {loading ? "Updating..." : "Update Application"}
          </button>
        </form>
    </div>
  );
}