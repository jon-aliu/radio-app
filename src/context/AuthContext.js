import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
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

import { auth, db } from "../firebase";
const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const [datas, setDatas] = useState([])
  let data = [];
  const createUser = (email, password, fullname) => {
    // const usersCollection=collection(db, "users")

    return createUserWithEmailAndPassword(auth, email, password).then((res) => {

      setDoc(doc(db, "users", res.user.uid), {
        id: res.user.uid,
        fullname: fullname,
        email: email,
        fav: [],
      });

    });
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const addFav = (station) => {
    return updateDoc(doc(db, "users", user.uid), {
      fav: arrayUnion(...station),
    });
  };

  const removeFav = (index) => {
    console.log(index);
    return updateDoc(doc(db, "users", user.uid), {
      fav: arrayRemove(index),
    });
  };



  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,  (currentUser) => {
      setUser(currentUser);

          const getData = async()=>{ 
      const docRef = doc(db,"users",currentUser.uid) 
    const docSnap = await getDoc(docRef) 
    setDatas(docSnap.data())
    console.log(docSnap.data())
  }
     getData();

    });
    return () => {
      unsubscribe();
      
    };
  }, []);

  // useEffect(()=>{ 
  //   const getData = async()=>{ 
  //     console.log(user)
  //     const docRef = doc(db,"users",user.uid) 
  //   const docSnap = await getDoc(docRef) 
  //   console.log(docSnap.data())
  // }
  //    getData(); 
  // },[]) 

  return (
    <UserContext.Provider
      value={{ createUser, user, logout, signIn, addFav, removeFav, datas }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
