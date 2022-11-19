import React from "react";
import { useParams } from "react-router-dom";

const HotelDetail = () => {
    const params = useParams();
    console.log(params);
    return <div>HotelDetail</div>;
};

export default HotelDetail;
