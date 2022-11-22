import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./List.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange, DateRangePicker } from "react-date-range";
import SearchItem from "../../components/SearchItem/SearchItem";

const List = () => {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);

    console.log(location);

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
                            <span
                                onClick={() => setOpenDate(!openDate)}
                            >{`${format(
                                date[0].startDate,
                                "MM/dd/yyyy"
                            )} to ${format(
                                date[0].endDate,
                                "MM/dd/yyyy"
                            )}`}</span>
                            {openDate && (
                                <DateRange
                                    onChange={(item) =>
                                        setDate([item.selection])
                                    }
                                    minDate={new Date()}
                                />
                            )}
                        </div>
                        <div className="lsItem">
                            <label>Options</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        <small>Min price (per night)</small>
                                    </span>
                                    <input
                                        type="number"
                                        min="1"
                                        className="lsOptionsInput"
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        <small>Max price (per night)</small>
                                    </span>
                                    <input
                                        type="number"
                                        min="1"
                                        className="lsOptionsInput"
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Adult</span>
                                    <input
                                        type="number"
                                        min="1"
                                        className="lsOptionsInput"
                                        value={options.adult}
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Children
                                    </span>
                                    <input
                                        type="number"
                                        min="0"
                                        className="lsOptionsInput"
                                        value={options.children}
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Room</span>
                                    <input
                                        type="number"
                                        min="1"
                                        className="lsOptionsInput"
                                        value={options.room}
                                    />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="listResult">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;
