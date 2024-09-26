import React from "react";
import Sitelogo from "../../assets/mystivibes.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="flex flex-col items-start self-stretch pr-4 my-auto w-[146px]">
      <div className="flex flex-col justify-center py-1.5 max-w-full w-[130px]">
        <Link to="/">
          <img
            loading="lazy"
            src={Sitelogo}
            alt="Company Logo"
            className="object-contain w-full aspect-[3.42]"
          />
        </Link>
      </div>
    </div>
  );
}

export default Logo;
