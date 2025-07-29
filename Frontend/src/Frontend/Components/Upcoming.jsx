import dayjs from "dayjs";
import { Clock } from "lucide-react";

export default function Upcoming({data}){

  return(
    <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow hover:shadow-md transition">
      <div className="flex flex-col items-center poppins-extrabold justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-md">
        <span className="text-xl ">{data.day}</span>
        <span className="text-sm  uppercase">{data.month}</span>
      </div>
      <div className="flex flex-col text-sm">
        <span className="text-base poppins-semibold text-myblack">{data.title}</span>
        <span className="text-gray-500 text-xs flex items-center gap-1 poppins-semibold"><Clock size={15} strokeWidth={2.5} /> {data.time}</span>
        <span className="mt-1 px-2 py-0.5 poppins-semibold bg-blue-100 text-blue-600 rounded text-xs w-fit">{data.type}</span>
      </div>
    </div>
  );
}