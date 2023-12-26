// QuranReadingPage.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../molecules/Navbar";

const QuranPage = () => {
  const [surat, setSurat] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSurat = async () => {
      try {
        const response = await fetch("http://localhost:3000/quran/list");
        const data = await response.json();
        setSurat(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Surahs:", error);
        setLoading(false);
      }
    };

    fetchSurat();
  }, []);

  return (
    <div className="min-h-screen overflow-y-scroll">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Surah List</h1>
        {loading ? (
          // Tailwind CSS animation for loading spinner
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50"></div>
          </div>
        ) : (
          // Render surah cards once data is fetched
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {surat.map((surat) => (
              <Link to={`/quran/surah/${surat.number}`} key={surat.number}>
                <div className="p-2 md:p-4 bg-white rounded shadow cursor-pointer">
                  <p className="text-lg font-bold mb-2">{surat.number}</p>
                  <p className="text-lg font-bold mb-2">{surat.name}</p>
                  <p className="text-sm">Surah Name: {surat.englishName}</p>
                  <p className="text-sm">
                    Number of Ayat: {surat.numberOfAyahs}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuranPage;
