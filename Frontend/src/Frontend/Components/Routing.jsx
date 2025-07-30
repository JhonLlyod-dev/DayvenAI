import { Outlet } from "react-router-dom"
import Header from "./Header"
import Navbar from "./Navbar"
export default function Routing({user}){
  return(
  <div className="flex flex-col h-screen">
    <Header user={user}/>
    <main className="h-full">
      <Outlet/>
    </main>
    <Navbar/>
  </div>
  )
}