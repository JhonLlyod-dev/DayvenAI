import { Outlet } from "react-router-dom"
import Header from "./Header"
import Navbar from "./Navbar"
export default function Routing(){
  return(
  <div className="flex flex-col h-screen">
    <Header/>
    <main className="h-full">
      <Outlet/>
    </main>
    <Navbar/>
  </div>
  )
}