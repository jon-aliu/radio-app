import React from 'react'
import { Link } from 'react-router-dom'
const Station = ({stations}) => {
  return (
    // QITU I QET ATO TOP STATIONS
    <>
   {stations.map((station,index)=>{
    return (<div key={index} className="main-station">
    <img className="main-station-img"src={station.favicon} alt="" />
    <div className="main-station-info">
        <Link to={`/radio/${station.stationuuid}`} className='main-station-title'>{station.name}</Link>
        <p className='main-station-p'>{station.country}</p>
    </div>
    </div>)
   })}
    </>
  )
}

export default Station