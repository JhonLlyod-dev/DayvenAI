import { Search as See,Funnel,CalendarDays,AlarmClock,PartyPopper,Plus,OctagonAlert   } from "lucide-react";

import { useEffect, useState } from "react";
import EventsData from "../Components/EventsList";
import { EventChart,EventPieChart } from "../Components/Charts";
import { MiniCalendar } from "../Components/Calendar";
import Addevent from "../Components/Addevent";
import dayjs from "dayjs";


export default function Events({user,myEvent}){

  const [Events, setEvents] = useState([]);

  useEffect(() => {
    if (myEvent && myEvent.length > 0) {
      setEvents(myEvent);
    }
  }, [myEvent]);
  const [Search, setSearch] = useState('');
  const [Order, setOrder] = useState('');
  const [Prio, setPrio] = useState('');
  const [FindDate, setFindDate] = useState('');
  const [addevent,setAddevent] = useState(false);


  const Filter = (Search) => {
  let filtered = Events;

  if (Search?.trim()) {
    const lowered = Search.toLowerCase();
    filtered = filtered.filter((item) =>
      item.title.toLowerCase().includes(lowered) ||
      item.type.toLowerCase().includes(lowered)
    );
  }

  if (Order && Order === 'All') {
    filtered = filtered.filter((item) => item.status !== 'Completed');
  } else if (Order && Order !== 'All') {
    filtered = filtered.filter((item) => item.status === Order);
  }

  if (FindDate) {
    filtered = filtered.filter((item) =>
      dayjs(item.start).isSame(FindDate, 'day') ||
      dayjs(item.end).isSame(FindDate, 'day') ||
      (dayjs(item.start).isBefore(FindDate, 'day') && dayjs(item.end).isAfter(FindDate, 'day'))
    );
  }
  
  if (Prio && Prio !== 'All') {
    filtered = filtered.filter((item) => item.priority === Prio);
  } 

  return filtered;
};


const EventCount = Events.filter((item) => item.activty === 'Active').length;
const UpcomingCount = Events.filter((item) => dayjs(item.start).isAfter(dayjs(), 'day')).length;
const TodayCount = Events.filter((item) => dayjs(item.start).isSame(dayjs(), 'day')).length;

const queries = Filter(Search);

  function handleVisible(){
    setAddevent(!addevent);
  }

  return (
    <div className="relative flex flex-col gap-4 w-full h-full xl:px-16 md:px-8 p-4 pt-0 motion-preset-fade-md">
      <Addevent Visible={addevent} UID={user.uid} Close={handleVisible}/>
      <div className="grid lg:grid-cols-2 gap-6 w-full">
        <div className=" flex-1 flex flex-col gap-6">

          <div>
            <h2 className="poppins-bold text-xl md:text-2xl">My Events</h2>
            <p className="text-sm md:text-base font-medium text-myblack/70">Check your schedule and keep your events up to date.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">

            <div className="border-l-3 border-l-gradient1 flex items-center gap-4 bg-smoothWhite rounded-xl border border-gray-200 shadow-md p-2 w-full md:p-4">
              <div className="p-3 bg-gradient1 rounded-full text-white">
                <PartyPopper  size={24} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm poppins-bold text-myblack/70">Events</h4>
                <span className="text-2xl poppins-extrabold text-gradient1">{EventCount}</span>
              </div>
            </div>

            <div className="border-l-3 border-l-gradient1 flex items-center gap-4 bg-smoothWhite rounded-xl border border-gray-200 shadow-md p-2 w-full md:p-4">
              <div className="p-3 bg-gradient1 rounded-full text-white">
                <AlarmClock size={24} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm poppins-bold text-myblack/70">Upcoming</h4>
                <span className="text-2xl poppins-extrabold text-gradient1">{UpcomingCount}</span>
              </div>
            </div>

            <div className="border-l-3 border-l-gradient1 flex items-center gap-4 bg-smoothWhite rounded-xl border border-gray-200 shadow-md p-2 w-full md:p-4">
              <div className="p-3 bg-gradient1 rounded-full text-white">
                <CalendarDays size={24} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm poppins-bold text-myblack/70">Today</h4>
                <span className="text-2xl poppins-extrabold text-gradient1">{TodayCount}</span>
              </div>
            </div>



          </div>

          <div className="border-l-3 border-l-gradient1 bg-smoothWhite rounded-lg flex flex-col gap-2 shadow-md border border-gray-200 w-full p-4 md:p-8 ">
            <h1 className="poppins-bold">Annual Event Summary</h1>
            <EventChart events={myEvent}/>
          </div>

          <div className="grid md:grid-cols-2 gap-4 flex-1">
            <div className="border-t-3 border-t-gradient1 bg-smoothWhite rounded-lg flex flex-col shadow-md border border-gray-200 w-full p-4 ">
              <h1 className="poppins-bold">Event Source Summary</h1>
              <EventPieChart event={myEvent}/>
              <p className="poppins-semibold w-full text-center text-sm">Events created by you and Dayven</p>
            </div>

            <div className="border-t-3 border-t-gradient1 bg-smoothWhite rounded-lg flex flex-col gap-2 shadow-md border border-gray-200 w-full p-4  ">
              <MiniCalendar events={myEvent}/>
            </div>
          </div>

        </div>

        <div className="border-t-3 border-t-gradient1 bg-smoothWhite rounded-lg flex-1 flex flex-col gap-4 shadow-md border border-gray-200 w-full p-4 mb-8 md:mb-0">
          <div className="flex justify-between items-center">
            <h1 className="poppins-bold">Scheduled</h1>
            <button onClick={()=> setAddevent(true)} className="anim bg-gradient1 text-xs rounded-md text-smoothWhite poppins-semibold p-2 px-4 w-fit flex-center gap-2">Create Event <Plus size={15} strokeWidth={3}/></button>
          </div>
          <div className="flex flex-col gap-3 w-full">
            {/* Search bar at the top */}
            <div className="flex gap-2 border border-gray-200 shadow-sm rounded-lg w-[70%] p-2 px-4">
              <input
                type="text"
                value={Search}
                placeholder="Search Events"
                onChange={(e) => setSearch(e.target.value)}
                className="w-full outline-0 text-sm font-medium placeholder:text-myblack/70"
              />
              <See size={18} strokeWidth={2} />
            </div>

            {/* Filters row */}
            <div className="grid grid-cols-3 gap-3">
              {/* Date Filter */}
              <div className="flex flex-col gap-1">
                <label className="text-xs poppins-semibold text-gray-600">Date</label>
                <div className="flex gap-2 border border-gray-200 shadow-sm rounded-lg w-full items-center">
                  <input
                    value={FindDate}
                    onChange={(e) => setFindDate(e.target.value)}
                    type="date"
                    className="appearance-none bg-transparent text-sm font-medium p-2 px-4 outline-none w-full"
                  />
                </div>
              </div>

              {/* Priority Filter */}
              <div className="flex flex-col gap-1">
                <label className="text-xs poppins-semibold text-gray-600">Priority</label>
                <div className="flex gap-2 border border-gray-200 shadow-sm rounded-lg w-full pr-4 items-center">
                  <select
                    value={Prio}
                    onChange={(e) => setPrio(e.target.value)}
                    className="appearance-none bg-transparent text-sm font-medium p-2 px-4 outline-none w-full"
                  >
                    <option value="All">All</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                  <OctagonAlert size={18} strokeWidth={2} />
                </div>
              </div>

              {/* Status Filter */}
              <div className="flex flex-col gap-1">
                <label className="text-xs poppins-semibold text-gray-600">Status</label>
                <div className="flex gap-2 border border-gray-200 shadow-sm rounded-lg w-full pr-4 items-center">
                  <select
                    value={Order}
                    onChange={(e) => setOrder(e.target.value)}
                    className="appearance-none bg-transparent text-sm font-medium p-2 px-4 outline-none w-full"
                  >
                    <option value="All">All</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Scheduled">Scheduled</option>
                    <option value="Missed">Missed</option>
                    <option value="Completed">Completed</option>
                  </select>
                  <Funnel size={18} strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-h-143 pb-40 flex flex-col gap-3 overflow-scroll p-2">
            {queries.map((data,i)=>(
              <EventsData key={i} data={data}/>
            ))}

            {queries.length === 0 && <p className="motion-preset-blur-up-lg motion-delay-100 mt-30 text-myblack/70 poppins-semibold text-center w-full">No events found</p>}
            
          </div>

        </div>
      </div>

      {/* <div className="bg-smoothWhite rounded-lg flex-1 flex flex-col gap-2 shadow-md border border-gray-200 w-full p-4 md:p-8 ">
         This is a popUp for adding events
         mini calendar on right and then event details on left
      </div> */}

    </div>
  );
}