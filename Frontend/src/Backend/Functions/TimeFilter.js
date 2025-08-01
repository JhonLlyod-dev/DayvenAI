import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

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