import React from "react";
import TrustedBrands from "../components/TrustedBrands";
// import HousePartyConfessions from "../components/HousePartyConfessions";
import PlaybookSection from "../components/PlaybookSection";
import HostEarnSection from "../components/HostEarnSection";
import HeroSection from "../components/HeroSection";
import PartiesSection from "../components/PartiesSection";
import TrustSection from "../components/TrustSection";
import MarconixInfo from "../components/MarconixInfo";

const Home = () => {
  return (
    <>
      <HeroSection />
      <PartiesSection />
      {/* <TrustedBrands /> */}
      <MarconixInfo />
      <TrustSection />
      <HostEarnSection />
      {/* <HousePartyConfessions/> */}
      <PlaybookSection />
    </>
  );
};

export default Home;
