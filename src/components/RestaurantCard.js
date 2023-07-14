import React from "react";
import "./RestaurantCard.css"

function RestaurantCard({imgsrc,response}) {
const {name,costForTwoString,cuisines,avgRating}= response?.data

    console.log(imgsrc)
  return (
    <div className="col-md-3">
      <div className="card my-4" >
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+imgsrc} className="card-img-top" alt="..." />
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <h6>{avgRating} stars</h6>
            <div>
            <span>{costForTwoString}</span>
            </div>
         
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
