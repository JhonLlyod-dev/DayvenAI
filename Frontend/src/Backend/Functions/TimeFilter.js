import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(customParseFormat);
dayjs.extend(weekOfYear);

export function setTime(time) {
  const parsed = dayjs(time, 'HH:mm'); // If time is like "09:27"
  
  if (!parsed.isValid()) {
    console.warn('Invalid time format:', time);
    return '';
  }

  return parsed.format('hh:mm A'); // → "09:27 AM"
}

export function formatToMonthDay(date) {
  if (!date) return '';
  const month = dayjs(date).format('MMM');
  const day = dayjs(date).format('D');


  return { month, day }; // e.g., "Jul, 31"
}

export function formatToAnnually(Events) {
   if(!Events) return[];
   
    let Eventdata = [
      { month: "Jan", user: 0, ai: 0 },
      { month: "Feb", user: 0, ai: 0 },
      { month: "Mar", user: 0, ai: 0 },
      { month: "Apr", user: 0, ai: 0 },
      { month: "May", user: 0, ai: 0 },
      { month: "Jun", user: 0, ai: 0 },
      { month: "Jul", user: 0, ai: 0 },
      { month: "Aug", user: 0, ai: 0 },
      { month: "Sep", user: 0, ai: 0 },
      { month: "Oct", user: 0, ai: 0 },
      { month: "Nov", user: 0, ai: 0 },
      { month: "Dec", user: 0, ai: 0 }
    ];


   const now = dayjs().format('YYYY');

   Events.map((event) => {
      const year = dayjs(event.start).format('YYYY');
      const month = dayjs(event.start).format('MMM');
      
    if (year === now) {
      const monthData = Eventdata.find(item => item.month === month);
      if (monthData) {
        if (event.addedBy === 'User') monthData.user += 1;
        else if (event.addedBy === 'AI') monthData.ai += 1;
      }
    }
    });


    return Eventdata;

}

export function formatToOverAll(Events) {
   if(!Events) return[];
   let user = 0;
   let ai = 0;
   const total = Events.length; 

   

   Events.map((event) => {
      if(event.addedBy === 'User') user += 1;
      else if(event.addedBy === 'AI') ai += 1;
    });
  
    return {user,ai,total};
}

export function formatToWeekly(Events) {
  if (!Events) return [];

  let weeklyEventsData = [
    { name: "Sun", events: 0 },
    { name: "Mon", events: 0 },
    { name: "Tue", events: 0 },
    { name: "Wed", events: 0 },
    { name: "Thu", events: 0 },
    { name: "Fri", events: 0 },
    { name: "Sat", events: 0 },
  ];

  const currentWeek = dayjs().week();
  const currentYear = dayjs().year();

  Events.forEach((event) => {
    const eventDate = dayjs(event.start);
    const eventWeek = eventDate.week();
    const eventYear = eventDate.year();

    if (eventWeek === currentWeek && eventYear === currentYear) {
      const day = eventDate.format('ddd'); // e.g., "Mon", "Tue"
      const dayData = weeklyEventsData.find(item => item.name === day);


      if (dayData) {
        dayData.events +=1;
      }
    }
  });

  return weeklyEventsData;
}