import { SendHorizontal,Bot,User } from "lucide-react";

import { conversation } from "../../Backend/Data/Data";

export default function Chatbox(){

  return(
    <div className="mt-2 flex-1 flex flex-col h-full w-full px-6">
      <div className=" h-62 2xl:h-72 overflow-scroll pb-2 flex flex-col gap-2 w-full">
        {conversation && conversation.length > 0 ? (
          conversation.map((data, i) => (
            <div key={i} className={`flex gap-1 ${data?.type === 'AI' ? '': 'flex-row-reverse'} `}>
              <div className="h-8 w-8 flex-center rounded-full bg-gradient1">
                {data.type === 'AI' ? <Bot size={20} className="text-white"/>: <User size={20} className="text-white"/> }
              </div>
              <p className="text-sm border border-gray-200 p-1 px-2 rounded-lg shadow-md max-w-[50%]">{data.message}</p>
            </div>
          ))
        ) : (
          <h3 className="text-myblack/70 font-medium text-center mt-10">
            You’re all caught up! Enjoy a stress-free day.
          </h3>
        )}

      </div>

      <div className="mt-4 flex gap-2 border border-gray-200 shadow-sm rounded-lg w-full p-2 px-4">
        <input type="text" className="w-full outline-0 text-sm font-medium" />
        <SendHorizontal size={18} strokeWidth={2} />
      </div>
    </div>
  );
}