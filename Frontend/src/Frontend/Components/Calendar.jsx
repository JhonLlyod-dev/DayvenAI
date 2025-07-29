import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import multiMonthPlugin from '@fullcalendar/multimonth'

export const MiniCalendar = () => {

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

        editable={true}
        selectable={true}
        events={[
          { title: 'Meeting', date: '2025-07-23' },
          { title: 'Project Demo', date: '2025-07-24' },
          { title: 'Project Demo', date: '2025-07-24' },
          { title: 'Project Demo', date: '2025-07-24' },
          { title: 'Project Demo', date: '2025-07-24' },
          { title: 'Project Demo', date: '2025-07-24' },
        ]}
         height={300}
         dayMaxEvents={1}
      />
    </div>
  );
};


export const BigCalendar = () => {
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
        events={[
          { title: 'Meeting', date: '2025-07-23' },
          { title: 'Project Demo', date: '2025-07-24' },
          { title: 'Project Demo', date: '2025-07-24' },
          { title: 'Project Demo', date: '2025-07-24' },
        ]}
        height="100%"
        dayMaxEvents={2} // Full available height
      />
    </div>
  );
};
