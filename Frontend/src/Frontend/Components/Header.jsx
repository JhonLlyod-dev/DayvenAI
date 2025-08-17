import Logo from '../Images/Logo/Time.png'
import { CalendarClock, Bell, CalendarPlus2, UserRound,LogOut} from 'lucide-react'
import Checkbox from './Ham'
import Tooltip from './Tooltip'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logout from '../../Backend/Functions/Logout'

export default function Header({user}){
  const [NavIC,setNavIC] = useState(false);


  function MouseClick(){
    setNavIC(prev => !prev);
    console.log('Toggle:' + NavIC);
  }

  const [UserTip,setUserTip] = useState(false);
  const [CalenTip,setCalenTip] = useState(false);
  const [EventTip,setEventTip] = useState(false);


  const Navs = (
    <div
      className={`
        absolute z-20 right-[50%] -bottom-36 translate-x-[50%]
        bg-smoothWhite rounded-lg shadow-sm border border-gray-200 border-y-3 border-y-gradient1
        transition-all ease-in duration-200 origin-top transform
        ${NavIC ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}
      `}
    >
      <ul className="flex-center  p-4 rounded-lg w-full flex-col gap-6">
        <li
          onMouseEnter={() => setUserTip(true)}
          onMouseLeave={() => setUserTip(false)}
          className="relative"
        >
          <Link to="/profile">
            <UserRound size={20} strokeWidth={2.3} />
          </Link>
          <Tooltip state={UserTip} Pos="Left" Tip="Profile" />
        </li>

        <li
          onMouseEnter={() => setCalenTip(true)}
          onMouseLeave={() => setCalenTip(false)}
          className="relative"
        >
          <Link to="/calendar">
            <CalendarClock size={20} strokeWidth={2.3} />
          </Link>
          <Tooltip state={CalenTip} Pos="Left" Tip="Calendar" />
        </li>

        <li
          onMouseEnter={() => setEventTip(true)}
          onMouseLeave={() => setEventTip(false)}
          className="relative"
        >
          <Link to="/events">
            <CalendarPlus2 size={20} strokeWidth={2.3} />
          </Link>
          <Tooltip state={EventTip} Pos="Left" Tip="Events" />
        </li>
      </ul>
    </div>
  );

  return(
    <div className=" flex text-myblack items-center justify-between poppins-regular p-4 md:px-15 ">
      <Link to='/dashboard'>
        <div className='anim flex-center gap-2 cursor-pointer'>
          <img src={Logo} className='motion-preset-slide-down-lg w-4 md:w-6' alt="logo" />
          <h1 className="motion-preset-slide-down-lg motion-delay-100 poppins-semibold text-xl md:text-2xl ">Dayven<span className='italic'>AI</span></h1>
        </div>
      </Link>

      <div>
        <ul className='flex-center gap-3 md:gap-6 '>
          <li  className='relative motion-preset-slide-down-lg motion-delay-100 z-5'>
            <div onClick={MouseClick}>
              <Checkbox />
            </div>  
            {Navs}
          </li>
          <li className='font-bold hidden sm:inline-block text-sm sm:text-base motion-preset-slide-down-lg motion-delay-100 z-5'>{user.displayName}</li>
          <li onClick={() => Logout()} className='hover:text-red-500'><button title='Logout'><LogOut size={18} className='anim' strokeWidth={2.5}/></button></li>
        </ul>
      </div>
    </div>
  )
}