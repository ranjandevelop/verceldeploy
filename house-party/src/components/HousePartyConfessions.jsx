import React from "react";

const confessionVideos = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/dbb30f13e1af7e4a6becfd9ba0ad2fddff2494a3663f298783f00530aa6641e1?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/a6456d3eb17758a758069462a98d1c5001bef2a131fd810489f38e677c4399eb?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/43e4e7b21e6cb29bd261eb55beba3ffcc716c9bc5fea5920540369388992b2ca?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/f8053f2bb1411b0094d4808de4004adba73e11b8369229ffbe0aad83599d39f9?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808",
];

function HousePartyConfessions() {
  return (
    <section className="flex flex-col py-20 bg-[#400061] max-md:max-w-full">
      <h2 className="flex flex-col self-center px-4 max-w-full text-3xl leading-9 text-center text-white uppercase w-[1140px]">
        <span className="px-72 w-full max-md:px-5 max-md:max-w-full">
          House Party Confessions:
        </span>
        <span className="px-96 mt-2 w-full max-md:px-5 max-md:max-w-full">
          Watch Now!
        </span>
      </h2>
      <div className="flex flex-col mt-20 w-full bg-[linear-gradient(177deg,rgba(19,20,23,0.00_7.99%,#121417_68.03%))] max-md:mt-10 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col items-center w-full max-md:max-w-full">
          <div className="flex w-full px-[100px] max-md:px-5">
            {confessionVideos.map((video, index) => (
              <div
                key={index}
                className="flex flex-col grow shrink w-96 min-h-[1px] min-w-[240px] max-md:max-w-full"
              >
                <img
                  loading="lazy"
                  src={video}
                  alt={`House Party Confession ${index + 1}`}
                  className="object-contain w-full aspect-[0.67] max-md:max-w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HousePartyConfessions;
