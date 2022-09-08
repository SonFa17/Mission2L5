import React from "react";
import Carousel from "../components/Carousel/Carousel";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import InsuranceOffers from "../components/InsuranceOffers/InsuranceOffers";
import OfferDetails from "../components/OfferDetails/OfferDetails";

const InsuranceComparePage = () => {
  return (
    <>
      <HeaderBar></HeaderBar>
      <Carousel></Carousel>
      <InsuranceOffers></InsuranceOffers>
      <OfferDetails></OfferDetails>
    </>
  );
};

export default InsuranceComparePage;
