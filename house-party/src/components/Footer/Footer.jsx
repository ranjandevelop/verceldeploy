import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/mystivibes.png";

function Footer() {
  return (
    <footer className="footer footer-center bg-[#400061] text-base-content rounded py-9 p-9">
      <nav className="flex gap-2 text-center">
        <Link to="term-and-conditions" className="link link-hover w-full">
          Terms and Conditions
        </Link>
        <Link to="privacy" className="link link-hover w-full">
          Privacy Policy
        </Link>
        <Link to="disclaimer" className="link link-hover w-full">
          Disclaimer
        </Link>
        <Link to="event-request" className="link link-hover w-full">
          Host a Party
        </Link>
      </nav>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>

      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          MysticVibes.club
        </p>
      </aside>
    </footer>

    // <footer className="flex flex-col items-center p-5 w-full bg-[#400061] max-md:max-w-full">
    //   <div className="flex flex-col w-full max-w-[1140px] justify-center max-md:max-w-full">
    //     <div className="flex flex-wrap justify-center">
    //       <div className="flex flex-col flex-1 shrink justify-center items-start px-4 w-full basis-0 max-w-[1140px] min-w-[240px] max-md:max-w-full">
    //         <img
    //           loading="lazy"
    //           src={Logo}
    //           alt="MysticVibes logo"
    //           className="object-contain w-40 max-w-full aspect-[3.4]"
    //         />
    //       </div>
    //     </div>
    //     <nav className="mt-12 w-full max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
    //       <div className="flex gap-5 max-md:flex-col">
    //         <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
    //           <div className="grow max-md:mt-10 max-md:max-w-full">
    //             <div className="flex m-1">
    //               <FooterColumn
    //                 title="Quick Links"
    //                 items={[{ name: "Host Event", url: "/host-event" }]}
    //               />
    //               <FooterColumn
    //                 title="Important Links"
    //                 items={[
    //                   {
    //                     name: "Terms And Conditions",
    //                     url: "/term-and-conditions",
    //                   },
    //                   { name: "Privacy Policy", url: "/privacy" },
    //                   { name: "Disclaimer", url: "/disclaimer" },
    //                   // { name: "Contact Us", url: "/contact" },
    //                 ]}
    //               />
    //             </div>
    //           </div>
    //         </div>
    //         <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
    //           <div className="flex flex-col w-full max-md:max-w-full">
    //             <div className="flex gap-4 items-center mt-4">
    //               <span className="self-stretch pb-4 my-auto text-sm text-white">
    //                 Follow us on
    //               </span>
    //               <SocialIcon
    //                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ba7732bc69eb160673b4865cdcf81241b240e74823b49691ac6a88045dc91d9?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808"
    //                 alt="Facebook"
    //                 link="https://facebook.com"
    //               />
    //               <SocialIcon
    //                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/497259964957508c66e4ae2e19f8dfb08cdb6503f5b6818bc76e73f5b813b88d?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808"
    //                 alt="Twitter"
    //                 link="https://twitter.com"
    //               />
    //               <SocialIcon
    //                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4c3b4f018c083a848b24071ba425d157e2bd726b7d390bbb321d2d24443db61?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808"
    //                 alt="Instagram"
    //                 link="https://instagram.com"
    //               />
    //               <SocialIcon
    //                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4f1369ccb02ab364c87e7caa4ec32ab7d207b7a40711679ed9ae81166ca87af?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808"
    //                 alt="LinkedIn"
    //                 link="https://linkedin.com"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </nav>
    //     <div className="flex flex-col items-center mx-4 text-sm leading-relaxed text-center text-white pl-[480px] pr-[481px] max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
    //       <div className="flex gap-2.5 justify-center items-center pt-20 pb-8">
    //         <p className="self-stretch my-auto">&copy; All rights reserved</p>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-4 text-sm leading-relaxed text-white capitalize min-h-[230px]">
        <h4 className="flex flex-col pb-4 w-full uppercase whitespace-nowrap">
          {title}
        </h4>
        <ul className="list-none p-0">
          {items.map((item, index) => (
            <li key={index} className="flex flex-col pb-4 w-full">
              <Link to={item.url} className="text-white hover:text-gray-300">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SocialIcon({ src, alt, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col self-stretch pb-4 my-auto w-6"
    >
      <div className="flex flex-col justify-center w-6">
        <img
          loading="lazy"
          src={src}
          alt={alt}
          className="object-contain w-full aspect-square"
        />
      </div>
    </a>
  );
}

export default Footer;
