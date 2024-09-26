import React from "react";

const brands = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/3e0fe5baefe5b85ec74e9e11ad301f939a1f60b7a9ce102100d1ba0eb14854ac?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/f585f1d25a4b4cdfd90dfb58b079d06213ec06ea0a8458b7492cf643f27df4b3?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/fdd871fafa1958f19d36909a02c196aac73abb406e05cb17c5a05dfc1d8303c7?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/3630d24f6e2825b79c07ae6e58aca0a2caebea113c9108d6d5d432892501265d?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/e0777eba180b2853ea8a24d6a49662c6ae1e7e7d9a9e5f273559c785baf49dfa?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/331392bf4053b423cb790c6d5504269504757c92e6162f0ddb7d7c57d1a64cba?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808",
];

function TrustedBrands() {
  return (
    <section className="flex flex-col bg-[#400061] max-md:max-w-full">
      <h2 className="w-full text-4xl leading-none text-center text-white bg-[linear-gradient(0deg,rgba(19,20,23,0.00_7.99%,#121417_68.03%))] px-[9px] max-md:px-5 max-md:max-w-full">
        Trusted by Popular Brands
      </h2>
      <div className="flex relative flex-col mt-6 w-full min-h-[936px] pt-[795px] max-md:pt-24 max-md:max-w-full">
        <div className="flex absolute inset-0 z-0 flex-col w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a4192ce2b8433b9ea92c9aab3b9c0005819524707f0afe1044ac06a2432a6c6?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808"
            alt="Background"
            className="object-contain w-full aspect-[2.05] max-md:max-w-full"
          />
        </div>
        <div className="flex z-0 flex-col w-full bg-[linear-gradient(167deg,rgba(19,20,23,0.00_7.99%,#121417_68.03%))] max-md:max-w-full  absolute">
          <div className="flex overflow-hidden items-center w-full max-md:max-w-full">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex flex-col flex-1 w-80 max-w-full min-h-[1px]"
              >
                <div className="flex justify-center px-28 w-full min-h-[120px] max-md:px-5">
                  <img
                    loading="lazy"
                    src={brand}
                    alt={`Brand logo ${index + 1}`}
                    className="object-contain flex-1 shrink aspect-[0.92] basis-0 max-w-[110px] w-[110px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedBrands;
