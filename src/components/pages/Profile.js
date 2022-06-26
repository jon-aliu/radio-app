import React, { useState, useEffect } from "react";
import { useFetch } from "../helpers/useFetch";
import { useGlobalContext } from "../helpers/context";
import Favorites from "../subcomponents/Favorites";

import {
  collection,
  doc,
  setDoc,
  addDoc,
  getDoc,
  onSnapshot,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

import { auth, db } from "../../firebase";

import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

let favoritesUrl =
  "https://nl1.api.radio-browser.info/json/stations/bytag/sport";
const Main = () => {
  //   Qitu i merr favorite radios me useFetch
  const { data: stations, loading } = useFetch(favoritesUrl, 10);
  // Nese don paginated
  // const {data,loading} = usePaginatedFetch()

  const { user, logout ,datas} = UserAuth();
  const navigate = useNavigate();


  console.log(datas.fullname)
  // const {datas,setDatas}=useState([])

  // const docRef = doc(db,"users",user.uid)
  // onSnapshot(docRef,(doc)=>{
  //   console.log(doc.data())
  //         // const newData=doc.data()
  // //  setDatas(doc.data())
  // //  console.log("datas"+datas)
  // })

  // const onsnapshot = ()=>{
  //       const docRef = doc(db,"users",user.uid)
  // onSnapshot(docRef,(doc)=>{
  //   console.log(doc.data())
  //         // const newData=doc.data()
  // //  setDatas(doc.data())
  // //  console.log("datas"+datas)
  // })
  // }

  // useEffect(()=>{
  //     onsnapshot()
  // },[])

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <>
      <section>
        <div className="profile-container">
          <div className="profile-center">
            <div className="profile-info">
              <h1>User Data</h1>
              <h3>{datas.fullname}</h3>
              <p>{datas.email}</p>
            </div>
            <button
              className="submit-form-btn"
              onClick={handleLogout}
              type="submit"
            >
              Click to Sign Out
            </button>
            <div className="favorites-div">
              <h1>Favorite Radios</h1>
              <div className="main-show-favorites">
                <Favorites stations={stations} />
              </div>
            </div>
          </div>
        </div>

        {/* NESE DON ME BA PAGINATE(duhet me perdor usePaginatedFetch!) */}
        {/* {(!loading && data.length > 10) && <div className="pagination-bar">
        <button onClick={()=>page>0?setPage(page-1):setPage(0)} className={page>0?"prev":"prev cancel"}>Previous</button>
        {isDesktop?
          data.map(item=>{
            return <button onClick={()=>setPage(data.indexOf(item))} className="pagination-btn">{data.indexOf(item)}</button>
          }):<p className="page-p">{page} Of {data.length -1}</p>
        }
        <button onClick={()=>page<data.length -1? setPage(page+1):setPage(page)} className={page<data.length -1?"next":"next cancel"}>Next</button>
      </div>} */}
      </section>
    </>
  );
};

export default Main;
