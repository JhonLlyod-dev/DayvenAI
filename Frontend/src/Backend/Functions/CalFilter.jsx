import dayjs from 'dayjs';

const typeColors = {
  Assignment: '#4caf50',
  Exam: '#f44336',
  Presentation: '#ff9800',
  Meeting: '#2196f3',
  Deadline: '#9c27b0',
  Task: '#795548',
  Workshop: '#3f51b5',
  Consultation: '#009688',
  Discussion: '#607d8b',
  Interview: '#e91e63',
  Training: '#00bcd4',
  Planning: '#8bc34a',
  Event: '#673ab7',
  Review: '#ffc107',
  Inactive: '#bdbdbd'
};

export default function EventsFilter({events}){
  if(!events) return;

  let eventsFiltered = [];
  
  events.forEach(item => {
    let start;
    let end;

    if (item.allday) {
      start = item.start;
      end = false;
    } else {
      start = dayjs(`${item.start} ${item.time.start}`).format('YYYY-MM-DDTHH:mm');
      end = dayjs(`${item.end} ${item.time.end}`).format('YYYY-MM-DDTHH:mm');
    }

    const color = item.activty === 'Inactive' 
      ? typeColors.Inactive 
      : typeColors[item.type] || '#3788d8';

    const event = {
      id: item.id,
      title: item.title,
      start:start,
      color,
    };

    if (end) {
      event.end = end;
    }

    eventsFiltered.push(event);
  });


  return eventsFiltered
  
}
