import React from "react";
import img from "../assets/image.png";

// Array of playbook items with corresponding content
const playbookItems = [
  {
    question: "How do I attend a House Party?",
    answer:
      "To attend a House Party, simply sign up on our platform, find a party that interests you, and send a request to the host. If approved, you'll receive all the details to join the event.",
  },
  {
    question: "Why should I pay first?",
    answer:
      "Paying upfront ensures your spot is reserved and helps the host prepare accordingly. It also guarantees a commitment from attendees and ensures a smooth experience for all.",
  },
  {
    question: "How will I know if my request is approved or disapproved?",
    answer:
      "You will receive an email notification once the host has reviewed your request. You can also check the status of your requests on your account dashboard.",
  },
  {
    question: "On what basis are guests approved?",
    answer:
      "Hosts approve guests based on factors like shared interests, mutual connections, and ensuring a good mix of attendees. Some parties may also have specific criteria for attendees.",
  },
  {
    question: "On what basis are guests disapproved?",
    answer:
      "Guests may be disapproved if they do not meet the host's criteria, if the event is full, or if there are concerns about compatibility with the event's theme and other attendees.",
  },
];

function PlaybookSection() {
  return (
    <section className="flex flex-col items-center bg-[#400061] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col px-4 w-full max-w-[1140px] max-md:max-w-full">
        <div className="flex flex-wrap gap-10 py-20 w-full max-md:py-10 max-md:flex-col">
          {/* Left Column: Image */}
          <div className="flex flex-col max-w-[450px] min-w-[320px] w-[450px] max-md:max-w-full">
            <div className="flex flex-col justify-center items-start mt-12 w-full max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src={img}
                alt="Playace Playbook"
                className="object-contain max-w-full aspect-[0.92] w-[420px] max-md:w-full"
              />
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="flex flex-col flex-1 shrink pt-12 basis-0 min-w-[240px] max-md:pt-0 max-md:max-w-full">
            {playbookItems.map((item, index) => (
              <details
                key={index}
                className="flex flex-col pb-12 mt-12 w-full border-b border-solid border-b-zinc-700 border-b-opacity-30 max-md:mt-10 max-md:max-w-full"
              >
                <summary className="flex justify-between items-center cursor-pointer w-full max-md:max-w-full">
                  <h3 className="text-2xl text-white uppercase pb-2 max-md:text-xl max-md:max-w-full">
                    {item.question}
                  </h3>
                  <div className="flex items-center justify-center pb-3.5 w-6">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a1bf297ad0ba6770d7214c084998c2dff8eff209ed30afce79f84bd1dcb5f8a?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808"
                      alt="Expand/Collapse"
                      className="object-contain w-6 aspect-square"
                    />
                  </div>
                </summary>
                {/* Accordion Content */}
                <div className="text-white text-base leading-7 mt-2 pl-6 max-md:pl-0">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlaybookSection;
