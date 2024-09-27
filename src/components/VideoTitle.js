import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="py-6 text-sm w-1/4">{overview}</p>

      <div className="">
        <button className="bg-white text-black p-2 px-10 text-md rounded-md hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-500 text-white p-2 px-6 mx-2 text-md bg-opacity-50 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
