import React from "react";
import trustsectionImg from "../assets/trustsection.png";

function TrustSection() {
  return (
    <section className="flex flex-col justify-center items-center px-96 py-20 bg-[#400061] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col px-4 w-full max-w-[1140px] max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
          <div className="flex flex-col self-stretch my-auto min-h-[500px] min-w-[240px] w-[400px]">
            <img
              loading="lazy"
              src={trustsectionImg}
              alt="Trust illustration"
              className="object-contain w-full aspect-[0.8]"
            />
          </div>
          <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <TrustFeature
                title="Authentic Profiles"
                description="Every guest profile is meticulously verified through multiple checks, including OTP confirmation, ID uploads, selfie verification, and phone calls to ensure authenticity."
              />
              <TrustFeature
                title="Dynamic and Enjoyable Gatherings"
                description="To maintain an engaging and inclusive environment, each party mandates a minimum of 7 attendees and a balanced 60:40 gender ratio. Guests will be informed 2 hours prior if these conditions aren't met."
              />
              <TrustFeature
                title="Genuine Feedback for Enhanced Experiences"
                description="Help others by rating hosts and guests after the party. Share insights on the atmosphere and entertainment, and read authentic reviews to know what to expect for a memorable experience."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustFeature({ icon, title, description }) {
  return (
    <div className="flex flex-wrap gap-8 mt-16 w-full text-neutral-700 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col grow shrink min-w-[240px] w-[536px] max-md:max-w-full">
        <h3 className="w-full text-2xl font-medium leading-tight text-white max-md:max-w-full">
          {title}
        </h3>
        <p className="pb-px mt-2 w-full text-base leading-5 text-stone-500 max-md:max-w-full">
          {description}
        </p>
      </div>
    </div>
  );
}

export default TrustSection;
