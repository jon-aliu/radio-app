import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../helpers/context";
import Category from '../subcomponents/Category'
import { useFetch } from "../helpers/useFetch";

//   const url = "https://api.github.com/users";
const Main = () => {
  const {isDesktop,music,musicloading,country,countryloading,news,newsloading,sport,sportloading} = useGlobalContext()
  return (
    <>
        <section className="main-category-results">
        <div className="main-results">
              <h1 className='main-results-title'>{countryloading?"Loading...":"In your Area"}</h1>
                <div className="main-show-categories">
                <Category stations={country}/>
            </div>
            <h1 className='main-results-title'>{musicloading?"Loading...":"Best Music radios"}</h1>
                <div className="main-show-categories">
                <Category stations={music}/>
            </div>
              <h1 className='main-results-title'>{newsloading?"Loading...":"Best News radios"}</h1>
                <div className="main-show-categories">
                <Category stations={news}/>
            </div>
              <h1 className='main-results-title'>{sportloading?"Loading...":"Best Sports Radios"}</h1>
                <div className="main-show-categories">
                <Category stations={sport}/>
            </div>
        </div>
    </section>

    </>

  )
}

export default Main