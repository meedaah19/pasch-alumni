import { useState } from "react";
import { db } from "../../firebase/firebase";
import { collection, addDoc } from "../../firebase/firebase";
import Input from "../util/Input";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
    degree: "",
    major: "",
    gradYear: "",
    jobTitle: "",
    company: "",
    startYear: "",
    endYear: "",
    present: false,
    description: "",
    industry: "",
    github: "",
    linkedin: "",
    projects: "",
    volunteer: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "alumni"), formData);
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
    setLoading(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-10 pt-25 flex flex-col items-center">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-black mb-5">Alumni Application</h1>
      {submitted ? (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-3">Application Submitted!</h2>
          <p className="text-xl text-black">Your application has been received. We will notify you via email.</p>
        </div>
      ) : (
        <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
          <Input type="text" name="name" label="Full Name" value={formData.name} onChange={handleChange} required />
          <Input type="email" name="email" label="Email" value={formData.email} onChange={handleChange} required />
          <Input type="tel" name="phone" label="Phone" value={formData.phone} onChange={handleChange} required />
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
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold mt-4" disabled={loading}>
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      )}
    </div>
  );
}