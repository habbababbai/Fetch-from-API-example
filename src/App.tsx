import React, { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./useFetch";

interface IData {
    days_until: number;
    following_production: IData;
    overview: string;
    poster_url: string;
    release_date: string;
    title: string;
    type: string;
}

function App() {
    const { data, loading, error } = useFetch(
        "https://www.whenisthenextmcufilm.com/api"
    );

    if (loading)
        return (
            <div className="App">
                <div className="Loading">LOADING...</div>
            </div>
        );

    if (error) console.log(error);

    return (
        <div className="App">
            <img src={(data as IData)?.poster_url}></img>
            <h1>
                What is the next MCU film? <br></br>
                {(data as IData)?.title}
            </h1>
            <h2>
                Days until release date: {(data as IData)?.days_until} | Date:{" "}
                {(data as IData)?.release_date}
            </h2>
            <div className="Description">{(data as IData)?.overview}</div>
            <div className="APILink">
                This App is using data from{" "}
                <a href="https://www.whenisthenextmcufilm.com/">
                    When is the next MCU film? API
                </a>
            </div>
        </div>
    );
}

export default App;
