import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MagazineSection from "./components/MagazineSection";
import Footer from "./components/Footer";
import FollowAlong from "./components/FollowAlong";
import WhatToExpect from "./components/WhatToExpect";
import About from "./pages/About";
import QuizRefer from "./components/QuizRefer";
import Quiz from "./pages/Quiz";

const App = () => {
  return (
    <Router>
      <div className="font-sans bg-gray-100">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <WhatToExpect />
                <FollowAlong />
                <MagazineSection />
                <QuizRefer />
                <About />
              </>
            }
          />{" "}
          <Route
            path="/magazines"
            element={
              <>
                <WhatToExpect />
                <MagazineSection />
              </>
            }
          />
          <Route
            path="/ask"
            element={
              <>
                <FollowAlong />
              </>
            }
          />
          <Route
            path="/meetme"
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            path="/quiz"
            element={
              <>
                <Quiz />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
