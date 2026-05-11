import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseCategory from "./pages/CourseCategory";
import CourseDetail from "./pages/CourseDetail";
import StudyIndia from "./pages/study-india/StudyIndia";
import StatePage from "./pages/study-india/StatePage";
import CityPage from "./pages/study-india/CityPage";
import StudyAbroad from "./pages/studyAbroad/StudyAbroad";
import CountryPage from "./pages/studyAbroad/CountryPage";

function App() {
  const location = useLocation(); 

  // ✅ FIX: scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:category" element={<CourseCategory />} />
        <Route path="/courses/:category/:course" element={<CourseDetail />} /> 
        <Route path="/study-india" element={<StudyIndia />} />
        <Route path="/study-india/:stateId" element={<StatePage />} /> 
        <Route path="/study-india/:stateId/:cityId" element={<CityPage />} /> 
        <Route path="/studyAbroad" element={<StudyAbroad />} />
        <Route path="/studyAbroad/:countryId" element={<CountryPage />} /> 
          
      </Routes>

      <Footer />
    </>
  );
}

export default App;