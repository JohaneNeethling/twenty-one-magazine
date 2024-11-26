import React, { useState } from "react";

const Quiz = () => {
  // Define the quiz questions and options
  const questions = [
    // Define each question and its corresponding options (same structure for all questions)
    {
      question: "How do you spend your free time?",
      options: [
        { label: "Painting or crafting", value: "creative" },
        { label: "Reading or meditating", value: "calm" },
        { label: "Hanging out with friends", value: "social" },
        { label: "Planning my next trip", value: "adventurous" },
        { label: "Working on a side hustle", value: "goalOriented" },
      ],
    },
    {
      question: "What’s your dream vacation?",
      options: [
        { label: "Exploring art galleries in Paris", value: "creative" },
        { label: "A quiet retreat in the mountains", value: "calm" },
        { label: "A group trip with my besties", value: "social" },
        { label: "Backpacking across Asia", value: "adventurous" },
        {
          label: "A luxury resort with work-friendly spaces",
          value: "goalOriented",
        },
      ],
    },
    {
      question: "What motivates you the most?",
      options: [
        { label: "Making beautiful things", value: "creative" },
        { label: "Finding inner peace", value: "calm" },
        { label: "Creating connections", value: "social" },
        { label: "Exploring the unknown", value: "adventurous" },
        { label: "Achieving my goals", value: "goalOriented" },
      ],
    },
    {
      question: "Which hobby sounds the most exciting?",
      options: [
        { label: "Photography or drawing", value: "creative" },
        { label: "Yoga or journaling", value: "calm" },
        { label: "Hosting a party", value: "social" },
        { label: "Skydiving or zip-lining", value: "adventurous" },
        { label: "Taking a business course", value: "goalOriented" },
      ],
    },
    {
      question: "How do you approach problems?",
      options: [
        { label: "By brainstorming creative solutions", value: "creative" },
        { label: "By staying calm and analyzing the situation", value: "calm" },
        { label: "By asking friends for advice", value: "social" },
        { label: "By diving right in and experimenting", value: "adventurous" },
        { label: "By setting a clear plan of action", value: "goalOriented" },
      ],
    },
    {
      question: "What’s your ideal weekend activity?",
      options: [
        { label: "Starting a DIY project", value: "creative" },
        { label: "Relaxing at home with a book", value: "calm" },
        { label: "Going out for brunch with friends", value: "social" },
        { label: "Trying a new outdoor sport", value: "adventurous" },
        { label: "Working on personal goals", value: "goalOriented" },
      ],
    },
    {
      question: "What’s your favorite type of movie?",
      options: [
        { label: "Independent or artsy films", value: "creative" },
        { label: "Documentaries or nature films", value: "calm" },
        { label: "Romantic comedies", value: "social" },
        { label: "Action-adventure", value: "adventurous" },
        { label: "Biopics or inspirational dramas", value: "goalOriented" },
      ],
    },
    {
      question: "If you could master one skill, what would it be?",
      options: [
        { label: "Painting or playing an instrument", value: "creative" },
        { label: "Meditation or stress management", value: "calm" },
        { label: "Networking or public speaking", value: "social" },
        { label: "Climbing or extreme sports", value: "adventurous" },
        { label: "Leadership or time management", value: "goalOriented" },
      ],
    },
    {
      question: "How do you handle stressful situations?",
      options: [
        { label: "By expressing myself creatively", value: "creative" },
        { label: "By taking a deep breath and staying calm", value: "calm" },
        { label: "By talking it out with someone", value: "social" },
        { label: "By distracting myself with adventure", value: "adventurous" },
        { label: "By making a to-do list to tackle it", value: "goalOriented" },
      ],
    },
    {
      question: "What type of books do you love?",
      options: [
        { label: "Poetry or art books", value: "creative" },
        { label: "Self-help or mindfulness guides", value: "calm" },
        { label: "Romance or friendship stories", value: "social" },
        { label: "Travel or adventure tales", value: "adventurous" },
        { label: "Business or motivational books", value: "goalOriented" },
      ],
    },
    {
      question: "What’s your favorite color palette?",
      options: [
        { label: "Bright and bold", value: "creative" },
        { label: "Soft and muted", value: "calm" },
        { label: "Fun and pastel", value: "social" },
        { label: "Earthy tones", value: "adventurous" },
        { label: "Classic and neutral", value: "goalOriented" },
      ],
    },
    {
      question: "What type of music do you love the most?",
      options: [
        { label: "Indie or alternative", value: "creative" },
        { label: "Instrumental or acoustic", value: "calm" },
        { label: "Pop or dance hits", value: "social" },
        { label: "Rock or world music", value: "adventurous" },
        { label: "Classical or motivational", value: "goalOriented" },
      ],
    },
    {
      question: "What would your dream job involve?",
      options: [
        { label: "Being an artist or designer", value: "creative" },
        { label: "Helping people as a therapist", value: "calm" },
        { label: "Connecting with people", value: "social" },
        { label: "Exploring as a travel blogger", value: "adventurous" },
        { label: "Running my own business", value: "goalOriented" },
      ],
    },
    {
      question: "How do you like to celebrate milestones?",
      options: [
        { label: "With something handmade", value: "creative" },
        { label: "Quiet reflection", value: "calm" },
        { label: "A party with friends", value: "social" },
        { label: "A thrilling activity", value: "adventurous" },
        { label: "Setting my next goal", value: "goalOriented" },
      ],
    },
    {
      question: "What’s your favorite type of weather?",
      options: [
        { label: "Cloudy and moody", value: "creative" },
        { label: "Warm and sunny", value: "calm" },
        { label: "Clear and perfect for a picnic", value: "social" },
        { label: "Chilly and brisk", value: "adventurous" },
        { label: "Any weather where I’m productive", value: "goalOriented" },
      ],
    },
    {
      question: "If you had a free day, what would you do?",
      options: [
        { label: "Create something new", value: "creative" },
        { label: "Relax and recharge", value: "calm" },
        { label: "Plan a get-together", value: "social" },
        { label: "Explore a new place", value: "adventurous" },
        { label: "Knock out tasks on my to-do list", value: "goalOriented" },
      ],
    },
    {
      question: "Which pet would you prefer?",
      options: [
        { label: "A quirky bird", value: "creative" },
        { label: "A calm fish", value: "calm" },
        { label: "A playful dog", value: "social" },
        { label: "An adventurous cat", value: "adventurous" },
        { label: "No pet—I’m focused on my goals!", value: "goalOriented" },
      ],
    },
    {
      question: "What’s your go-to comfort food?",
      options: [
        { label: "Something homemade and unique", value: "creative" },
        { label: "Soothing soup or tea", value: "calm" },
        { label: "Pizza or burgers with friends", value: "social" },
        { label: "Something exotic and spicy", value: "adventurous" },
        { label: "Healthy snacks for energy", value: "goalOriented" },
      ],
    },
  ];

  // State for answers, error handling, and the result
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState(""); // Error message state
  const [result, setResult] = useState(""); // Final result state

  // Handle user selection of answers for each question
  const handleChange = (questionIndex, value) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: value }));
    setError(""); // Reset error when a new answer is selected
  };

  // Handle form submission after answering all questions
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all questions are answered
    if (Object.keys(answers).length < questions.length) {
      setError("Please answer all questions before submitting!"); // Set error message if not all questions are answered
      return;
    }

    // Tally the answers to determine the most common category
    const outcomes = Object.values(answers).reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1; // Increment count for each answer category
      return acc;
    }, {});

    // Determine the outcome category with the highest count
    const predictedOutcome = Object.keys(outcomes).reduce((a, b) =>
      outcomes[a] > outcomes[b] ? a : b
    );

    // Set the result message based on the most selected outcome
    switch (predictedOutcome) {
      case "creative":
        setResult(
          "You're a Creative Soul! 🎨 You thrive on imagination, and you love expressing yourself in unique ways."
        );
        break;
      case "calm":
        setResult(
          "You're a Chill Queen! 🧘‍♀️ You have a peaceful aura, and you're the go-to person for calm and balance."
        );
        break;
      case "social":
        setResult(
          "You're a Social Butterfly! 🦋 You light up any room and love connecting with others."
        );
        break;
      case "adventurous":
        setResult(
          "You're an Adventurer! 🧭 You crave excitement and new experiences, always chasing the next thrill."
        );
        break;
      case "goalOriented":
        setResult(
          "You're a Go-Getter! 🚀 You're focused, ambitious, and always striving to achieve your dreams."
        );
        break;
      default:
        setResult("You're wonderfully unique, and that's your superpower! 🌟");
    }
  };

  return (
    <section className="p-4 sm:p-8 bg-gradient-to-r from-pink-100 to-pink-300 font-serif">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-hotPink mb-4">
        Discover Your Vibe! 💕
      </h2>
      <p className="text-base sm:text-lg text-black mb-6 font-bold">
        Take this fun and insightful quiz to discover your inner vibe! Are you
        the creative dreamer, the calm soul, the life of the party, the bold
        adventurer, or the goal-getter? Answer 20 questions about your likes,
        habits, and personality to reveal your unique style. Each result is
        crafted to inspire you, celebrate who you are, and give you advice
        tailored to your energy. Let’s dive in and see which persona fits you
        best!
      </p>

      {/* Form to display quiz questions */}
      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
        {questions.map((q, index) => (
          <div key={index}>
            {/* Display the question */}
            <h3 className="text-base sm:text-lg font-bold text-hotPink">
              {q.question}
            </h3>
            <div className="mt-4 space-y-2">
              {/* Map through options and display radio buttons */}
              {q.options.map((option, optIndex) => (
                <label key={optIndex} className="block">
                  <input
                    type="radio"
                    name={`question-${index}`} // Unique name for each question
                    value={option.value}
                    onChange={() => handleChange(index, option.value)} // Handle answer selection
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        ))}

        {/* Display error message if not all questions are answered */}
        {error && (
          <div className="text-red-500 text-sm">
            <strong>{error}</strong>
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-hotPink text-white font-bold rounded-lg hover:bg-pink-500 transition"
        >
          Submit
        </button>
      </form>

      {/* Display the result after submission */}
      {result && (
        <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold text-hotPink">Your Result:</h3>
          <p className="text-gray-800 mt-2">{result}</p>
        </div>
      )}
    </section>
  );
};

export default Quiz;
