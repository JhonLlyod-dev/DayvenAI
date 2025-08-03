
// This function checks the array of objects and compare the time and update the Event status in firestore

import dayjs from "dayjs";
import { UpdateEvent } from "./EventsAction";

export default async function Checker(events) {
  const now = dayjs();

  events.map( async (event) => {
    let newStatus = '';
    let start, end;

    if (event.allday) {
      start = dayjs(event.start);
      end = dayjs(event.end);
    } else {
      start = dayjs(`${event.start} ${event.time.start}`, 'YYYY-MM-DD HH:mm');
      end = dayjs(`${event.end} ${event.time.end}`, 'YYYY-MM-DD HH:mm');
    }

    if (now.isBefore(start)){
      return;
    } else if (now.isAfter(end)) {
      newStatus = 'Missed';
    } else if(now.isAfter(start) && start === end) {
      newStatus = 'Missed';
    } else if (now.isAfter(start) && now.isBefore(end) || now.isSame(start)) {
      newStatus = 'Ongoing';
    }

    
    // Only update if status has changed
    if (event.status !== newStatus) {
      try {
        await UpdateEvent(event.id, newStatus);
      } catch (error) {
        console.error('❌ Error updating event:', error);
      }
    }  else {
      console.log('Event status has not changed');
    }
  });
}
