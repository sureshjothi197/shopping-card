import React from "react";
import { RATING_COUNT } from "../../Utils/constant";
import "./star.css";

const StarRating = ({ rating }) => {
  return (
    <React.Fragment>
      {RATING_COUNT.map((value) => (
        <span
          className={`fa fa-star ${value < rating ? "checked" : ""}`}
        ></span>
      ))}
    </React.Fragment>
  );
};
export default StarRating;
