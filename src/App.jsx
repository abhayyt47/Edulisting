import { Routes, Route, useParams, useLocation } from "react-router-dom"
import Home from './components/pages/Home'
import './App.css'
import Ads from "./components/pages/Ads"
import Chat from "./components/pages/Chat"
import Create from "./components/pages/Create"
import Profile from './components/pages/Profile'
import Login from "./components/main/Login"
import Error404 from "./components/main/Error404"
import MobileNav from "./components/header/MobileNav"
import Header from "./components/header/Header"
import Listing from "./components/pages/Listing"
import User from "./components/pages/User"
import { useEffect, useState } from "react"
import Footer from "./components/footer/Footer"
import AllChats from "./components/pages/AllChats"
import Query from "./components/pages/Query"
import { ContactUs } from "./components/pages/ContactUs"
import Notification from "./components/pages/Notification"
import EditProfile from "./components/pages/EditProfile"
import SimpleBottomNavigation from "./components/header/SimpleBottomNavigation"
import Setting from "./components/pages/Setting"
import Support from "./components/pages/Support"

function App() {
  const {pathname} = useLocation()
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  let view = true
  const chatPath = pathname.slice(5,pathname.length);
  useEffect(() => {

  console.log(window.innerHeight)
   if(window.innerWidth < 640){   
    // define a custom handler function
    // for the contextmenu event
    const handleContextMenu = (e) => {
      // prevent the right-click menu from appearing
      e.preventDefault()
    }

    // attach the event listener to 
    // the document object
    document.addEventListener("contextmenu", handleContextMenu)

    // clean up the event listener when 
    // the component unmounts
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
    }
  }
  }, [])

  if(pathname === "/editprofile" || pathname === ("/chat"+ chatPath) || pathname === ("/user"+ chatPath) || pathname === "/setting" || pathname === "/help-and-support"){
    view = false
  }
  else{
    view = true
  };
  return (
    <>
    <div className={window.innerWidth < 840 && "text-select-disable"}>
      {view && <Header />} 
    
    <div className={pathname !== "/chat" + chatPath  && "pb-16"}>
    <Routes>
      
      <Route path="/" element={ <Home/> } />

      
      <Route path="/allchats" element={ <AllChats /> } />
      <Route path="/chat/:id" element={ <Chat /> } />
      <Route path="/query/:id" element={ <Query /> } />
      <Route path="/sell" element={<Create />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/editprofile" element={<EditProfile />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/ads" element={ <Ads /> } />
      <Route path="/help-and-support" element={ <Support /> } />
      <Route path="/setting" element={ <Setting /> } />
      <Route path="/profile" element={ <Profile /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/listings/:id" element={ <Listing /> } />
      <Route path="/user/:id" element={ <User /> } />
     <Route path="*" element={ <Error404 /> } />
    </Routes>
    </div>
    {pathname !== "/chat"+ chatPath  && <SimpleBottomNavigation />} 
    
    
    </div>
   </>
  )
}

export default App
