import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseCategory from "./pages/CourseCategory";
import CourseDetail from "./pages/CourseDetail";

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
      </Routes>

      <Footer />
    </>
  );
}

export default App;