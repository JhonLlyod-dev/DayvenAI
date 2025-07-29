import { X,Plus } from "lucide-react";
import { useState } from "react";

import addEvent from "../../Backend/Functions/EventsAction";
// Addevent UI component
export default function Addevent({Visible,Close}){
const [isRepeating, setIsRepeating] = useState(false);

  const [Title, setTitle] = useState('');
  const [Type, setType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [allday, setAllday] = useState(false);
  const [description, setDescription] = useState('');

  // Add event function
  async function add() {
    if (!Title || !Type || !startDate || !startTime || !endTime) return console.log('Please fill all the fields');

    try {
      const Data = {
        title: Title,
        Description: description,
        timeIn: startTime,
        timeOut: endTime,
        type: Type,
        allday: allday,
        status: "Upcoming",
        setter: 'AI',
        date: startDate,
        Repeating: {
          type: "weekly",
          interval: 1
        }
      };

      await addEvent(Data);
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <div className={`" flex-center fixed z-30 top-0 left-0 w-full h-full bg-black/10 backdrop-blur-xs p-4 md:p-0 transition-all ease-in duration-200 ${Visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
      <div className="flex flex-col border border-gray-200 shadow-xs border-l-3 border-l-gradient1  bg-smoothWhite rounded-lg p-4 w-full md:w-1/2">
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
                <input value={Type} onChange={(e) => setType(e.target.value)} type="text" className="outline-0 text-sm font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4" />
              </div>

              {/* Start Date */}
              <div className="flex flex-col gap-1">
                <label className="poppins-bold text-xs md:text-sm">Start Date</label>
                <input value={startDate} onChange={(e) => setStartDate(e.target.value)} type="date" className="outline-0 text-myblack text-sm font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4" />
              </div>

              {/* End Date */}
              <div className="flex flex-col gap-1">
                <label className="poppins-bold text-xs md:text-sm">End Date</label>
                <input value={endDate} onChange={(e) => setEndDate(e.target.value)} type="date" className="outline-0 text-sm font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4" />
              </div>

              {/* Time In */}
              <div className="flex flex-col gap-1">
                <label className="poppins-bold text-xs md:text-sm">Time In</label>
                <input value={startTime} onChange={(e) => setStartTime(e.target.value)} type="time" className="outline-0 text-sm font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4" />
              </div>

              {/* Time Out */}
              <div className="flex flex-col gap-1">
                <label className="poppins-bold text-xs md:text-sm">Time Out</label>
                <input value={endTime} onChange={(e) => setEndTime(e.target.value)} type="time" className="outline-0 text-sm font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4" />
              </div>

              {/* All Day */}
              <div className="flex flex-col gap-1">
                <label className="poppins-bold text-xs md:text-sm">All Day</label>
                <select value={allday} onChange={(e) => setAllday(e.target.value === 'true')} className="outline-0 text-sm font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4">
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </div>



              {/* Repeating Toggle */}
              <div className="flex flex-col gap-1">
                <label className="poppins-bold text-xs md:text-sm">Is Repeating?</label>
                <select
                  className="outline-0 text-sm font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4"
                  value={isRepeating ? 'yes' : 'no'}
                  onChange={(e) => setIsRepeating(e.target.value === 'yes')}
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              {/* Repeating Field (if enabled) */}
              {isRepeating && (
                <div className="flex flex-col gap-1 md:col-span-2">
                  <label className="poppins-bold text-xs md:text-sm">Repeat Every (days of the week 0 - 6)</label>
                  <input
                    type="text"
                    placeholder="e.g. Every Monday, Weekly, Monthly"
                    className="outline-0 text-sm font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4"
                  />
                </div>
              )}
            </div>

            {/* Description - Full width */}
            <div className="flex flex-col gap-1">
              <label className="poppins-bold text-xs md:text-sm">Description</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} className="outline-0 text-sm font-medium border border-gray-200 shadow-sm rounded-lg p-2 px-4 resize-none" />
            </div>
          </div>

          <button onClick={add} className="bg-gradient1 text-xs rounded-md text-smoothWhite poppins-semibold p-2 px-4 w-fit flex-center gap-2">Add <Plus size={15} strokeWidth={3}/></button>

      </div>
    </div>
  );
}