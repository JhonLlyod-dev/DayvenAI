
// This function checks the array of objects and compare the time and update the Event status in firestore

import dayjs from "dayjs";
import { UpdateEvent } from "./EventsAction";

export default async function Checker(events) {
  const now = dayjs();

  for (const event of events) {// ✅ Skip this event

    if(!event.id || !event.status) continue;

    const status = event.status?.trim().toLowerCase();

    if (status === 'completed') {
      continue;
    }


    let newStatus = '';
    let start, end;

    if (event.allday === true || event.allday === 'true') {
      start = dayjs(event.start).startOf('day');
      end = dayjs(event.end).endOf('day'); // 👈 Extend to end of the day
    } else {
      start = dayjs(`${event.start} ${event.time.start}`, 'YYYY-MM-DD HH:mm');
      end = dayjs(`${event.end} ${event.time.end}`, 'YYYY-MM-DD HH:mm');
    }

    if (now.isBefore(start)) {
      continue;
    } else if (now.isAfter(end)) {
      newStatus = 'Missed';
    } else if (now.isAfter(start) && now.isBefore(end) || now.isSame(start)) {
      newStatus = 'Ongoing';
    }

    if (event.status !== newStatus) {
      try {
        await UpdateEvent(event.id, newStatus);
      } catch (error) {
        console.error('❌ Error updating event:', error);
      }
    }
  }
}
