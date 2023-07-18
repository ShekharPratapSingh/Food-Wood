import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { NavLink } from "react-router-dom";
import useNetconnection from "./utils/useNetconnection";


function Body() {
  let resData = [];

  const [respData, setresData] = useState(resData);
  const[filterData,setFilterdata]=useState([])
  const [text,setText]=useState("")

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4867115&lng=88.35277119999999&page_type=DESKTOP_WEB_LISTING"
    );
    const value = await data.json();
    const restData = value.data.cards.filter((data, index) => {
      return data.cardType === "seeAllRestaurants";
    });

    resData.push(restData[0].data.data.cards);
    setresData(restData[0]?.data?.data?.cards);
    setFilterdata(restData[0]?.data?.data?.cards)
    console.log("resData", resData);
  };

  const handleRated = () => {
    let filterData = respData.filter((data, index) => {
      return respData[index].data.avgRating > 4;
    });
    setFilterdata(filterData);
  };

  const handleReset = () => {
    FetchData();
  };

  const handleSearch=()=>{

    const filteredData= respData.filter((res,index)=>{
            return res.data.name.toLowerCase().includes(text.toLowerCase())
    })

    setFilterdata(filteredData)
  }

const status=useNetconnection()

if(status===false) return <h1 className="d-flex justify-content-center align-items-center">Please check your Internet</h1>


  return respData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container-fluid body_container">
      <div className="row">
        <div className="col-md-12 my-3">
          <h4 className="text-dark" >Search Restaurant</h4>
        </div>
        <div className="col-md-12">
          <div>
            <input
              type="text"
              class="form-control"
              placeholder="Search Reastaurant"
              value={text}
              onChange={(e)=>setText(e.target.value)}

            />
            <button className="btn btn-dark" onClick={handleSearch}>Search</button>
          </div>
        </div>

        <div className="col-md-12 my-3">
          <div>
            <button className="btn btn-primary" onClick={handleRated}>
              Top Rated Restaurant
            </button>
            <button className="btn btn-danger mx-2" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
        <div className="row my-4">
          {filterData.map((result, index) => {
            console.log(result.data.cloudinaryImageId);
            return (
     
             <RestaurantCard
                resLink={result.data.id}
                imgsrc={result.data.cloudinaryImageId}
                response={result}
                key={result.data.id}
              />
           
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Body;
