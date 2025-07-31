import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigate, Outlet } from "react-router-dom";
import Landing from './Frontend/Pages/Landing'
import Dashboard from './Frontend/Pages/Dashboard'
import Routing from './Frontend/Components/Routing'
import Calendar from './Frontend/Pages/BigCalendar'
import Profile from './Frontend/Pages/Profile'
import Events from './Frontend/Pages/Events'
import Load from './Frontend/Pages/Load';

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Backend/Firebase/Api';

import { useState,useEffect } from 'react'

function App() {

  const [user, setUser] = useState(null);
  const [Fetching,setFetching ] = useState(true);

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user) => {
            
      if(user){
        setUser(user);
        setFetching(false);
        return;
      }

      setUser(null);
      setFetching(false)
    } );

    return () => unsubscribe();
   },[]);

   console.log('User:', user);

   if(Fetching){
    return <Load/>;
   }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>

        <Route element={<Secured user={user}/>}>
          <Route element={<Routing user={user}/>}>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/calendar' element={<Calendar/>}/>
            <Route path='/profile' element={<Profile user={user}/>}/>
            <Route path='/events' element={<Events/>}/>
          </Route>
        </Route>
        
        <Route path='*' element={<Landing/>}/>
      </Routes>
    </Router>
  )
}

export default App

function Secured({ user }) {

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
