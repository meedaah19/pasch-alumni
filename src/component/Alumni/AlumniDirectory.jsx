import { useState } from "react";

const alumniData = [
  { id: 1, name: "Alice Johnson", year: 2015, location: "New York", industry: "Tech" },
  { id: 2, name: "David Smith", year: 2018, location: "San Francisco", industry: "Finance" },
  { id: 3, name: "Emma Williams", year: 2010, location: "Chicago", industry: "Healthcare" },
  { id: 4, name: "John Doe", year: 2020, location: "Los Angeles", industry: "Tech" },
];

export default function AlumniDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const filteredAlumni = alumniData.filter((alumnus) => {
    return (
      alumnus.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedYear === "" || alumnus.year === Number(selectedYear)) &&
      (selectedLocation === "" || alumnus.location === selectedLocation) &&
      (selectedIndustry === "" || alumnus.industry === selectedIndustry)
    );
  });

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Alumni Directory</h2>

      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Search alumni..."
          className="border p-2 rounded w-full sm:w-auto"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <select className="border p-2 rounded" value={selectedYear} onChange={(event) => setSelectedYear(event.target.value)}>
          <option value="">Graduation Year</option>
          <option value="2010">2010</option>
          <option value="2015">2015</option>
          <option value="2018">2018</option>
          <option value="2020">2020</option>
        </select>

        <select className="border p-2 rounded" value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
          <option value="">Location</option>
          <option value="New York">New York</option>
          <option value="San Francisco">San Francisco</option>
          <option value="Chicago">Chicago</option>
          <option value="Los Angeles">Los Angeles</option>
        </select>

        <select className="border p-2 rounded" value={selectedIndustry} onChange={(e) => setSelectedIndustry(e.target.value)}>
          <option value="">Industry</option>
          <option value="Tech">Tech</option>
          <option value="Finance">Finance</option>
          <option value="Healthcare">Healthcare</option>
        </select>
      </div>

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
    </div>
  );
}