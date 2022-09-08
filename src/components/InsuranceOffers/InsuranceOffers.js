import React from "react";
import classes from "./InsuranceOffers.module.css";

function InsuranceOffers() {
  return (
    <div className={classes.insuranceOffers}>
      <h1 className={classes.offerChoicesTitle}>
        Which insurance is right for you?
      </h1>
      <div className={classes.offerChoices}>
        <div className={classes.choice} id="offer1">
          <img alt="Comprehensive Offer" src="../images/Premium.png"></img>
        </div>
        <div className={classes.choice} id="offer2">
          <img alt="Comprehensive Offer" src="../images/Comprehensive.png"></img>
        </div>
        <div className={classes.choice} id="offer3">
          <img alt="Comprehensive Offer" src="../images/Essentials.png"></img>
        </div>
      </div>
    </div>
  );
}

export default InsuranceOffers;
