import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";

function RestaurantMenu() {
  const { resId } = useParams();
  console.log(resId);
  const [resInfo, resDetail] = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  return (
    <div>
      <div className="container">
        <div className="row my-4">
          <div className="col-md-6">
            <h2>{resDetail.name}</h2>
            <p>{resDetail.costForTwoMessage}</p>
            <p>{resDetail.cuisines.join(", ")}</p>
            <h6>{resDetail.areaName}</h6>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <p>Rating: {resDetail.avgRatingString}</p>
          </div>
        </div>

        <div className="row my-4">
          <div className="col-md-12">
            <h4>Menu</h4>
            <hr />
          </div>

          {resInfo.map((data, index) => {
            return (
              <div
                className="col-md-12 d-flex justify-content-between my-4"
                key={index}
              >
                <div>
                  <h5>{data.name}</h5>
                  <h6> ₹ {data.price / 100}</h6>
                </div>
                <div>
                  <img
                    src={
                      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                      data.imageId
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RestaurantMenu;
