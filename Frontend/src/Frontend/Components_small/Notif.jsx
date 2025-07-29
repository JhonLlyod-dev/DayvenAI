import { Info } from "lucide-react";
import { useEffect, useState } from "react";
export default function Notif(prop){
  const Color = {
    "info": "border-l-gradient1 border-gray-200 text-gradient1",
    "success": "border-l-green-500 border-gray-200 text-green-600",
    "warning": "border-l-yellow-500 border-gray-200 text-yellow-600",
    "error": "border-l-red-500 border-gray-200 text-red-600",
  }

  const [hide,sethide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      sethide(true);
    }, 4000);
  }, []);


  return (
    <div className={`absolute z-40 top-4 left-1/2 -translate-x-1/2  w-fit flex gap-2 items-center font-medium rounded-lg px-4 py-2 bg-smoothWhite
     shadow-sm border-l-4 border-l-gradient1 border border-gray-200 
     ${Color[prop.type]}
     ${hide ? 'motion-scale-out-0' : 'motion-preset-fade-md'}
     `}>
      <Info  size={20} strokeWidth={2.5}/>
      <p>{prop.message}</p>
    </div>
  );

}