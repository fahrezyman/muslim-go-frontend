import { useState, useEffect } from "react";
import Navbar from "../molecules/Navbar";

const QuranReadingPage = () => {
  const [surahs, setSurahs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await fetch("http://localhost:3000/quran/list");
        const data = await response.json();
        console.log("Data from the API:", data);
        setSurahs(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching Surahs:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchSurahs();
  }, []);

  return (
    <div className="min-h-screen overflow-y-scroll">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Surah List</h1>
        {loading ? (
          <div className="flex items-center justify-center">
            {/* You can replace this with your preferred loading spinner or animation */}
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {surahs.map((surah) => (
              <div
                key={surah.number}
                className="p-2 md:p-4 bg-white rounded shadow cursor-pointer"
              >
                <p className="text-lg font-bold mb-2">{surah.number}</p>
                <p className="text-lg font-bold mb-2">{surah.name}</p>
                <p className="text-sm">Surah Name: {surah.englishName}</p>
                <p className="text-sm">Number of Ayat: {surah.numberOfAyahs}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuranReadingPage;
