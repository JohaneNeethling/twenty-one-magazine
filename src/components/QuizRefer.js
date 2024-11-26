import { Link } from "react-router-dom";

const QuizRefer = () => {
  return (
    // Section wrapper with background and font
    <section id="quizrefer" className="font-serif bg-softPink">
      <div className="max-w-screen-lg mx-auto pt-10 pb-20 px-6 sm:px-12 lg:px-20 ">
        {/* Title */}
        <p className="text-3xl text-center text-hotPink font-extrabold">
          In The Mood For Some Fun?
        </p>

        {/* Description paragraph */}
        <p className="text-lg mb-6 mt-4 text-center text-black font-bold">
          Take this fun and insightful quiz to discover your inner vibe! Are you
          the creative dreamer, the calm soul, the life of the party, the bold
          adventurer, or the goal-getter? Answer 20 questions about your likes,
          habits, and personality to reveal your unique style. Each result is
          crafted to inspire you, celebrate who you are, and give you advice
          tailored to your energy. Let’s dive in and see which persona fits you
          best!
        </p>

        {/* Link to quiz with a styled button */}
        <Link
          to={"/quiz"}
          className="block w-full sm:w-auto text-center bg-hotPink text-white py-3 px-6 rounded-lg text-lg font-semibold hover:from-pink-600 hover:to-pink-800 transform transition-all duration-300 ease-in-out"
        >
          {/* Icon for the button */}
          <span className="inline-block mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-6 h-6 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </span>
          Take The Quiz!
        </Link>
      </div>
    </section>
  );
};

export default QuizRefer;
