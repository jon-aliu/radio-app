import {useState,useContext,createContext,useEffect} from 'react'
import { useMediaQuery } from 'react-responsive'
import { useFetch } from './useFetch'
const AppContext = createContext();
const musicUrl =
  "https://nl1.api.radio-browser.info/json/stations/bytag/music";
const sportUrl =
  "https://nl1.api.radio-browser.info/json/stations/bytag/sport";
const newsUrl =
  "https://nl1.api.radio-browser.info/json/stations/bytag/news";
const byCountry =
  "https://nl1.api.radio-browser.info/json/stations/bycountry/kosovo";
const AppProvider = ({children})=>{
    const [isOpen,setIsOpen] = useState();
    const closeSidebar = ()=>{
        setIsOpen(false)
    }
    const openSidebar = ()=>{
        setIsOpen(true)
    }
    const isDesktop = useMediaQuery({
        query:'(min-width:1020px)'
    })
    const [isPasswordHidden,setIsPasswordHidden] = useState(true)
    const [search, setSearch] = useState("");
    const [stations,setStations] = useState([])
    const [page,setPage] = useState(0)
    const [fullname,setFullname] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [password2,setPassword2] = useState("")
    const [isRegistered,setIsRegistered] = useState(false)
    const {data:music,loading:musicloading} = useFetch(musicUrl,10)
    const {data:sport,loading:sportloading} = useFetch(sportUrl,10)
    const {data:news,loading:newsloading} = useFetch(newsUrl,10)
    const {data:country,loading:countryloading} = useFetch(byCountry,10)
    return <AppContext.Provider value={{music,musicloading,sport,sportloading,news,newsloading,country,countryloading,isDesktop,isRegistered,setIsRegistered,fullname,setFullname,email,setEmail,password,setPassword,password2,setPassword2,isPasswordHidden,setIsPasswordHidden,search,setSearch,openSidebar,closeSidebar,isOpen,stations,setStations,page,setPage}}>{children}</AppContext.Provider>
}
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}