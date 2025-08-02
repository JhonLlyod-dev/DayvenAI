import { MiniCalendar } from "../Components/Calendar";
import Reminder from "../Components/Reminders.jsx";
import Chatbox from "../Components/Chatbox.jsx";
import Charts from "../Components/Charts.jsx";
import Notif from "../Components_small/Notif.jsx";
import Upcoming from "../Components/Upcoming.jsx";
import { useState,useEffect } from "react";
import dayjs from "dayjs";

import { Link } from "react-router-dom";

import { reminders} from '../../Backend/Data/Data.js';
 
import { BellRing,Pin, ChevronRight,Bot,ChartNoAxesColumn } from "lucide-react";

export default function Dashboard({myEvent}) {

  const [Events, setEvents] = useState([]);

  useEffect(() => {
    if (myEvent && myEvent.length > 0) {
      setEvents(myEvent);
    }
  }, [myEvent]);

   

  const Upevents = Events.filter((item) => dayjs(item.start).isAfter(dayjs(), 'day')).slice(0,6);
  const Today = Events.filter((item) => item.start === dayjs().format('YYYY-MM-DD'));

  

  return (
    <div className="motion-preset-fade-lg px-4 md:px-10 pb-4 text-myblack  w-full min-h-full flex flex-col gap-6">
      {/* Top Section */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        {/* Stats */}
        <div className="flex flex-col gap-4 h-full">
          <div className="motion-preset-blur-up-lg motion-delay-100  bg-smoothWhite shadow-md border-t-3 border-gradient1 flex-1 rounded-xl  flex flex-col p-4 font-semibold">
            <h3 className="text-lg flex items-center gap-1 font-bold mb-2"><ChartNoAxesColumn className="text-gradient1 mr-1" size={20} strokeWidth={3} /> Weekly Scheduled Events</h3>
            <Charts events={myEvent}/>
          </div>
        </div>

        {/* Reminders */}
        <div className="motion-preset-blur-up-lg motion-delay-100 bg-smoothWhite shadow-md border-t-3 border-gradient1 rounded-xl p-4 flex-1 flex flex-col justify-start min-h-[14rem] h-full">
          <h3 className="text-lg flex items-center gap-1 font-bold mb-2"><BellRing className="text-gradient1 mr-1" size={20} strokeWidth={2} /> Today</h3>

          <div className=" max-h-70 overflow-auto">
            <div className="flex flex-col gap-2 h-auto overflow-scroll">
              {Today && Today.length > 0 ? (
                Today.map((data, i) => (
                  <Reminder data={data} key={i} />
                ))
              ) : (
                <h3 className="text-myblack/70 font-medium text-center mt-10">
                  You’re all caught up! Enjoy a stress-free day.
                </h3>
              )}
            </div>
          </div>

        </div>

        {/*Mini Calendar */}
        <div className="motion-preset-blur-up-lg motion-delay-200 bg-smoothWhite shadow-md border-t-3 border-gradient1 rounded-xl flex-1 flex  p-4  min-h-[14rem] h-full">
          <MiniCalendar events={myEvent}/>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow">
        {/* Upcoming Events */}
        <div className="motion-preset-blur-up-lg motion-delay-300 bg-smoothWhite shadow-md border-t-3 border-gradient1 rounded-xl p-4 flex flex-col justify-start min-h-[16rem] h-full">
          <div className="text-lg w-full flex items-center justify-between gap-1 font-bold mb-2">
            <div className="flex items-center">
              <Pin size={20} className="text-gradient1 mr-1" strokeWidth={2}/>
              <h1>Upcoming Events</h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Upevents && Upevents.length > 0 ? (
              Upevents.map((data, i) => (
                <Upcoming data={data} key={i} />
              ))
            ) : (
              <h3 className="text-myblack/70 col-span-2 font-medium text-center mt-20">
                You’re all caught up! Enjoy a stress-free day.
              </h3>
            )}
          </div>
          <div className="w-full flex-center">
            {Upevents?.length > 0 && 
              <Link to='/events'>
                <div className="mt-4 md:mt-6 transition-all ease-in duration-75 flex-center hover:text-gradient1">
                  <span className=" text-sm poppins-semibold ">more</span> <ChevronRight size={18}/>
                </div>
              </Link>
            }
          </div>
        </div>

        {/* AI Chat Assistant */}
        <div className="motion-preset-blur-up-lg motion-delay-400 bg-smoothWhite shadow-md border-t-3 border-gradient1 rounded-xl p-4 flex flex-col min-h-[16rem] h-full">
          <div className="flex items-center gap-2">
            <Bot className="" size={28} />
            <h3 className="text-lg poppins-bold ">Dayven</h3>
          </div>

          <div className="flex-1">
            <Chatbox/>
          </div>
        </div>
      </div>
    </div>
  );
}
