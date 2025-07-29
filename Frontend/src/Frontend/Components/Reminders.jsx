import { Clock } from "lucide-react";

export default function Reminder({data}){

  const statusStyles = {
    "On Time": "text-green-500 ",
    "Scheduled": "text-gradient1 ",
    "Missed": "text-red-500 ",
  };
  const statusBG = {
    "On Time": "bg-green-500 ",
    "Scheduled": "bg-gradient1 ",
    "Missed": "bg-red-500 ",
  };

  return(
    <div  className="flex items-center justify-between bg-white rounded-lg shadow-sm px-4 py-3 border-l-3 border-l-gradient1 border border-gray-200 w-full">
      {/* Icon + Content */}
      <div className="flex-center gap-3 w-full min-w-0">
        {/* Type Icon */}
        <Clock className={`${statusStyles[data.status]}`} />

        {/* Main Content */}
        <div className="flex flex-col w-full min-w-0">
          <h4 className="font-semibold text-sm text-myblack">{data.title}</h4>
          <p className="text-sm font-medium text-gray-500 truncate">{data.message}</p>
        </div>
      </div>

      {/* Time + Status */}
      <div className="flex flex-col items-end text-right text-xs font-semibold text-gray-600 whitespace-nowrap ml-4">
        <span className="font-bold">{data.time}</span>
        <span className={`${statusStyles[data.status]} mt-1 flex items-center gap-1`}>
          <span className={`inline-block w-2 h-2 ${statusBG[data.status]} rounded-full`}></span>
            {data.status}
        </span>
      </div>
    </div>
  );
}