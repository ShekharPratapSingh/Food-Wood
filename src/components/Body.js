import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'

function Body() { 

    let resData=[]
    
    const[respData,setresData]=useState(resData)

    useEffect(()=>{
        FetchData()
      
    },[])

    const FetchData= async()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4867115&lng=88.35277119999999&page_type=DESKTOP_WEB_LISTING")
        const value =await data.json()
       const restData=value.data.cards.filter((data,index)=>{
        return data.cardType==="seeAllRestaurants"
       })

       resData.push(restData[0].data.data.cards)
       setresData(restData[0]?.data?.data?.cards)
       console.log("resData",resData)
        
    }
    

    const handleRated=()=>{
        let filterData=respData.filter((data,index)=>{
            return respData[index].data.avgRating>4
        })
        setresData(filterData)
       
       
    }

    const handleReset=()=>{
        FetchData()
    }

    if(respData.length===0){
        return <Shimmer/>
    }

  return (
    <div className='container-fluid body_container'>

        <div className="row">
        <div className="col-md-12 my-3">
               <h3>Search</h3>
            </div>
            <div className="col-md-12">
                <div>
                    <input type="text" class="form-control" placeholder="Search Reastaurant"/>
               </div>
            </div>

            <div className="col-md-12 my-3">
                <div>
                  <button className='btn btn-primary' onClick={handleRated}>Top Rated Restaurant</button>
                  <button className='btn btn-danger mx-2' onClick={handleReset}>Reset</button>
               </div>
            </div>
            <div className="row my-4">
             
                {
                    respData.map((result,index)=>{
                        console.log(result.data.cloudinaryImageId)
                       return <RestaurantCard imgsrc={result.data.cloudinaryImageId} response={result} key={result.data.id}/>
                    })
                }
             
           
              
                
            </div>
            </div>
           
     </div>

   
  )
}

export default Body