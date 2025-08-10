import logo from '../Images/Logo/Time.png'
import logo2 from '../Images/Logo/time_bg.png'
import { ArrowRight,Rocket,Star,Phone,CircleArrowRight,CircleArrowLeft } from 'lucide-react';

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
    <>
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

        <div className='grid grid-cols-1 lg:grid-cols-5 gap-20 items-center py-5'>
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
          <div className='col-span-1 lg:col-span-2    flex justify-center'>
            <div className='w-full aspect-square bg-blue-300 rounded-xl shadow-lg'>
              {/* Replace this div with an actual image or animation */}
            </div>
          </div>
        </div>

        <div className='w-full flex items-center text-gray-300 justify-center gap-5 '>
          <span className='w-full h-0.5 bg-gray-200 rounded-lg'></span>
          <Rocket className='w-20 transition-all ease-in duration-75 hover:text-gradient1'  size={35} strokeWidth={2} />
          <span  className='w-full h-0.5 bg-gray-200 rounded-lg '></span>
        </div>

        <section className="flex items-center flex-col gap-10 md:gap-20 px-4 ">
            <div className='flex flex-col gap-4'>
              <h1 className="sm:text-xl md:text-2xl xl:text-3xl poppins-bold text-center">Introducing</h1>
              <h1 className="sm:text-3xl md:text-4xl xl:text-5xl poppins-black text-gradient1 text-center">DayvenAI</h1>
            </div>

            <div className='flex xl:flex-row flex-col items-center justify-between w-[80%] gap-5 xl:gap-20'>
              <div className=' flex-1 flex flex-col gap-2 '>
                <h1 className="sm:text-2xl md:text-3xl xl:text-4xl poppins-black text-gradient1">Intelligent Scheduling</h1>
                <p className='text-myblack/70'>Automatically arranges tasks and events by analyzing availability, priorities, and user preferences for optimal time use.</p>
              </div>

              <CircleArrowRight className='w-20 hidden xl:block transition-all ease-in duration-75 hover:text-gradient1' size={50} strokeWidth={1} />

              <div className='flex-1 w-full h-100  bg-blue-300 rounded-xl shadow-lg'>
                Pre
              </div>
            </div>
            
            <div className='flex xl:flex-row-reverse flex-col items-center justify-between w-[80%] gap-5 xl:gap-20'>
              <div className=' flex-1 flex flex-col gap-2 '>
                <h1 className="sm:text-2xl md:text-3xl xl:text-4xl poppins-black text-gradient1">Priority-Based Planning</h1>
                <p className='text-myblack/70'>Organizes tasks and events based on their importance and urgency to ensure the most critical items are handled first.</p>
              </div>

              <CircleArrowLeft className='w-20 hidden xl:block transition-all ease-in duration-75 hover:text-gradient1' size={50} strokeWidth={1} />

              <div className='flex-1 w-full h-100  bg-blue-300 rounded-xl shadow-lg'>
                Pre
              </div>
            </div>

            <div className='flex xl:flex-row flex-col items-center justify-between w-[80%] gap-5 xl:gap-20'>
              <div className=' flex-1 flex flex-col gap-2 w-full'>
                <h1 className="sm:text-2xl md:text-3xl xl:text-4xl poppins-black text-gradient1">Conflict Resolution</h1>
                <p className='text-myblack/70 '>Detects, analyzes, and efficiently resolves scheduling overlaps, resource conflicts, to maintain a smooth, non-disruptive plan.</p>
              </div>

              <CircleArrowRight className='w-20 hidden xl:block transition-all ease-in duration-75 hover:text-gradient1' size={50} strokeWidth={1} />

              <div className='flex-1 w-full h-100  bg-blue-300 rounded-xl shadow-lg'>
                Pre
              </div>
            </div>


        </section>


        <div className='w-full flex items-center text-gray-300 justify-center gap-5 '>
          <span className='w-full h-0.5 bg-gray-200 rounded-lg'></span>
          <Star  size={35} className='w-20 transition-all ease-in duration-75 hover:text-gradient1' strokeWidth={2} />
          <span  className='w-full h-0.5 bg-gray-200 rounded-lg '></span>
        </div>

        <section className='flex items-center flex-col gap-10'>
          <h1 className='sm:text-xl md:text-2xl xl:text-3xl poppins-bold'>Blog</h1>
        </section>

        <div className='w-full flex items-center text-gray-300 justify-center gap-5 '>
          <span className='w-full h-0.5 bg-gray-200 rounded-lg'></span>
          <Phone  size={35} className='w-20 transition-all ease-in duration-75 hover:text-gradient1' strokeWidth={2} />
          <span  className='w-full h-0.5 bg-gray-200 rounded-lg '></span>
        </div>

        <section className='flex items-center flex-col gap-10'>
          <h1 className='sm:text-xl md:text-2xl xl:text-3xl poppins-bold'>Contact Us</h1>
        </section>
      </div>
    
      <section className='w-full h-50 bg-myblack text-smoothWhite flex items-center flex-col gap-10'>
        <h1 className='sm:text-xl md:text-2xl xl:text-3xl poppins-bold'>Contact Us</h1>
      </section>
    </>
  )
}