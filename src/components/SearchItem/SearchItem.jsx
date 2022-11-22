import React from "react";
import "./SearchItem.css";

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img
                src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airpot taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with Air Conditioning
                </span>
                <span className="siFeatures">
                    Entire studio - 1 bathroom 21<sup>2</sup> 1 full bed
                </span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span className="siDetailTopText">Excellent</span>
                    <button className="siDetailTopText">8.9</button>
                </div>
                <div className="siDetailTexts">
                    <san className="siPrice">$123</san>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availablity</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;
