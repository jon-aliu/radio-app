import { useEffect, useState } from "react";
import paginate from "./paginate"
import { useGlobalContext } from "./context";
// funksioni per fetch
export const useSearchFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const {search} = useGlobalContext()
  const controller = new AbortController();
  const getData = async ()=>{
    if(search === "") return controller.abort();
    const response = await fetch(`${url}&limit=8`,{signal:controller.signal})
    const data = await response.json()
    setData(data)
    setLoading(false)

  }
  useEffect(()=>{
    getData()
    return ()=>{
      controller.abort();
    }
  },[url,search])
  return {loading,data}
};
// Fetchi qe i bon te dhanat paginate
export const usePaginatedFetch =(url)=>{
    const [data,setData] = useState([]) 
    const [loading,setLoading] = useState(true) 
    const getData = async ()=>{
            const res = await fetch(url)
            const data = await res.json()
            setData(paginate(data.slice(0,100)))
            setLoading(false)
    }
    useEffect(()=>{
        getData()

    },[])
    return {loading,data}
}
// Use fetch i thjeshjt(parametri i pare o url, parametri i dyt o sa elemente don total mi ba fetch prej kti url)
export const useFetch = (url,amount) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getData = async ()=>{
    const response = await fetch(`${url}`)
    const data = await response.json()
    setData(data.slice(0,amount))
    setLoading(false)
  }
  useEffect(()=>{
    getData()
    return ()=>{
    }
  },[])
  return {loading,data}
};
