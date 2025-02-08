import { useState, useEffect } from "react";
import { db } from "../../firebase/firebase"; // Import Firestore
import { collection, getDocs } from "firebase/firestore";

export default function AlumniDirectory() {
  const [alumni, setAlumni] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAlumni() {
      try {
        const alumniCollection = collection(db, "alumni");
        const alumniSnapshot = await getDocs(alumniCollection);
        const alumniList = alumniSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAlumni(alumniList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching alumni:", error);
        setLoading(false);
      }
    }

    fetchAlumni();
  }, []);

  // Filtered Alumni List
  const filteredAlumni = alumni.filter((alumnus) => {
    return (
      alumnus.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedYear === "" || alumnus.year === Number(selectedYear)) &&
      (selectedLocation === "" || alumnus.location.toLowerCase() === selectedLocation.toLowerCase()) &&
      (selectedIndustry === "" || alumnus.industry.toLowerCase() === selectedIndustry.toLowerCase())
    );
  });

  return (
    <div className="max-w-4xl mx-auto p-4 pt-25">
      <h2 className="text-2xl font-bold mb-4">Alumni Directory</h2>

      {/* Search & Filter Section */}
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Search alumni..."
          className="border p-2 rounded w-full sm:w-auto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Graduation Year - Can Type or Select */}
        <input
          type="text"
          placeholder="Graduation Year"
          className="border p-2 rounded"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        />

        {/* Location - Can Type or Select */}
        <input
          type="text"
          placeholder="Location"
          className="border p-2 rounded"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        />

        {/* Industry - Can Type or Select */}
        <input
          type="text"
          placeholder="Industry"
          className="border p-2 rounded"
          value={selectedIndustry}
          onChange={(e) => setSelectedIndustry(e.target.value)}
        />
      </div>

      {/* Alumni List */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid gap-4">
          {filteredAlumni.length > 0 ? (
            filteredAlumni.map((alumnus) => (
              <div key={alumnus.id} className="border p-4 rounded shadow">
                <h3 className="text-lg font-semibold">{alumnus.name}</h3>
                <p>🎓 {alumnus.year} | 📍 {alumnus.location} | 🏢 {alumnus.industry}</p>
              </div>
            ))
          ) : (
            <p>No alumni found.</p>
          )}
        </div>
      )}
    </div>
  );
}
