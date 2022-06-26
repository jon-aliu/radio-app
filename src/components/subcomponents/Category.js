import React from 'react'
import { Link } from 'react-router-dom'
import nomusic from '../images/no-music.png'
import Carousel from 'better-react-carousel';
const Station = ({stations}) => {

  return (
    // QITU I QET ATO TOP STATIONS
    <Carousel cols={2} rows={1} gap={2}>
   {stations.map((station,index)=>{
    
    return (
      <Carousel.Item>
    <div key={index} className="main-category">
    <img className="main-station-img"src={station.favicon} onError={({currentTarget})=>{currentTarget.onerror=null;currentTarget.src=nomusic}}alt="" />
    <div className="main-category-info">
        <Link to={`/radio/${station.stationuuid}`} className='main-station-title'>{station.name.length<30?station.name:station.name.substr(0,15)+"..."}</Link>
        <p className='main-station-p'>{station.country}</p>
    </div>
    </div>
      </Carousel.Item>
    )
   })}
    </Carousel>
  )
}

export default Station