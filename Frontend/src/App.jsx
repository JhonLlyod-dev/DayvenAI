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
import ObserverProvider from './Observer';

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Backend/Firebase/Api';

import { useState,useEffect } from 'react'

import { fetchEvents } from './Backend/Functions/EventsAction';
import Checker from './Backend/Functions/Filter';

function App() {

  const [user, setUser] = useState(null);
  const [Fetching,setFetching ] = useState(true);
  const [MyEvents, setMyEvents] = useState([]);
 
  // Adjust to make the function run every X seconds to your liking
useEffect(() => {
  const interval = setInterval(() => {
    if (MyEvents && MyEvents.length > 0) {
      Checker(MyEvents);
    }
  }, 15000);

  return () => clearInterval(interval); // cleanup when component unmounts
}, [MyEvents]);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
      setUser(user);

      fetchEvents(user.uid, (data) => setMyEvents(data));

    } else {
      setUser(null);
      setFetching(false);
    }

    setFetching(false);
  });

  // cleanup on unmount
  return () => unsubscribe();
}, []);


   if(Fetching){
    return <Load/>;
   }

  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <ObserverProvider>
            <Landing/>
          </ObserverProvider>
        }/>

        <Route element={<Secured user={user}/>}>
          <Route element={<Routing user={user}/>}>
            <Route path='/dashboard' element={<Dashboard user={user} myEvent={MyEvents}/>}/>
            <Route path='/calendar' element={<Calendar myEvent={MyEvents}/>}/>
            <Route path='/profile' element={<Profile user={user}/>}/>
            <Route path='/events' element={<Events user={user} myEvent={MyEvents}/>}/>
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
