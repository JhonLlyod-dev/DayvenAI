import dayjs from "dayjs";
import { Clock } from "lucide-react";
import { useState} from "react";
import { EllipsisVertical } from "lucide-react";

export default function EventsData({data}){

  const [Pop,setPop] = useState(false);
  const Popup = () => {

    return (
      <div className={`absolute z-5 border border-gray-200 border-t-3 border-t-gradient1 bg-smoothWhite rounded-lg w-70 top-1/8 md:left-[45%]   flex flex-col p-4
      motion-preset-fade-md`}>
        <div className="flex items-center justify-between">
          <span className="text-sm poppins-semibold text-myblack">{data.title}</span>
          <span className="text-xs poppins-semibold text-myblack">Today</span>
        </div>
        <span className="text-xs text-gray-500 flex items-center gap-1 poppins-semibold"><Clock size={15} strokeWidth={2.5} /> {data.time}</span>
        <span className="mt-1 px-2 py-0.5 poppins-semibold bg-blue-100 text-blue-600 rounded text-xs w-fit">{data.type}</span>
        <span className="mt-2 text-xs text-gray-500 flex items-center gap-1 poppins-semibold">✅ A new event 'Marketing Presentation' has been added to your calendar.</span>
      </div>
    )
  }

  const [ActionPop,setActionPop] = useState(false);

  // UI for action buttons like mark as done, edit, delete
  const Action = (
    <div className="absolute z-5 border border-gray-200 border-t-3 border-t-gradient1 bg-smoothWhite rounded-lg w-fit top-1/4 right-10  flex flex-col p-4 gap-2 motion-preset-fade-md">
      <button className="text-sm poppins-semibold  hover:text-green-500 transition" onClick={() => console.log('Mark as done')}>Mark as done</button>
      <button className="text-sm poppins-semibold  hover:text-gradient1 transition" onClick={() => console.log('Edit')}>Edit</button>
      <button className="text-sm poppins-semibold  hover:text-red-500 transition" onClick={() => console.log('Delete')}>Delete</button>
    </div>
  );


  return(
    <div  className="relative cursor-pointer flex items-center gap-4 p-3 bg-white rounded-lg shadow hover:shadow-md transition">
      <div onMouseEnter={() => setPop(true)} onMouseLeave={() => setPop(false)} className="flex items-center gap-4 flex-1">
        {Pop && Popup()}
        <div className="flex flex-col items-center poppins-extrabold justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-md">
          <span className="text-xl ">{data.day}</span>
          <span className="text-sm  uppercase">{data.month}</span>
        </div>
        <div className="flex-1 flex flex-col text-sm">
          <span className="text-base poppins-semibold text-myblack">{data.title}</span>
          <span className="text-gray-500 text-xs flex items-center gap-1 poppins-semibold"><Clock size={15} strokeWidth={2.5} /> {data.time}</span>
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