
import { Clock } from "lucide-react";
import { useState} from "react";
import { EllipsisVertical,X,Plus } from "lucide-react";
import Notif from "../Components_small/Notif";
import MiniLoad from "../Components_small/miniload";

import { setTime,formatToMonthDay } from "../../Backend/Functions/TimeFilter";

import { DeleteEvent,UpdateEventData,UpdateEvent } from "../../Backend/Functions/EventsAction";

export default function EventsData({data}){
  const [Loading, setLoading] = useState(false);
  const [Pop2, setPop2] = useState(false);
  const [Error, setError] = useState(false);

  const [Title, setTitle] = useState(data.title);
  const [Type, setType] = useState(data.type);

  const [startDate, setStartDate] = useState(data.start);
  const [endDate, setEndDate] = useState(data.end);
  
  const [allday, setAllday] = useState(data.allday);
  const [startTime, setStartTime] = useState(data.time.start);
  const [endTime, setEndTime] = useState(data.time.end);

  const [Priority,setPriority] = useState(data.priority);

  const [Note, setNote] = useState(data.note);


  // Add event function
  async function Update() {
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


    const newdata = {
      title: Title,
      type: Type,
      start: startDate,
      end: endDate,
      allday: allday,
      time: Time,
      priority: Priority,
      note: Note,
      status: 'Scheduled',
      activty:'Active',
    }

    console.table(newdata);

    try {
      await UpdateEventData(newdata ,data.id);
      setPop2(true);
      setTimeout(() => {
        setPop2(false);
        setUpdateModal(false);
      },2000);
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      },2000);
    }

    setLoading(false);
  }

  const Time = ()=>{

    let Time = '';

    if(data.time.allDay === true){
      Time = 'All day';
    } else if(data.time.start === data.time.end){
      Time = setTime(data.time.start);
    } else {
      Time = `${setTime(data.time.start)} - ${setTime(data.time.end)}`;
    }


    return Time;
  }

  const Date = formatToMonthDay(data.start);
  const [Pop,setPop] = useState(false);
  const Popup = () => {

    return (
      <div className={`absolute z-5 border border-gray-200 border-t-3 border-t-gradient1 bg-smoothWhite rounded-lg w-70 top-1/8 md:left-[45%]   flex flex-col p-4
      motion-preset-fade-md`}>
        <div className="flex items-center justify-between">
          <span className="text-sm poppins-semibold text-myblack">{data.title}</span>
          <span className="text-xs poppins-semibold text-myblack">{data.status}</span>
        </div>
        <span className="text-xs text-gray-500 flex items-center gap-1 poppins-semibold"><Clock size={15} strokeWidth={2.5} />{data.time.allDay === true ? 'All day' : Time()} </span>
        <span className="mt-1 px-2 py-0.5 poppins-semibold bg-blue-100 text-blue-600 rounded text-xs w-fit">{data.type}</span>
        <span className="mt-2 text-xs text-gray-500 flex items-center gap-1 poppins-semibold">{data.note}</span>
      </div>
    )
  }

  const [ActionPop,setActionPop] = useState(false);
  const [UpdateModal,setUpdateModal] = useState(false);

  // UI for action buttons like mark as done, edit, delete
  const Action = (
    <div className="absolute z-5 border border-gray-200 border-t-3 border-t-gradient1 bg-smoothWhite rounded-lg w-fit top-1/4 right-10  flex flex-col p-4 gap-2 motion-preset-fade-md">
      <button className="text-sm poppins-semibold anim  hover:text-green-500 transition hover:underline" onClick={async () => await UpdateEvent(data.id,'Completed')}>Mark as done</button>
      <button className="text-sm poppins-semibold anim  hover:text-gradient1 transition hover:underline" onClick={() => setUpdateModal(true)} >Edit</button>
      <button className="text-sm poppins-semibold anim hover:text-red-500 transition hover:underline" onClick={async () => await DeleteEvent(data.id)} >Delete</button>
    </div>
  );

  const UpdateEventModal = (
    <div className=" absolute z-5 top-1/4 flex flex-col border border-gray-200 shadow-xs border-t-3 border-t-gradient1  bg-smoothWhite rounded-lg p-2 w-150">
        <div className="flex items-center justify-between w-full">
          <h2 className="poppins-bold text:xs md:text-sm">Update Event</h2>
          <X size={16} onClick={() => setUpdateModal(false)} className="hover:text-gradient1" strokeWidth={3}/>
        </div>
        <div className="w-full p-3 rounded-xl ">
          {/* Grid layout for grouped inputs */}
          <div className="grid grid-cols-4 gap-2">

            {/* Title */}
            <div className="flex flex-col gap-1 text-xs">
              <label className="poppins-bold">Title</label>
              <input value={Title} onChange={(e) => setTitle(e.target.value)} type="text" className="outline-0 text-sm font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4" />
            </div>

            {/* Type */}
            <div className="flex flex-col gap-1 text-xs">
              <label className="poppins-bold ">Type</label>
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
            <div className="flex flex-col gap-1 text-xs">
              <label className="poppins-bold ">Start Date</label>
              <input value={startDate} onChange={(e) => {setStartDate(e.target.value); setEndDate(e.target.value);}} type="date" className=" outline-0 text-myblack text-sm font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4" />
            </div>

            {/* End Date */}
            <div className="flex flex-col gap-1 text-xs">
              <label className="poppins-bold ">End Date</label>
              <input value={endDate} onChange={(e) => setEndDate(e.target.value)} type="date" className="outline-0 text-sm font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4" />
            </div>

            {/* All Day */}
            <div className="flex flex-col gap-1 text-xs">
              <label className="poppins-bold ">All Day</label>
              <select value={allday} onChange={(e) => setAllday(e.target.value === 'true')} className="w-fit outline-0 text-sm font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4">
                <option value="false" >No</option>
                <option value="true">Yes</option>
              </select>
            </div>

            <div className="flex flex-col gap-1 text-xs">
              <label className="poppins-bold ">Set Priority</label>
              <select value={Priority} onChange={(e) => setPriority(e.target.value)} className="outline-0 text-sm font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4">
                <option value="High" >High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            { !allday &&
              <div className=" motion-preset-fade-sm col-span-2 flex items-center justify-between w-full text-xs">
                {/* Time In */}
                <div className="flex flex-col gap-1">
                  <label className="poppins-bold ">Time In</label>
                  <input value={startTime} onChange={(e) => {setStartTime(e.target.value); setEndTime(e.target.value);}} type="time" className="outline-0 font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4" />
                </div>

                {/* Time Out */}
                <div className="flex flex-col gap-1">
                  <label className="poppins-bold ">Time Out</label>
                  <input value={endTime} onChange={(e) => setEndTime(e.target.value)} type="time" className="outline-0 font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4" />
                </div>
              </div>
            }
          </div>

          {/* Description - Full width */}
          <div className="flex flex-col gap-1 text-xs">
            <label className="poppins-bold ">Note</label>
            <textarea value={Note} onChange={(e) => setNote(e.target.value)} rows={2} className="outline-0  font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4 resize-none" />
          </div>
        </div>

        <button disabled={Loading} onClick={Update} className="bg-gradient1 self-center anim  text-xs rounded-md text-smoothWhite poppins-semibold p-2 px-4 w-fit flex-center gap-2">
          
          {!Loading ? <>Update</>: <MiniLoad/>}
        </button>

    </div>
  )


  return(
    <div  className="relative cursor-pointer flex items-center gap-4 p-3 bg-white rounded-lg shadow hover:shadow-md transition">
          {Pop2 && <Notif type="success" message="Updated successfully"/>}
          {Error && <Notif type="error" message="Failed to update event"/>}
      {UpdateModal && UpdateEventModal}
      <div onMouseEnter={() => setPop(true)} onMouseLeave={() => setPop(false)} className="flex items-center gap-4 flex-1">
        {Pop && Popup()}
        <div className="flex flex-col items-center poppins-extrabold justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-md">
          <span className="text-xl ">{Date.day}</span>
          <span className="text-sm  uppercase">{Date.month}</span>
        </div>
        <div className="flex-1 flex flex-col text-sm">
          <span className="text-base poppins-semibold text-myblack">{data.title}</span>
          <span className="text-gray-500 text-xs flex items-center gap-1 poppins-semibold"><Clock size={15} strokeWidth={2.5} /> {data.time.allDay === true ? 'All day' : Time()}</span>
          <span className="mt-1 px-2 py-0.5 poppins-semibold bg-blue-100 text-blue-600 rounded text-xs w-fit">{data.type}</span>
        </div>
      </div>
      <div onMouseEnter={() => setActionPop(true)} onMouseLeave={() => setActionPop(false)} className="pl-3">
        {ActionPop && Action}
        <EllipsisVertical size={20} strokeWidth={2}/>
      </div>
    </div>
  );

}
