import React, { useState } from "react";
import LocationImg from "../assets/placeholder.png";
import ClockImg from "../assets/clock.png";

function PartyCard({
  username,
  title,
  date,
  price,
  location,
  caption,
  imageUrl,
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"));
  const sendMail = () => {
    console.log("sendMail to", localStorage.getItem("user"));
  };
  console.log(date);
  console.log(imageUrl);

  const timestamp = date;
  const dateN = new Date(timestamp).toLocaleDateString("en-GB"); // 'en-GB' for DD/MM/YYYY format
  console.log(date);
  return (
    <>
      <article className="my-4 cursor-pointer transition-transform transform hover:scale-105">
        <div className="flex flex-col rounded-lg shadow-lg border border-gray-200 w-full max-w-[440px] p-4 bg-white bg-opacity-10 backdrop-blur-lg backdrop-saturate-150 border border-white/30 hover:shadow-xl transition-shadow duration-300">
          {/* Image Section */}
          <div className="relative flex justify-center w-full h-[240px] rounded-xl overflow-hidden">
            <img
              loading="lazy"
              src={`http://localhost:3001${imageUrl}`}
              alt={title}
              className="w-full h-full object-cover transition-transform transform hover:scale-110"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col mt-4 space-y-3 text-white">
            {/* Title */}
            <h3 className="text-lg font-semibold capitalize">{title}</h3>

            {/* Date & Location Section */}
            <div className="flex flex-wrap gap-4 items-center text-sm">
              {/* Date */}
              <div className="flex items-center gap-2">
                <img
                  loading="lazy"
                  src={ClockImg} // Replace with actual date icon
                  alt="Date Icon"
                  className="w-5 h-5 object-contain"
                />
                <time>{dateN}</time>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2">
                <img
                  loading="lazy"
                  src={LocationImg} // Replace with actual location icon
                  alt="Location Icon"
                  className="w-5 h-5 object-contain"
                />
                <address className="not-italic">{location}</address>
              </div>
            </div>

            {/* Hosted by and Price */}
            <div className="mt-2 flex justify-between items-center">
              <p className="text-sm text-neutral-300">Hosted by {username}</p>
              <p className="font-medium text-lg">{price}</p>
            </div>

            {/* Button */}
            <div className="mt-4">
              <button
                onClick={sendMail}
                className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Slot
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default PartyCard;
