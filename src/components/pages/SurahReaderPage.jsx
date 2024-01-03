// SurahReaderPage.jsx
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../molecules/Navbar";
import PlayButton from "../molecules/PlayButton";

const SurahReaderPage = () => {
  const { surahNumber } = useParams();
  const [surah, setSurah] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/quran/surah/${surahNumber}`
        );
        const data = await response.json();
        setSurah(data);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching Surah ${surahNumber}:`, error);
        setLoading(false);
      }
    };

    fetchSurah();
  }, [surahNumber]);

  return (
    <div className="min-h-screen overflow-y-scroll">
      <Navbar />
      <div className="p-8">
        <Link to="/quran">
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold mb-5 py-2 px-4 rounded">
            Back to Surah List
          </button>
        </Link>
        <h1 className="text-3xl font-bold mb-4">{`Surah ${surahNumber} - ${surah.name} - ${surah.englishName}`}</h1>
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50"></div>
          </div>
        ) : (
          <div>
            {/* Render ayahs as cards */}
            {surah.ayahs.map((ayah) => (
              <div
                key={ayah.numberInSurah}
                className="p-4 bg-white rounded shadow mb-4"
              >
                <p
                  className="text-lg font-thin mb-2"
                  style={{ direction: "rtl", textAlign: "right" }}
                >
                  Ayah {ayah.numberInSurah}{" "}
                </p>{" "}
                <p
                  className="text-4xl font-medium mb-3 "
                  style={{ direction: "rtl", textAlign: "right" }}
                >
                  {ayah.text}
                </p>
                <p className="text-lg font-thin mb-2">
                  Translation: {ayah.translation}
                </p>
                <PlayButton audioUrl={ayah.audio} loading={loading} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SurahReaderPage;
