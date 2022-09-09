import React from "react";
import Carousel from "../components/Carousel/Carousel";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import InsuranceOffers from "../components/InsuranceOffers/InsuranceOffers";
import OfferDetails from "../components/OfferDetails/OfferDetails";
import WhatsNext from "../components/WhatsNext/WhatsNext";
import FooterMain from "../components/FooterMain.jsx";

const InsuranceComparePage = () => {
  return (
    <>
      <HeaderBar></HeaderBar>
      <Carousel></Carousel>
      <InsuranceOffers></InsuranceOffers>
      <OfferDetails></OfferDetails>
      <WhatsNext></WhatsNext>
      <FooterMain></FooterMain>
    </>
  );
};

export default InsuranceComparePage;
