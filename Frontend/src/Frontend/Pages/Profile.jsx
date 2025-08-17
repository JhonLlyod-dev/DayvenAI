import { Settings, Download, Wrench, Loader, Lightbulb,ArrowUp } from "lucide-react";
import { weekAvailability } from "../../Backend/Data/Data";
import { useEffect, useState } from "react";
import Table from "../Components/Table";

export default function Profile({user}){

  const [Setter,setSetter] = useState(weekAvailability);
  const [Changes,setChanges]= useState(false);


  function Apply(){
    setChanges(false);
  }

  function setDays(Data, daysArray) {
    setChanges(true);
    const updatedArray = daysArray.map(day => {
      if (day.day === Data.day) {
        return {
          ...day,
          status: day.status === 'Available' ? 'Unavailable' : 'Available'
        };
      }
      return day;
    });

    setSetter(updatedArray);
  }

  return(
    <div className="motion-preset-fade-md motion-delay-75 flex flex-col gap-4 w-full h-full xl:px-16 md:px-8 p-4">
      <div>
        <h2 className="poppins-bold text-xl md:text-2xl">My Profile</h2>
        <p className="text-sm md:text-base font-medium text-myblack/70">Personalize your experience and keep your details up to date.</p>
      </div>

      <div className=" bg-smoothWhite rounded-lg flex flex-col gap-2 shadow-md border border-gray-200 w-full p-4 md:p-8 ">
        <div className="motion-preset-fade-md motion-delay-150 flex items-center  gap-2 mb-10">
          <img src={user.photoURL} className="bg-blue-200 text-blue-600 poppins-bold h-15 w-15 md:h-20 md:w-20 rounded-full flex-center"/>
 
          <div>
            <h3 className="poppins-extrabold text-xl md:text-4xl text-gradient1">{user.displayName}</h3>
            <h4 className="text-sm md:text-base font-medium text-myblack/70">{user.email}</h4>
          </div>
        </div>

          {/* line divider */}
        <div className="flex-center gap-4 md:gap-8"> 
          <div className="w-full space-y-2 h-[2px] rounded-full bg-gray-300"></div>
          <Settings size={35} className="text-gray-400"/>
          <div className="w-full space-y-2 h-[2px] rounded-full bg-gray-300"></div>
        </div>

        <div className="mt-10 flex-center flex-col gap-2 text-center">
          <Loader size={35} className="text-gray-400 animate-spin" />

          <h1 className="poppins-bold text-2xl text-gradient1">Work in Progress</h1>
          <p className="text-sm md:text-base font-medium text-myblack/70">
            The Developer is still thinking what to put here
          </p>

          <div className="mt-4 flex items-center gap-3 rounded-xl border border-dashed p-3 text-gray-700 cursor-pointer hover:text-gradient1 hover:border-gradient1 transition">
            <Lightbulb className="h-4 w-4" />
            <p className="text-sm">
              Got ideas? Jot them down here or come back later for updates.
            </p>
          </div>

          <div className="text-myblack/70 flex-center flex-col mt-4">
            <ArrowUp className="animate-bounce" />
            <p className="text-sm md:text-base font-medium">Click up here!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

