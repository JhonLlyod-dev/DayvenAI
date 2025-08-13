import { Clock,ClockAlert} from "lucide-react";
import { setTime } from "../../Backend/Functions/TimeFilter";

export default function Reminder({data}){

  const Time = ()=>{

    let Time = '';

    if(data.time.allDay === true){
      Time = 'All day';
    } else if(data.time.start === data.time.end){
      Time = setTime(data.time.start);
    } else {
      Time = `${setTime(data.time.end)}`;
    }

    return Time;
  } 

  const statusStyles = {
    "Ongoing": "text-amber-500",     // In progress
    "Scheduled": "text-gradient1",   // Upcoming
    "Missed": "text-red-600",        // Not done
    "Completed": "text-green-500",   // Successfully finished
  };

  const statusBG = {
    "Ongoing": "bg-amber-500",
    "Scheduled": "bg-gradient1",
    "Missed": "bg-red-600",
    "Completed": "bg-green-500",
  };

  const statusBorder = {
    "Ongoing": "border-l-amber-500",
    "Scheduled": "border-l-gradient1",
    "Missed": "border-l-red-600",
    "Completed": "border-l-green-500",
  }

  
  return(
    <div  className={`  flex items-center justify-between bg-smoothWhite rounded-lg shadow-sm px-4 py-3 border-l-3 ${statusBorder[data.status]} border border-gray-200 w-full`}>
      {/* Icon + Content */}
      <div className="flex-center gap-3 w-full min-w-0">
        {/* Type Icon */}
        {data.status === 'Missed' ? <ClockAlert className={`${statusStyles[data.status]}`}  strokeWidth={2.5} /> : <Clock className={`${statusStyles[data.status]}`} /> }

        {/* Main Content */}
        <div className="flex flex-col w-full min-w-0">
          <h4 className={`poppins-semibold text-sm ${statusStyles[data.status]}`}>{data.title}</h4>
          <p className="text-sm font-medium text-gray-500 truncate">{data.note}</p>
        </div>
      </div>

      {/* Time + Status */}
      <div className="flex flex-col items-end text-right text-xs font-semibold text-gray-600 whitespace-nowrap ml-4">
        <span className="font-bold">{Time()}</span>

        <span className={`${statusStyles[data.status]} mt-1 flex items-center gap-1`}>
          <span className={`inline-block w-2 h-2 ${statusBG[data.status]} rounded-full`}></span>
            {data.status}
        </span>
      </div>
    </div>
  );
}