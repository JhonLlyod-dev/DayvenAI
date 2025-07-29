import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Frontend/Pages/Landing'
import Dashboard from './Frontend/Pages/Dashboard'
import Routing from './Frontend/Components/Routing'
import Calendar from './Frontend/Pages/BigCalendar'
import Profile from './Frontend/Pages/Profile'
import Events from './Frontend/Pages/Events'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>

        <Route element={<Routing/>}>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/calendar' element={<Calendar/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/events' element={<Events/>}/>
        </Route>
        
      </Routes>
    </Router>
  )
}

export default App
