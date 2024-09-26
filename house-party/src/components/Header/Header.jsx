import React from "react";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { useAuth } from "../../context/AuthProvider"; // Importing the custom hook

function Header() {
  const { isLoggedIn, logout } = useAuth(); // Accessing context
  const navigate = useNavigate(); // Using useNavigate for navigation

  // const handleHostPartyClick = () => {
  //   if (isLoggedIn) {
  //     navigate("/event-request"); // Navigate to host-event if logged in
  //   } else {
  //     navigate("/signin"); // Navigate to signin if not logged in
  //   }
  // };

  return (
    <header className="z-50 flex justify-center absolute top-0 right-0 items-center px-4 py-2 bg-opacity-60 sticky bg-[#460064] w-full shadow-sm sm:px-6 sm:py-4">
      <div className="flex justify-between w-full md:px-4">
        {/* Logo Section */}
        <Logo />

        {/* Navigation Section */}
        <nav className="flex items-center space-x-4 sm:space-x-6">
          <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4">
            {!isLoggedIn ? (
              <Link to="/signin">
                <button className="flex justify-center items-center px-4 py-2 text-sm rounded bg-white text-[#460064] hover:bg-[#460064] hover:text-white transition-colors duration-300 min-h-[40px]">
                  Sign in
                </button>
              </Link>
            ) : (
              <button
                onClick={logout}
                className="flex justify-center items-center px-4 py-2 text-sm rounded bg-white text-[#460064] hover:bg-[#460064] hover:text-white transition-colors duration-300 min-h-[40px]"
              >
                Logout
              </button>
            )}
          </div>

          <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4">
            <button
              // onClick={handleHostPartyClick}
              className="flex justify-center items-center px-4 py-2 text-sm text-white rounded bg-[#4F1787] hover:bg-[#694F8E] transition-colors duration-300 min-h-[40px]"
            >
              <Link to="event-request">Host A Party</Link>

              {/* <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b280128c6ce0107faf3c14f4a43c488390913b04b7a2a170e1f09b8fb82c28a7?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808"
                alt="party icon"
                className="ml-2 w-4 h-4"
              /> */}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
