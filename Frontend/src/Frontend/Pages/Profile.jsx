import { Settings } from "lucide-react";
import { weekAvailability } from "../../Backend/Data/Data";
import { useEffect, useState } from "react";

export default function Profile(){

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
          <div className="bg-blue-200 text-blue-600 poppins-bold h-15 w-15 md:h-20 md:w-20 rounded-full flex-center">
            IMG
          </div>
          <div>
            <h3 className="poppins-extrabold text-xl md:text-4xl text-gradient1">Jhon Llyod Navarro</h3>
            <h4 className="text-sm md:text-base font-medium text-myblack/70">navarro.jhonllyod2005@gmail.com</h4>
          </div>
        </div>

          {/* line divider */}
        <div className="flex-center gap-4 md:gap-8"> 
          <div className="w-full space-y-2 h-[2px] rounded-full bg-gray-300"></div>
          <Settings size={35} className="text-gray-400"/>
          <div className="w-full space-y-2 h-[2px] rounded-full bg-gray-300"></div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="poppins-bold text-lg md:text-xl">Availabilty</h2>

          <div className="motion-preset-fade-md motion-delay-200 bg-smoothWhite p-4 rounded-xl border border-gray-200 shadow-md w-fit mb-4">
            <div className="flex items-center gap-2">
              <h3 className="poppins-bold text-xs md:text-base text-gray-700">Available Daily:</h3>
              <span className="poppins-bold text-base md:text-xl text-gradient1">9:00 AM – 5:00 PM</span>
            </div>
          </div>

          <div className="motion-preset-fade-md motion-delay-250 flex justify-between gap-[2px] text-center rounded-md shadow-md">
            {Setter.map((data) => (
              <div
                key={data.day}
                onClick={()=> setDays(data,Setter)}
                className={` transition-all ease-in duration-75
                            ${data.day === 'Sun' && 'rounded-l-lg'} ${data.day === 'Sat' && 'rounded-r-lg'} ${data.status === 'Unavailable' ? 'bg-red-400 hover:bg-red-300':'bg-green-400 hover:bg-green-300' }
                            flex-1  py-4 md:py-8 text-sm md:text-lg poppins-bold text-smoothWhite `}
              >
                {data.day}
              </div>
            ))}
          </div>

          <button onClick={Apply} disabled={!Changes} className={`self-center ${Changes ? 'bg-gradient1':'bg-gradient1/50'}  
          motion-preset-fade-md motion-delay-300
          text-xs md:text-sm rounded-md mt-3 md:mt-5 text-smoothWhite poppins-semibold p-2 px-4 w-fit`}>Apply changes</button>
        </div>

        <div>
          Working Schedule
        </div>


      </div>
    </div>
  );
}