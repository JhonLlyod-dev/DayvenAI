import { SendHorizontal,Bot,User,Clock } from "lucide-react";
import { useState,useEffect,useRef } from "react";
import ReactMarkdown from 'react-markdown';

import { conversation2 } from "../../Backend/Data/Data";
import AskAI from "../../Backend/Functions/api";
import { main } from "../../Backend/API/AI";
import Waiting from "../Components_small/waiting";

export default function Chatbox(){

  const [Prompt,setPrompt] = useState('');

  const [conversation, setConversation] = useState([
    {
      type:'AI',
      message: {
        response: '👋 Hello! Let’s take control of your time today.',
      }
    }
  ]);
   async function ask(prompt){

    const usermsg = {
      type:'USER',
      message: {
        response: prompt
      }
    }
    const updatedMessages = [...conversation,usermsg];

    const memory = updatedMessages.map((message) => `${message.type}: ${message.message}`).join('\n');

    setConversation([...updatedMessages,{ type: 'AI', message: { response: '...'} }]);

    setPrompt('');

    let AI_response = {};

    try {
     const response = await main(prompt,memory);

     try {
      const parsedResponse = JSON.parse(response);
      AI_response = parsedResponse;
     } catch (error) {
      console.error('Error parsing response:', error);
     }

     setConversation([...updatedMessages, { type: 'AI', message: AI_response }]);
    } catch (error) {
      setConversation([...updatedMessages, { type: 'AI', message: { response: error.message } }]);
    }

  }

  function handleSubmit(e){
    if(e.key === 'Enter' ){
      if(Prompt !== ''){ 
        ask(Prompt);
      } else{
        console.log('Input is empty nabuyong ka?');
        return;
      }
    }
  }


  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation]);


  return(
    <div className="mt-2 flex-1 flex flex-col h-full w-full px-6">
      <div className=" h-62 2xl:h-72 overflow-scroll pb-2 flex flex-col gap-2 w-full">
        {conversation && conversation.length > 0 ? (
          conversation.map((data, i) => (
            <div key={i} className={`motion-preset-fade-md flex gap-1 ${data?.type === 'AI' ? '': 'flex-row-reverse'} `}>
              <div className="h-8 w-8 flex-center rounded-full bg-gradient1">
                {data.type === 'AI' ? <Bot size={20} className="text-white"/>: <User size={20} className="text-white"/> }
              </div>
              { data.message === '...' ?
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
        <div ref={bottomRef}/>
      </div >

      <div className="mt-4 flex gap-2 border border-gray-200 shadow-sm rounded-lg w-full p-2 px-4">
        <input type="text" onKeyDown={(e) => handleSubmit(e)} value={Prompt}  onChange={(e) => setPrompt(e.target.value)} className="w-full outline-0 " />
        <SendHorizontal onClick={() => ask(Prompt)} className="anim" size={18} strokeWidth={2} />
      </div>
    </div>
  );
}


function ChatData({data}){


  return(
    <div className="bg-white rounded-lg p-3 max-w-[90%] md:max-w-[75%] shadow-sm border border-gray-200">
      <ReactMarkdown
        components={{
          p: ({ node, ...props }) => (
            <p className="text-sm text-[#151B31] leading-[1.5] mb-2" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc pl-5 text-sm text-[#151B31] mb-2" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal pl-5 text-sm text-[#151B31] mb-2" {...props} />
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
            <blockquote className="border-l-4 border-[#151B31] pl-3 text-sm italic text-[#151B31] bg-[#f9f9fb] rounded mb-2" {...props} />
          ),
          code: ({ node, ...props }) => (
            <code className="bg-[#f0f0f3] text-[#151B31] text-sm px-1 py-0.5 rounded" {...props} />
          ),
          pre: ({ node, ...props }) => (
            <pre className="bg-[#151B31] text-white text-sm p-3 rounded-md overflow-x-auto mb-3" {...props} />
          ),
        }}
      >
        {data.message.response}
      </ReactMarkdown>
      { data.type === 'AI' && data.message.event && <EventModal data={data.message.event}/>}
        
    </div>

  );
}

function EventModal({data}){

  return(
      <div className="mt-6 flex flex-col bg-smoothWhite shadow-sm border border-gray-200 rounded-lg border-l-3 text-sm border-l-gradient1 p-2 px-4">
        <div className="flex justify-between items-center mb-1">
          <h3 className="font-semibold">Quiz Comprog</h3>
          <span className="text-xs font-semibold">High</span>
        </div>

        <span className="text-xs text-gray-500 poppins-semibold">
          Aug 12, 2025
        </span>

        <span className="text-xs text-gray-500 flex items-center gap-1 poppins-semibold">
          <Clock size={15} strokeWidth={2.5} /> All day
        </span>

        <span className="mt-1 px-2 py-0.5 poppins-semibold bg-blue-100 text-blue-600 rounded text-xs w-fit">
          Assignment
        </span>
        <span className="mt-2 text-xs text-gray-500 flex items-center gap-1 poppins-semibold">
          Hi there kupal
        </span>

        <button className="mt-5 self-center anim bg-gradient1 text-xs rounded-md text-smoothWhite poppins-semibold p-2 px-6 w-fit flex-center gap-2">Add</button>
      </div>
  )
}

