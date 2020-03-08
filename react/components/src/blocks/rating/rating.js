import React from "react";

const Rating = ({ rating }) => {

   const transFormRating = ()=>{
      if((typeof rating === "undefined")|| rating === "NaN")
       return "Not applicable";
       return rating;
   }
  return (
    <div>
      <svg style={{height:"25" , width:"23"}} className="star rating" >
        <polygon
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
          style={{fillRule:"nonzero"}}
        />
      </svg>
       {transFormRating()}
    </div>
  );
};

export default Rating;
