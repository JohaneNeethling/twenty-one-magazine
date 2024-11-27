import React, { useState, useRef } from "react";
import Jade2 from "../media/Jade2.jpg";
import BGMag2 from "../media/BGMag2.png";

const FollowAlong = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const videoPlayerRef = useRef(null); // Reference to the video player section

  // Define the videos with corresponding titles and TikTok embed URLs
  const videos = [
    {
      title: "Get Over Toxic Friendships & Relationships",
      videoUrl: "https://www.tiktok.com/embed/7441357100896292152", // TikTok embed URL
      thumbnail: Jade2, // Placeholder image URL
    },
    {
      title: "Life Advice & Tips",
      videoUrl: "https://www.tiktok.com/embed/7437158836269600055", // TikTok embed URL
      thumbnail: Jade2, // Placeholder image URL
    },
    {
      title: "Fun & Chill Vibes",
      videoUrl: "https://www.tiktok.com/embed/7425638727629769989", // TikTok embed URL
      thumbnail: Jade2, // Placeholder image URL
    },
    {
      title: "Deep & Heartfelt Chats",
      videoUrl: "https://www.tiktok.com/embed/7425620078328122629", // TikTok embed URL
      thumbnail: Jade2, // Placeholder image URL
    },
    {
      title: "Relatable Content",
      videoUrl: "https://www.tiktok.com/embed/7440557183546215735", // TikTok embed URL
      thumbnail: Jade2, // Placeholder image URL
    },
  ];

  const handleVideoClick = (videoUrl) => {
    if (activeVideo === videoUrl) {
      setActiveVideo(null);
    } else {
      setActiveVideo(videoUrl);
      // Scroll to the video player when a video link is clicked
      videoPlayerRef.current.scrollIntoView({
        behavior: "smooth", // Smooth scroll
        block: "start", // Align to the top of the container
      });
    }
  };

  return (
    <section
      id="follow-along"
      className="py-16 w-auto font-serif"
      style={{
        backgroundImage: `url(${BGMag2})`,
        backgroundSize: "cover", // Make the background cover the entire section
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Ensure it doesn't repeat
      }}
    >
      <div className="max-w-7xl mx-auto mt-8 p-8 bg-transparent">
        <p className="text-xl text-center bg-white text-hotPink font-extrabold mb-10 p-5 rounded-lg shadow-lg">
          <p className="text-5xl text-center text-hotPink font-extrabold pb-6">
            PREVIEW MY TIKTOK
          </p>
          Are you ready for even more fun, inspiration, and all the real talk
          you’ve been craving? Join me over on TikTok, where we dive into
          everything from life tips and style hacks to the behind-the-scenes
          moments that make life extra special. Just click a topic down below to
          see a little preview of what you're missing out on. Whether you're
          looking for some positive vibes, quick advice, or just a little laugh,
          my TikTok is the place to be. Let’s make this journey together—hit
          that follow button, and I’ll see you there!
        </p>

        {/* Display the video player or placeholder image */}
        <div className="relative mb-8" ref={videoPlayerRef}>
          {" "}
          {/* Reference to the video player section */}
          {activeVideo ? (
            <div className="relative pb-96 pt-96">
              <iframe
                key={activeVideo} // Add the key here to force re-render of iframe
                src={`${activeVideo}?playsinline=1&autoplay=1&hide_related=1`} // Embed with autoplay enabled (no mute)
                width="100%" // Make the iframe take full width of its container
                height="100%" // Make the iframe fill the container height
                frameBorder="0"
                allow="autoplay; encrypted-media; fullscreen" // Add fullscreen permission
                title="TikTok Video"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px", // Optional: For rounded corners
                  backgroundColor: "transparent", // Ensure the background is transparent
                  border: "none", // Remove border if any
                }}
              />
            </div>
          ) : (
            <img
              src={videos[0]?.thumbnail}
              alt="Thumbnail"
              className="w-full sm:w-96 h-auto cursor-pointer mx-auto border-8 border-white"
              onClick={() => handleVideoClick(videos[0].videoUrl)}
            />
          )}
        </div>

        <div className="mt-28">
          <ul className="space-y-4 text-hotPink font-extrabold font-serif text-2xl text-center">
            {videos.map((video, index) => (
              <li
                key={index}
                onClick={() => handleVideoClick(video.videoUrl)} // Play the clicked video
                className={`p-4 rounded-lg cursor-pointer ${
                  activeVideo === video.videoUrl
                    ? "bg-hotPink text-white"
                    : "bg-gray-200"
                }`}
              >
                <span className="font-semibold">{video.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-full mx-auto mt-40 mb-20 bg-white p-8 rounded-lg shadow-lg">
          <p className="text-3xl text-center text-hotPink font-extrabold">
            Ask Your Big Sister!
          </p>
          <p className="text-lg mb-6 mt-4 text-center text-black font-bold">
            Have a burning question for our Big Sister? Drop it in the form
            below and get some awesome advice straight from my TikTok! Want a
            shoutout? Just say the word! But hey, if you’re feeling a bit shy,
            you can totally submit anonymously too—no pressure!
          </p>

          {/* Google Form link */}
          <a
            href="https://forms.gle/55Uccz8YuXyp3x4A7"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-hotPink text-white py-3 px-6 rounded-lg text-lg font-semibold hover:from-pink-600 hover:to-pink-800 transform transition-all duration-300 ease-in-out"
          >
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
            Go to the Form
          </a>
        </div>
      </div>
    </section>
  );
};

export default FollowAlong;
