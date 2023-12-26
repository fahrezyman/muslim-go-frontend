import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import SignUpPage from "./components/pages/SignUpPage";
import SignInPage from "./components/pages/SignInPage";
import QuranReadingPage from "./components/pages/QuranPage";
import SurahReaderPage from "./components/pages/SurahReaderPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/quran" element={<QuranReadingPage />} />
        <Route path="/quran/surah/:surahNumber" element={<SurahReaderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
