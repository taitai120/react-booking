import React, { useState, useEffect } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBed,
    faCar,
    faPerson,
    faPlane,
    faSearch,
    faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const handleChangeDate = (e) => {
        console.log(e);
        setDate([e.selection]);
        setOpenDate(false);
    };

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]:
                    operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/hotels", {
            state: {
                destination,
                date,
                options,
            },
        });
    };

    return (
        <div className="header">
            <div
                className={
                    type === "list"
                        ? "headerContainer listMode"
                        : "headerContainer"
                }
            >
                {/* Menu */}
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type !== "list" && (
                    <>
                        {/* Title */}
                        <h1 className="headerTitle">
                            A lifetime of discounts? It's Genius.
                        </h1>
                        {/* Description */}
                        <p className="headerDesc">
                            Get rewared for your travels - unlock instant
                            savings of 10% or more with free Lamabooking account
                        </p>
                        {/* Button */}
                        <button className="headerBtn">
                            Sign in / Register
                        </button>
                        {/* Search */}
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon
                                    icon={faBed}
                                    className="headerIcon"
                                />
                                <input
                                    type="text"
                                    placeholder="Where are you going?"
                                    className="headerSearchInput"
                                    onChange={(e) =>
                                        setDestination(e.target.value)
                                    }
                                />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon
                                    icon={faCalendarDays}
                                    className="headerIcon"
                                />
                                <span
                                    className="headerSearchText"
                                    onClick={() => setOpenDate(!openDate)}
                                >{`${format(
                                    date[0].startDate,
                                    "MM/dd/yyyy"
                                )} to ${format(
                                    date[0].endDate,
                                    "MM/dd/yyyy"
                                )}`}</span>
                                {openDate && (
                                    <DateRangePicker
                                        editableDateInputs={true}
                                        onChange={handleChangeDate}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        className="date"
                                    />
                                )}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon
                                    icon={faPerson}
                                    className="headerIcon"
                                />
                                <span
                                    className="headerSearchText"
                                    onClick={() => setOpenOptions(!openOptions)}
                                >
                                    {`${options.adult} adult - ${options.children} children - ${options.room} room`}
                                </span>
                                {openOptions && (
                                    <div className="options">
                                        <div className="optionItem">
                                            <span className="optionText">
                                                Adult
                                            </span>
                                            <div className="optionCounter">
                                                <button
                                                    className="optionCounterButton"
                                                    disabled={
                                                        options.adult <= 1
                                                    }
                                                    onClick={() =>
                                                        handleOption(
                                                            "adult",
                                                            "d"
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>
                                                <button className="optionCounterNumber">
                                                    {options.adult}
                                                </button>
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() =>
                                                        handleOption(
                                                            "adult",
                                                            "i"
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className="optionText">
                                                Children
                                            </span>
                                            <div className="optionCounter">
                                                <button
                                                    className="optionCounterButton"
                                                    disabled={
                                                        options.children <= 0
                                                    }
                                                    onClick={() =>
                                                        handleOption(
                                                            "children",
                                                            "d"
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>
                                                <button className="optionCounterNumber">
                                                    {options.children}
                                                </button>
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() =>
                                                        handleOption(
                                                            "children",
                                                            "i"
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className="optionText">
                                                Room
                                            </span>
                                            <div className="optionCounter">
                                                <button
                                                    className="optionCounterButton"
                                                    disabled={options.room <= 1}
                                                    onClick={() =>
                                                        handleOption(
                                                            "room",
                                                            "d"
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>
                                                <button className="optionCounterNumber">
                                                    {options.room}
                                                </button>
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() =>
                                                        handleOption(
                                                            "room",
                                                            "i"
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="headerSearchItem">
                                <button
                                    className="headerBtn"
                                    onClick={handleSearch}
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
