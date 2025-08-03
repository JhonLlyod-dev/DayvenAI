import { X,Plus } from "lucide-react";
import { useState } from "react";

import addEvent from "../../Backend/Functions/EventsAction";

import Notif from "../Components_small/Notif";
import MiniLoad from "../Components_small/miniload";
import { set } from "firebase/database";
// Addevent UI component
export default function Addevent({Visible,Close,UID}) {
  const [Loading, setLoading] = useState(false);
  const [Pop, setPop] = useState(false);
  const [Error, setError] = useState(false);

  const [Title, setTitle] = useState('');
  const [Type, setType] = useState('');

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  const [allday, setAllday] = useState('true');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const [Priority,setPriority] = useState('High');

  const [Note, setNote] = useState('');

  const reset = () => {
    setTitle('');
    setType('');
    setStartDate('');
    setEndDate('');
    setAllday('true');
    setStartTime('');
    setEndTime('');
    setPriority('High');
    setNote('');
  }


  // Add event function
  async function add() {
    setLoading(true);
    if (!Title || !Type || !startDate || !Priority || !Note) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      setLoading(false);
      return; // prevent submit logic from running
    }
    
    let Time = {};
    if (allday === 'true' || allday === true) {
      Time = { allDay: true };
    } else {
      Time = { start: startTime, end: endTime };
    }

    try {
      await addEvent(Title,Type,startDate,endDate,allday,Time,Priority,Note,'User',UID);
      setPop(true);
      setTimeout(() => {
        setPop(false);
      },2000);
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      },2000);
    }

    setLoading(false);
    reset();
  }



  return(
    <div className={`" flex-center fixed z-30 top-0 left-0 w-full h-full bg-black/10 backdrop-blur-xs p-4 md:p-0 transition-all ease-in duration-200 ${Visible ? 'motion-preset-fade-sm' : 'hidden'}`}>
      {Pop && <Notif type="success" message="Event added successfully"/>}
      {Error && <Notif type="error" message="Failed to add event"/>}
      <div className="flex flex-col border border-gray-200 shadow-xs border-t-3 border-t-gradient1  bg-smoothWhite rounded-lg p-4 w-full md:w-1/4">
          <div className="flex items-center justify-between w-full">
            <h2 className="poppins-bold text-base md:text-xl">Add new Events</h2>
            <X onClick={Close} size={20} className="hover:text-gradient1" strokeWidth={3}/>
          </div>
          <div className="w-full p-6 rounded-xl space-y-4">
            {/* Grid layout for grouped inputs */}
            <div className="grid grid-cols-2 gap-4">

              {/* Title */}
              <div className="flex flex-col gap-1">
                <label className="poppins-bold text-xs md:text-sm">Title</label>
                <input value={Title} onChange={(e) => setTitle(e.target.value)} type="text" className="outline-0 text-sm font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4" />
              </div>

              {/* Type */}
              <div className="flex flex-col gap-1">
                <label className="poppins-bold text-xs md:text-sm">Type</label>
                <select  value={Type} onChange={(e) => setType(e.target.value)} className="outline-0 text-sm font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4">
                  <option disabled value={''}>Select Type</option>
                  <option value="Assignment">Assignment</option>
                  <option value="Exam">Exam</option>
                  <option value="Presentation">Presentation</option>
                  <option value="Meeting">Meeting</option>
                  <option value="Deadline">Deadline</option>
                  <option value="Task">Task</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Discussion">Discussion</option>
                  <option value="Interview">Interview</option>
                  <option value="Training">Training</option>
                  <option value="Planning">Planning</option>
                  <option value="Event">Event</option>
                  <option value="Review">Review</option>
                </select>
              </div>

              {/* Start Date */}
              <div className="flex flex-col gap-1">
                <label className="poppins-bold text-xs md:text-sm">Start Date</label>
                <input value={startDate} onChange={(e) => {setStartDate(e.target.value); setEndDate(e.target.value);}} type="date" className=" outline-0 text-myblack text-sm font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4" />
              </div>

              {/* End Date */}
              <div className="flex flex-col gap-1">
                <label className="poppins-bold text-xs md:text-sm">End Date</label>
                <input value={endDate} onChange={(e) => setEndDate(e.target.value)} type="date" className="outline-0 text-sm font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4" />
              </div>

              {/* All Day */}
              <div className="flex flex-col gap-1">
                <label className="poppins-bold text-xs md:text-sm">All Day</label>
                <select value={allday} onChange={(e) => setAllday(e.target.value === 'true')} className="w-fit outline-0 text-sm font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4">
                  <option value="false" >No</option>
                  <option value="true">Yes</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="poppins-bold text-xs md:text-sm">Set Priority</label>
                <select value={Priority} onChange={(e) => setPriority(e.target.value)} className="outline-0 text-sm font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4">
                  <option value="High" >High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              { !allday &&
                <div className=" motion-preset-fade-sm col-span-2 flex items-center justify-between w-full">
                  {/* Time In */}
                  <div className="flex flex-col gap-1">
                    <label className="poppins-bold text-xs md:text-sm">Time In</label>
                    <input value={startTime} onChange={(e) => {setStartTime(e.target.value); setEndTime(e.target.value);}} type="time" className="outline-0 text-sm font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4" />
                  </div>

                  {/* Time Out */}
                  <div className="flex flex-col gap-1">
                    <label className="poppins-bold text-xs md:text-sm">Time Out</label>
                    <input value={endTime} onChange={(e) => setEndTime(e.target.value)} type="time" className="outline-0 text-sm font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4" />
                  </div>
                </div>
              }
            </div>

            {/* Description - Full width */}
            <div className="flex flex-col gap-1">
              <label className="poppins-bold text-xs md:text-sm">Note</label>
              <textarea value={Note} onChange={(e) => setNote(e.target.value)} rows={3} className="outline-0 text-sm font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4 resize-none" />
            </div>
          </div>

          <button disabled={Loading} onClick={add} className="bg-gradient1 self-center anim  text-xs rounded-md text-smoothWhite poppins-semibold p-2 px-4 w-fit flex-center gap-2">
            
            {!Loading ? <>Add <Plus size={15} strokeWidth={3}/> </>: <MiniLoad/>}
          </button>

      </div>
    </div>
  );
}