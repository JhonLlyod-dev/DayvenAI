import dayjs from 'dayjs';

export const events = [
  { title: 'Math Assignment', start: '2025-08-02T09:00:00', backgroundColor: '#4caf50', borderColor: '#4caf50' }, // Assignment
  { title: 'Physics Exam', start: '2025-08-04T13:00:00', backgroundColor: '#f44336', borderColor: '#f44336' }, // Exam
  { title: 'Project Presentation', start: '2025-08-06T10:30:00', backgroundColor: '#ff9800', borderColor: '#ff9800' }, // Presentation
  { title: 'Team Meeting', start: '2025-08-08T15:00:00', backgroundColor: '#2196f3', borderColor: '#2196f3' }, // Meeting
  { title: 'Thesis Deadline', start: '2025-08-10T23:59:00', backgroundColor: '#9c27b0', borderColor: '#9c27b0' }, // Deadline
  { title: 'Coding Task', start: '2025-08-12T08:00:00', backgroundColor: '#795548', borderColor: '#795548' }, // Task
  { title: 'UI/UX Workshop', start: '2025-08-14T09:00:00', backgroundColor: '#3f51b5', borderColor: '#3f51b5' }, // Workshop
  { title: 'Advisor Consultation', start: '2025-08-16T14:00:00', backgroundColor: '#009688', borderColor: '#009688' }, // Consultation
  { title: 'Group Discussion', start: '2025-08-18T11:00:00', backgroundColor: '#607d8b', borderColor: '#607d8b' }, // Discussion
  { title: 'Job Interview', start: '2025-08-20T16:30:00', backgroundColor: '#e91e63', borderColor: '#e91e63' } // Interview
];

export const weekAvailability = [
    { day: "Sun", status: "Unavailable" },
    { day: "Mon", status: "Available" },
    { day: "Tue", status: "Available" },
    { day: "Wed", status: "Available" },
    { day: "Thu", status: "Available" },
    { day: "Fri", status: "Available" },
    { day: "Sat", status: "Unavailable" },
  ];

export const Convo = [
  {
    "role": "user",
    "response": "I have free time tomorrow afternoon. Any suggestions?"
  },
  {
    "role": "ai",
    "response": "You’re free from **2:00 PM to 4:00 PM**. I suggest a **Project Planning Session**.\n\n✅ Scheduling it now!",
    "event": {
      "title": "Project Planning Session",
      "note": "Finalize proposal draft and assign next tasks.",
      "start": "2025-08-14",
      "end": "2025-08-14",
      "time": {
        "start": "14:00",
        "end": "16:00",
        "allDay": false
      },
      "allday": false,
      "status": "Scheduled",
      "type": "Planning",
      "priority": "High"
    }
  }
]










