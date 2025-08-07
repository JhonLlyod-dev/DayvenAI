import logo from '../Images/Logo/Time.png'
import logo2 from '../Images/Logo/time_bg.png'
import { ArrowRight,Rocket,Star,Phone } from 'lucide-react';

import { Link } from 'react-router-dom';
import { useNavigate} from "react-router-dom";
import { useState } from 'react';

import Authenticate from '../../Backend/Functions/Auth';
import Notif from '../Components_small/Notif';
export default function Landing(){
    const navigate = useNavigate();
    const [success,setsuccess] = useState(false);
    const [error,seterror] = useState(false);
    const [onMouseEnter,setOnMouseEnter] = useState(false);

  function Signin(){
    Authenticate().
    then((user) => {
      setsuccess(true);
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    }).
    catch((error) => {
      seterror(true);
      setTimeout(() => {
        seterror(false);
      }, 3000);
    });
  }

  return(
    <div className='poppins-medium p-4 md:px-15 text-myblack flex flex-col gap-20'>
      {success && <Notif type={'success'} message={'Logged in successfully'}/>}
      {error && <Notif type={'error'} message={'Login failed'}/>}
      <div className='flex justify-between items-center'>
        <div className="flex items-center gap-2 ">
          <img src={logo} className='w-8' alt="logo" />
          <h1 className="poppins-semibold text-3xl ">Dayven<span className='italic'>AI</span></h1>
        </div>

        <div className='flex-center gap-10'>
          <ul className='hidden md:flex gap-4 text-myblack/80 poppins-medium'>
            <li>Features</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <button onClick={Signin} className='gradient-bg btn anim'>
            Sign In
          </button>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-5 gap-10 items-center'>
        {/* Left Section (Text) */}
        <div className='col-span-1 lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left gap-8'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
            An Intelligent Way to Plan Every Day
          </h2>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl text-myblack/60'>
            DayvenAI is a smart scheduling assistant that helps you organize your day, manage events, and generate optimal plans using AI based on your availability and priorities.
          </p>
            <button  onClick={Signin} className='gradient-bg btn flex items-center gap-2 anim'>
              Get Started <ArrowRight size={20} />
            </button>
        </div>

        {/* Right Section (Image/Illustration) */}
        <div className='col-span-1 lg:col-span-2 flex justify-center'>
          <div className='w-full aspect-square bg-blue-300 rounded-xl shadow-lg'>
            {/* Replace this div with an actual image or animation */}
          </div>
        </div>
      </div>

      <div className='w-full flex items-center text-gray-300 justify-center gap-5 '>
        <span className='w-full h-0.5 bg-gray-200 rounded-lg'></span>
        <Rocket  size={35} strokeWidth={2} />
        <span  className='w-full h-0.5 bg-gray-200 rounded-lg '></span>
      </div>

<section className="flex items-center flex-col gap-10 px-4 py-10">
  <h1 className="sm:text-xl md:text-2xl xl:text-3xl poppins-bold text-center">Features</h1>

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-7xl">
    {/* Feature Card */}
    <div className="bg-gray-100 p-6 rounded-2xl shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Smart Schedule Analysis</h2>
      <ul className="list-disc list-inside text-sm text-gray-700">
        <li>Multi-Calendar Integration</li>
        <li>Conflict Detection</li>
        <li>Gap & Buffer Analysis</li>
      </ul>
    </div>

    <div className="bg-gray-100 p-6 rounded-2xl shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Priority-Based Scheduling</h2>
      <ul className="list-disc list-inside text-sm text-gray-700">
        <li>P1–P3 Task Prioritization</li>
        <li>Dynamic Priority Adjustment</li>
        <li>Eisenhower Matrix Logic</li>
      </ul>
    </div>

    <div className="bg-gray-100 p-6 rounded-2xl shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Intelligent Event Scheduling</h2>
      <ul className="list-disc list-inside text-sm text-gray-700">
        <li>AI-Generated Suggestions</li>
        <li>Manual Event Creation</li>
        <li>Multi-Person Coordination</li>
        <li>Alternative Suggestions</li>
      </ul>
    </div>

    <div className="bg-gray-100 p-6 rounded-2xl shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Time Optimization</h2>
      <ul className="list-disc list-inside text-sm text-gray-700">
        <li>Focus Protection</li>
        <li>Break Scheduling</li>
        <li>Batching & Time Blocks</li>
        <li>Commute Optimization</li>
      </ul>
    </div>

    <div className="bg-gray-100 p-6 rounded-2xl shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Real-Time Suggestions</h2>
      <ul className="list-disc list-inside text-sm text-gray-700">
        <li>Weekly Insights</li>
        <li>Optimization Opportunities</li>
        <li>Preparation Reminders</li>
      </ul>
    </div>

    <div className="bg-gray-100 p-6 rounded-2xl shadow-sm">
      <h2 className="text-lg font-semibold mb-2">User-Centered Design</h2>
      <ul className="list-disc list-inside text-sm text-gray-700">
        <li>Respects Boundaries</li>
        <li>Constraint-Aware</li>
        <li>No Overbooking</li>
      </ul>
    </div>

    <div className="bg-gray-100 p-6 rounded-2xl shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Integrations</h2>
      <ul className="list-disc list-inside text-sm text-gray-700">
        <li>Google & Outlook Calendars</li>
        <li>Task Managers</li>
        <li>Commute & Energy Insights</li>
      </ul>
    </div>
  </div>
</section>


      <div className='w-full flex items-center text-gray-300 justify-center gap-5 '>
        <span className='w-full h-0.5 bg-gray-200 rounded-lg'></span>
        <Star  size={35} strokeWidth={2} />
        <span  className='w-full h-0.5 bg-gray-200 rounded-lg '></span>
      </div>

      <section className='flex items-center flex-col gap-10'>
        <h1 className='sm:text-xl md:text-2xl xl:text-3xl poppins-bold'>Blog</h1>
      </section>

      <div className='w-full flex items-center text-gray-300 justify-center gap-5 '>
        <span className='w-full h-0.5 bg-gray-200 rounded-lg'></span>
        <Phone  size={35} strokeWidth={2} />
        <span  className='w-full h-0.5 bg-gray-200 rounded-lg '></span>
      </div>

      <section className='flex items-center flex-col gap-10'>
        <h1 className='sm:text-xl md:text-2xl xl:text-3xl poppins-bold'>Contact Us</h1>
      </section>



    </div>
  )
}