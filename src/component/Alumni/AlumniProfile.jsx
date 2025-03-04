export default function AlumniProfile() {
  const { userEmail } = useParams();
  const [alumniData, setAlumniData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAlumniData = async () => {
    if (!userEmail) return;

    setLoading(true);
    try {
      const docRef = doc(db, "alumni", userEmail);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setAlumniData(docSnap.data());
      } else {
        setAlumniData(null); 
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching alumni data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAlumniData();
  }, [userEmail]);

  if (loading) {
    return <p className="text-center text-gray-600 pt-25">Loading profile...</p>;
  }

  if (!alumniData) {
    return (
      <>
        <p className="text-center text-gray-600 pt-25">Profile not found.</p>
        <Link to="/application" className="text-gray-600 text-xl font-bold underline hover:text-gray-700">
          Complete your application
        </Link>
      </>
    );
  }

  const handleDelete = async (userId) => {
    setLoading(true);
    if (!userId) {
      console.error("User ID is undefined. Cannot delete profile.");
      return;
    }

    const proceed = window.confirm("Are you sure you want to delete your profile?");
    if (!proceed) return;

    try {
      const userRef = doc(db, "alumni", userId);
      await deleteDoc(userRef);

      alert("Profile deleted successfully!");

      fetchAlumniData();
    } catch (error) {
      alert("Error deleting profile. Please try again:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden mt-[100px]">
      <div className="relative h-40 bg-gradient-to-r from-red-500 to-red-700"></div>

      <div className="text-center p-6 -mt-16">
        <img className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-md" src={alumniData.profilePic || "/profile.jpg"} alt="Alumni Profile" />
        <h2 className="text-2xl font-semibold text-gray-800 mt-2">{alumniData.name}</h2>
        <p className="text-gray-600">Pasch Alumni - Class of {alumniData.gradYear}</p>
        <p className="text-gray-500">{alumniData.jobTitle} at {alumniData.company}</p>
        <p className="mt-3 text-gray-700">{alumniData.bio}</p>
      </div>

      <div className="flex justify-center gap-4 my-4">
        {alumniData.linkedin && (
          <Link href={alumniData.linkedin} className="text-blue-600 text-2xl" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </Link>
        )}
        {alumniData.github && (
          <Link href={alumniData.github} className="text-gray-900 text-2xl" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </Link>
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

      <div className="flex justify-end items-end p-2">
        <Link to={`/community/user/${userEmail}/editApplication/${userEmail}`} className="text-black mt-4 text-xl border-1 border-green-500 rounded-md p-1 hover:bg-green-500 hover:text-white">
          Edit
        </Link>
        <button onClick={() => handleDelete(userEmail)} disabled={loading} className="mt-4 text-red-500 text-xl border-1 border-red-500 rounded-md p-1 hover:bg-red-500 hover:text-white ml-2 cursor-pointer">
          {loading ? "Deleting..." : "Delete Account"}
        </button>
      </div>
    </div>
  );
}
