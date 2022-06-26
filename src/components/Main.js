import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import {FaSearch} from 'react-icons/fa'
import Station from './Station'
const topClicksUrl =
  "https://nl1.api.radio-browser.info/json/stations/topvote/5";
  // const url = "https://api.github.com/users";
const Main = () => {
  const {data} = useFetch(topClicksUrl)
  return (
    <>
        <section className="main-section">
        <div className="main-section-center">
        <div className="main-search">
            <h1 className='main-title'>LISTEN IT NOW!</h1>
            <form>
                <div className="form-control">
                    <FaSearch className='main-search-logo'/>
                    <input type="text" placeholder="Search for stations..." />
                </div>
            </form>
        </div>
        {/* QITU KAN MU U SHFAQ TOP 5 MOST SEARCHED */}

        </div>
    </section>
    {data && <div className="main-results">
            <h1 className='main-results-title'>Top Stations</h1>
            <div className="main-show-stations">
                <Station stations={data}/>
            </div>
        </div>}
    </>

  )
}

export default Main