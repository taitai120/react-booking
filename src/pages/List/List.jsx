import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./List.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRangePicker } from "react-date-range";

const List = () => {
    const location = useLocation();
    console.log(location);
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [options, setOptions] = useState(location.state.options);

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className="lsItem">
                            <label>Check-in Date</label>
                            <span>{`${format(
                                date[0].startDate,
                                "MM/dd/yyyy"
                            )} to ${format(
                                date[0].endDate,
                                "MM/dd/yyyy"
                            )}`}</span>
                            <DateRangePicker
                                onChange={(item) => setDate([item.selection])}
                            />
                        </div>
                    </div>
                    <div className="listResult"></div>
                </div>
            </div>
        </div>
    );
};

export default List;
