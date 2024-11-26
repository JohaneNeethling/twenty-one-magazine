import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import QuestionForm from "../components/QuestionForm";
import MagazineDownload from "../components/MagazineDownload";
import AnimatedSection from "../components/AnimatedSection";
import FeatureSection from "../components/FeatureSection";
import QuizSection from "../components/QuizSection";

// Home component represents the main structure of the page
const Home = () => {
  return (
    <>
      {/* Header section, typically for site navigation and branding */}
      <Header />

      {/* Hero section: The introductory section of the website, can include images, text, or calls to action */}
      <HeroSection />

      {/* AnimatedSection wrapper to apply animations to the enclosed components */}
      <AnimatedSection>
        {/* FeatureSection could showcase key features of the site or product */}
        <FeatureSection />
      </AnimatedSection>

      {/* QuestionForm section where users can interact by asking questions or submitting forms */}
      <AnimatedSection>
        <QuestionForm />
      </AnimatedSection>

      {/* QuizSection, where interactive quizzes can be displayed */}
      <AnimatedSection>
        <QuizSection />
      </AnimatedSection>

      {/* MagazineDownload section, where users can download a magazine or PDF */}
      <AnimatedSection>
        <MagazineDownload />
      </AnimatedSection>
    </>
  );
};

export default Home;
