import React from "react";
import { useParams } from "react-router-dom";

const Hotel = () => {
    const params = useParams();
    console.log(params);
    return <div>Hotel</div>;
};

export default Hotel;
