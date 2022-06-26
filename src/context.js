import {useState,useContext,createContext,useEffect} from 'react'

const AppContext = createContext();

const AppProvider = ({children})=>{
    const [isOpen,setIsOpen] = useState();
    const closeSidebar = ()=>{
        setIsOpen(false)
    }
    const openSidebar = ()=>{
        setIsOpen(true)
    }
    return <AppContext.Provider value="">{children}</AppContext.Provider>
}
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}