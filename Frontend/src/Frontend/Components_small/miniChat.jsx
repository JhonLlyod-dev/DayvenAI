import {Bot,User,Clock,CircleCheck,CirclePlus,Calendar } from "lucide-react";
import { useState,useEffect,useRef } from "react";
import ReactMarkdown from 'react-markdown';
import dayjs from "dayjs";
import { setTime } from "../../Backend/Functions/TimeFilter";

import { Convo } from "../../Backend/Data/Data";
export default function MiniChat(){

  return(
    <div div className=" intersect-once intersect:motion-preset-fade-lg motion-delay-600  flex flex-col gap-2 w-full">
      {Convo && Convo.length > 0 ? (
        Convo.map((data, i) => (
          <div key={i} className={`motion-preset-fade-md flex gap-1 ${data?.role === 'ai' ? '': 'flex-row-reverse'} `}>
            <div className="h-8 w-8 flex-center rounded-full bg-gradient1">
              {data.role === 'ai' ? <Bot size={20} className="text-white"/>: <User size={20} className="text-white"/> }
            </div>
            { data.response === '...' ?
              <p className="text-sm border border-gray-200 p-1 px-2 rounded-lg shadow-md max-w-[50%]"><Waiting/></p>
                : 
              <ChatData data={data} />
            }
          </div>
        ))
      ) : (
        <h3 className="text-myblack/70 font-medium text-center mt-10">
          You’re all caught up! Enjoy a stress-free day.
        </h3>
      )}
      <div/>
    </div >
  );
}

function ChatData({data}){


  return(
    <div className="bg-white rounded-lg p-3 max-w-[90%] md:max-w-[75%] shadow-sm border border-gray-200">
      <ReactMarkdown
        components={{
          p: ({ node, ...props }) => (
            <p className="text-xs text-[#151B31] leading-[1.5] mb-2" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc pl-5 text-xs text-[#151B31] mb-2" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal pl-5 text-xs text-[#151B31] mb-2" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="mb-1 leading-[1.5]" {...props} />
          ),
          strong: ({ node, ...props }) => (
            <strong className="font-semibold text-[#151B31]" {...props} />
          ),
          em: ({ node, ...props }) => (
            <em className="italic text-[#151B31]/90" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-[#151B31] pl-3 text-xs italic text-[#151B31] bg-[#f9f9fb] rounded mb-2" {...props} />
          ),
          code: ({ node, ...props }) => (
            <code className="bg-[#f0f0f3] text-[#151B31] text-xs px-1 py-0.5 rounded" {...props} />
          ),
          pre: ({ node, ...props }) => (
            <pre className="bg-[#151B31] text-white text-xs p-3 rounded-md overflow-x-auto mb-3" {...props} />
          ),
        }}
      >
        {data.response}
      </ReactMarkdown>
      { data.role === 'ai' && data.event && <EventModal data={data.event}/>}
        
    </div>

  );
}

function EventModal({data}){

  const [isAdded, setIsAdded] = useState(true);

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

  return(
      <div className="mt-3 flex flex-col bg-smoothWhite shadow-sm border border-gray-200 rounded-lg border-l-3 text-sm border-l-gradient1 p-2 px-4">
        <div className="flex justify-between items-center mb-1">
          <h3 className="font-semibold">{data.title}</h3>
          <span className="text-xs font-semibold">{data.priority}</span>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 poppins-semibold">
          <span className="flex items-center gap-1">
            <Calendar size={15} strokeWidth={2.5} />
            {data.start !== data.end
              ? dayjs(data.start).format(' MMM D, YYYY') + ' - ' + dayjs(data.end).format(' MMM D, YYYY')
              : dayjs(data.start).format(' MMM D, YYYY')}
          </span>

          <span className="flex items-center gap-1">
            <Clock size={15} strokeWidth={2.5} /> {data.time.allDay ? 'All day' : Time()}
          </span>
        </div>


        <span className="mt-1 px-2 py-0.5 poppins-semibold bg-blue-100 text-blue-600 rounded text-xs w-fit">
          {data.type}
        </span>
        <span className="mt-2 text-xs text-gray-500 flex items-center gap-1 poppins-semibold">
          {data.note}
        </span>
        

        <button disabled={isAdded} className=" disabled:cursor-not-allowed mt-5 self-center anim bg-gradient1 text-xs rounded-md text-smoothWhite poppins-semibold p-2 px-6 w-fit flex-center gap-2">
          {isAdded ? <><CircleCheck size={18} strokeWidth={2} /> Added</> : <> <CirclePlus size={18} strokeWidth={2} /> Add to Calendar</>}
        </button>
      </div>
  )
}