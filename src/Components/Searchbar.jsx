import React from 'react'
// import ReactStars from "react-rating-stars-component";
const Searchbar = () => {
    // const ratingChanged = (newRating) => {
    // console.log(newRating);
    //   };
    return ( <div>
        <input type="text" placeholder="Search" className="searchbar"/>
        {/* <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
         />, */}

    </div> );
}
 
export default Searchbar;