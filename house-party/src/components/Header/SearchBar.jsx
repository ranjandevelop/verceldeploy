import React from "react";

function SearchBar() {
  return (
    <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[396px]">
      <form className="flex gap-4 items-center p-3 w-full border-2 border-solid shadow-sm bg-white bg-opacity-0 border-[#694F8E] rounded-[100px]">
        <div className="flex flex-col justify-center items-center self-stretch px-2 my-auto bg-[#4f1787] rounded-2xl h-[30px] min-h-[30px] w-[30px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d863d02db10f65fa358ad97a21915e85b59cfb620c82ab5b64c4ce6fb142a911?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808"
            alt=""
            className="object-contain w-4 aspect-square"
          />
        </div>
        <label htmlFor="searchInput" className="sr-only">
          Search for house parties, hosts, etc
        </label>
        <input
          id="searchInput"
          type="text"
          className="flex-grow bg-transparent text-sm text-white border-none outline-none"
          placeholder="Search for house parties, hosts, etc"
        />
        <div className="flex gap-1.5 items-center self-stretch my-auto text-sm leading-7 text-white">
          <div className="self-stretch my-auto">All Cities</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fde5230bfdf55fa247d0340b0a24460752590e15d9c0e278e7c7c5bb76d017e?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
