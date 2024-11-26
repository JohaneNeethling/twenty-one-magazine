import React from "react";
import JadeFounder from "../media/Jade3.png";
import AnimatedSection from "../components/AnimatedSection";

const About = () => {
  return (
    <>
      <main className="bg-white p-5 md:p-8 lg:p-11">
        {" "}
        {/* Adjusted padding for better mobile responsiveness */}
        <AnimatedSection>
          <section className="p-6 md:p-8 lg:p-10 bg-white">
            {" "}
            {/* Padding increases with screen size */}
            <h2 className="text-2xl md:text-3xl text-center text-hotPink font-extrabold">
              {" "}
              {/* Adjusted font size for smaller screens */}
              Meet the Founder
            </h2>
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <img
                src={JadeFounder}
                alt="Founder"
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full shadow-md border-8 border-hotPink"
              />
              <div className="text-center lg:text-left">
                {/* Text alignment changes for mobile and larger screens */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-hotPink">
                  Your Big Sister
                </h3>
                <p className="text-sm sm:text-md lg:text-lg leading-relaxed font-serif font-bold mt-4">
                  {/* Adjusted font size for different screen sizes */}
                  Hi there, I'm Jade Eilers, and I’m so glad you’re here! As
                  your Big Sister, my goal is to offer you a safe space filled
                  with advice, encouragement, and real talk. Growing up, I
                  remember wishing for someone to guide me through life’s twists
                  and turns—someone who could listen without judgment and offer
                  honest, heartfelt wisdom. That’s exactly what I hope to be for
                  you. Whether you’re facing a tough decision, seeking
                  motivation, or just need a little reassurance, I’m here to
                  share my experiences, lessons, and everything I’ve learned
                  along the way. Think of me as your trusted friend, always
                  ready to lend a hand, offer a smile, and remind you of the
                  incredible strength inside of you. You’re not alone, and I’m
                  so excited to be part of your journey.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
    </>
  );
};

export default About;
