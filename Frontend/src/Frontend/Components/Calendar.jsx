import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import multiMonthPlugin from '@fullcalendar/multimonth'


import EventsFilter from '../../Backend/Functions/CalFilter';
import { events } from '../../Backend/Data/Data';

export const MiniCalendar = ({events}) => {

  const Myevents = EventsFilter({events});
  return(
    <div className="
      bg-smoothWhite poppins-extrabold  text-xs text-myblack rounded-xl  w-full" >
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: 'title',
          center: 'today',
          end: 'prev,next',
        }}

        selectable={true}
        events={Myevents}
         height={300}
         dayMaxEvents={1}
      />
    </div>
  );
};


export const BigCalendar = ({events}) => {
  
    const Myevents = EventsFilter({events});
  return (
    <div className=" motion-preset-fade-lg motion-delay-100 flex-1 h-full bg-smoothWhite poppins-extrabold text-sm text-myblack rounded-xl w-full">
      <FullCalendar
        plugins={[multiMonthPlugin, dayGridPlugin]}
        initialView="multiMonthYear" // Start from January
        views={{
          dayGridMonth: {
            buttonText: 'Month',
          },
        }}
        headerToolbar={{
          start: 'title',
          center: 'multiMonthYear,dayGridMonth',
          end: 'today prev,next',
        }}
        events={Myevents}
        height="100%"
        dayMaxEvents={2} // Full available height
      />
    </div>
  );
};

export const LandingCalendar = () => {

  return(
    <div className="
      flex-1 h-full bg-smoothWhite poppins-extrabold  text-xs text-myblack rounded-xl  w-full" >
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        initialDate= '2025-08-01' // Set to August 2025 (or any year/month you want)
        headerToolbar={{
          start: '',
          center: '',
          end: '',
        }}
        selectable={true}
        events={events}
         height={'100%'}
         dayMaxEvents={1}
      />
    </div>
  );
};
