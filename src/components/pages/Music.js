import React, { useState, useEffect } from "react";
import { usePaginatedFetch } from "../helpers/useFetch";
import { useGlobalContext } from "../helpers/context";
import Station from '../subcomponents/Station'
const musicUrl =
  "https://nl1.api.radio-browser.info/json/stations/bytag/music";
//   const url = "https://api.github.com/users";
const Main = () => {
  const {stations,setStations,page,setPage,isDesktop} = useGlobalContext()
  const {data,loading} = usePaginatedFetch(musicUrl)
  console.log(data)
  useEffect(() => {
    if(loading) return;
    setStations(data[page])
    return () => {
      setStations([])
    }
  }, [loading,page])
  
// const {data:searchResults,loading} = useSearchFetch(`${searchUrl+search}`);
  return (
    <>
        <section className="main-category">
        <div className="main-results">
            <h1 className='main-results-title'>{loading?"Loading...":"Top Results for Music"}</h1>
            <div className="main-show-stations">
                <Station stations={stations}/>
            </div>
        </div>
       {!loading && <div className="pagination-bar">
        <button onClick={()=>page>0?setPage(page-1):setPage(0)} className={page>0?"prev":"prev cancel"}>Previous</button>
        {isDesktop?
          data.map(item=>{
            return <button onClick={()=>setPage(data.indexOf(item))} className="pagination-btn">{data.indexOf(item)}</button>
          }):<p className="page-p">{page} Of {data.length -1}</p>
        }
        <button onClick={()=>page<data.length -1? setPage(page+1):setPage(page)} className={page<data.length -1?"next":"next cancel"}>Next</button>
      </div>}
    </section>

    </>

  )
}

export default Main