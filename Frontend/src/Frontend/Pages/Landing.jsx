import logo from '../Images/Logo/Time.png'
import logo2 from '../Images/Logo/time_bg.png'
import { ArrowRight } from 'lucide-react'

import { Link } from 'react-router-dom';
import { useNavigate} from "react-router-dom";

import Authenticate from '../../Backend/Functions/Auth';

export default function Landing(){
    const navigate = useNavigate();

  function Signin(){
    Authenticate().
    then((user) => {
      navigate('/dashboard');
    }).
    catch((error) => console.error(error));
  }

  return(
    <div className='poppins-medium p-4 md:px-15 text-myblack flex flex-col gap-20'>
      <div className='flex justify-between items-center'>
        <div className="flex items-center gap-2 ">
          <img src={logo} className='w-8' alt="logo" />
          <h1 className="poppins-semibold text-3xl ">Dayven<span className='italic'>AI</span></h1>
        </div>

        <div className='flex-center gap-10'>
          <ul className='hidden md:flex gap-4 text-myblack/80 font-medium'>
            <li>Features</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <button onClick={Signin} className='gradient-bg btn'>
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
            <button  onClick={Signin} className='gradient-bg btn flex items-center gap-2'>
              Get Started <ArrowRight size={20} />
            </button>
        </div>

        {/* Right Section (Image/Illustration) */}
        <div className='col-span-1 lg:col-span-2 flex justify-center'>
          <div className='w-full aspect-square bg-gray-300 rounded-xl shadow-lg'>
            {/* Replace this div with an actual image or animation */}
          </div>
        </div>
      </div>



    </div>
  )
}