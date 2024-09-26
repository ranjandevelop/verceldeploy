import React from "react";
import { Link } from "react-router-dom";

function HostEarnSection() {
  return (
    <section className="flex flex-col text-sm text-white bg-[#400061] w-full">
      <div className="flex flex-col justify-center items-center py-10 px-4 w-full">
        <div className="flex flex-col w-full max-w-[1140px]">
          <div className="flex flex-col md:flex-row justify-between items-center p-6 w-full rounded-xl bg-neutral-700">
            {/* Text Section */}
            <p className="text-center md:text-left leading-7 uppercase text-base md:text-lg min-w-[240px] max-md:mb-4">
              Why just attend? Host regularly and earn up to ₹40,000!
            </p>

            {/* Button Section */}
            <Link to="/event-request">
              <button className="px-4 py-3 text-sm bg-rose-600 text-white rounded-xl border border-rose-600 transition hover:bg-rose-700 min-h-[48px] w-full md:w-auto">
                Let's Host A Party
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HostEarnSection;
