export const events =
 [
  {
    "title": "Event Reminder",
    "message": "⏰ Reminder: Your event 'Doctor Appointment' is starting in 1 hour.",
    "type": "reminder",
    "timeIn": "1h",
    "eventId": "evt_001"
  },
  {
    "title": "Upcoming Event",
    "message": "📅 Heads up! Your event 'Team Meeting' starts in 10 minutes.",
    "type": "reminder",
    "timeIn": "10m",
    "eventId": "evt_002"
  },
  {
    "title": "Last Minute Alert",
    "message": "⚠️ Your event 'Client Call' begins in 1 minute. Please prepare.",
    "type": "reminder",
    "timeIn": "1m",
    "eventId": "evt_003"
  },
  {
    "title": "New Event Added",
    "message": "✅ A new event 'Marketing Presentation' has been added to your calendar.",
    "type": "system",
     "timeIn": "1m",
    "eventId": "evt_004"
  },
  {
    "title": "Event Updated",
    "message": "🔄 The event 'Design Sprint' has been updated. Check for new details.",
    "type": "system",
     "timeIn": "1m",
    "eventId": "evt_005"
  },
  {
    "title": "Recurring Event Reminder",
    "message": "🔁 Your weekly event 'Project Sync' is scheduled for today.",
    "type": "reminder",
    "timeIn": "1d",
    "eventId": "evt_006"
  },
  {
    "title": "Event Cancelled",
    "message": "🗑️ The event 'Old Campaign Review' has been removed from your calendar.",
    "type": "system",
     "timeIn": "1w",
    "eventId": "evt_007"
  },
  {
    "title": "Shared Event",
    "message": "📥 You’ve received a shared event: 'Budget Planning Review'.",
    "type": "system",
     "timeIn": "4m",
    "eventId": "evt_008"
  },
  {
    "title": "Deadline Reminder",
    "message": "🚨 Final call! 'Frontend Submission' deadline is tomorrow.",
    "type": "reminder",
    "timeIn": "1d",
    "eventId": "evt_009"
  },
  {
    "title": "Daily Reminder",
    "message": "💡 Don't forget to review your schedule for today.",
    "type": "daily",
    "timeIn": "1w",
    "eventId": null
  }
]

export const reminders = [
  {
    title: "Team Presentation",
    message: "Don’t forget to finalize your slides and join the call 10 mins early.",
    time: "1:30 PM",
    status: "On Time",
    statusColor: "green",
  },
  {
    title: "Thesis Submission",
    message: "Upload your final thesis PDF to the university portal before the 5PM deadline.",
    time: "4:45 PM",
    status: "Scheduled",
    statusColor: "blue",
  },
  {
    title: "Advisor Meeting",
    message: "Missed your scheduled consultation. Reschedule as soon as possible.",
    time: "9:00 AM",
    status: "Missed",
    statusColor: "red",
  },
  {
    title: "Daily Journal",
    message: "Reflect on today's productivity and record your key learning.",
    time: "9:00 PM",
    status: "Scheduled",
    statusColor: "yellow",
  },
  {
    title: "AI Planning Review",
    message: "Review your AI-generated event suggestions for the upcoming week.",
    time: "6:00 PM",
    status: "On Time",
    statusColor: "green",
  },
  {
    title: "Course Registration",
    message: "Enroll in your next semester courses via the student portal.",
    time: "11:00 AM",
    status: "Scheduled",
    statusColor: "blue",
  },
  {
    title: "Research Group Sync",
    message: "Join the bi-weekly sync to update your group on progress and blockers.",
    time: "2:00 PM",
    status: "On Time",
    statusColor: "green",
  },
  {
    title: "Submit Budget Proposal",
    message: "Submit your financial report and budget plan before review deadline.",
    time: "5:00 PM",
    status: "Missed",
    statusColor: "red",
  },
  {
    title: "Health Check Reminder",
    message: "Stay hydrated and stretch! You've been working for 3 hours straight.",
    time: "3:15 PM",
    status: "On Time",
    statusColor: "green",
  },
  {
    title: "Club Event Planning",
    message: "Finalize the logistics and send invites for Friday’s campus event.",
    time: "7:00 PM",
    status: "Scheduled",
    statusColor: "blue",
  },
];


export const upcomingEvents = [
  {
    title: "Research Defense",
    time: "1:00 PM - 2:00 PM",
    day: 24,
    month: "Sept",
    type: "Presentation"
  },
  {
    title: "Project Demo Day",
    time: "10:00 AM - 11:30 AM",
    day: 25,
    month: "Sept",
    type: "Demo"
  },
  {
    title: "Thesis Final Submission",
    time: "4:00 PM - 5:00 PM",
    day: 28,
    month: "Sept",
    type: "Deadline"
  },
  {
    title: "Midterm Consultation",
    time: "2:00 PM - 3:00 PM",
    day: 2,
    month: "Oct",
    type: "Meeting"
  },
  {
    title: "Team Strategy Workshop",
    time: "9:00 AM - 12:00 PM",
    day: 5,
    month: "Oct",
    type: "Workshop"
  },
  {
    title: "Adviser Review",
    time: "11:00 AM - 12:00 PM",
    day: 6,
    month: "Oct",
    type: "Consultation"
  },
  {
    title: "Proposal Hearing",
    time: "3:00 PM - 5:00 PM",
    day: 9,
    month: "Oct",
    type: "Presentation"
  },
  {
    title: "Capstone Defense",
    time: "1:30 PM - 3:00 PM",
    day: 14,
    month: "Oct",
    type: "Defense"
  },
  {
    title: "Peer Feedback Session",
    time: "10:00 AM - 11:00 AM",
    day: 16,
    month: "Oct",
    type: "Review"
  },
  {
    title: "Final Panel Evaluation",
    time: "3:30 PM - 5:00 PM",
    day: 20,
    month: "Oct",
    type: "Evaluation"
  }
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


export const conversation2 = [
  {
    username: "Jhon",
    type: "User",
    message: "Hey Dayven, can you help me plan my study schedule?",
    timeSent: "2025-07-21T10:00:00"
  },
  {
    username: "Dayven",
    type: "AI",
    message: "Of course! How many subjects do you want to study today?",
    timeSent: "2025-07-21T10:00:05"
  },
  {
    username: "Jhon",
    type: "User",
    message: "I have 3 subjects: Math, Science, and English.",
    timeSent: "2025-07-21T10:00:12"
  },
  {
    username: "Dayven",
    type: "AI",
    message: "Got it. How many hours are you available for studying?",
    timeSent: "2025-07-21T10:00:18"
  },
  {
    username: "Jhon",
    type: "User",
    message: "Just 4 hours today.",
    timeSent: "2025-07-21T10:00:26"
  },
  {
    username: "Dayven",
    type: "AI",
    message: "Perfect! Here's a suggested schedule:\n- 10:15 AM – Math\n- 11:15 AM – Science\n- 12:15 PM – Break\n- 12:45 PM – English",
    timeSent: "2025-07-21T10:00:34"
  },
  {
    username: "Jhon",
    type: "User",
    message: "Looks good! Can you set reminders for me?",
    timeSent: "2025-07-21T10:00:40"
  },
  {
    username: "Dayven",
    type: "AI",
    message: "Reminders have been set for all your study blocks.",
    timeSent: "2025-07-21T10:00:45"
  },
  {
    username: "Jhon",
    type: "User",
    message: "Can I move Science to the afternoon instead?",
    timeSent: "2025-07-21T10:01:00"
  },
  {
    username: "Dayven",
    type: "AI",
    message: "Sure! I've rescheduled Science to 1:45 PM and moved English to 10:15 AM.",
    timeSent: "2025-07-21T10:01:06"
  },
  {
    username: "Jhon",
    type: "User",
    message: "Thanks! Can you also track my progress today?",
    timeSent: "2025-07-21T10:01:15"
  },
  {
    username: "Dayven",
    type: "AI",
    message: "Tracking enabled. I’ll notify you when each subject session starts and ends.",
    timeSent: "2025-07-21T10:01:22"
  },
  {
    username: "Jhon",
    type: "User",
    message: "You’re the best, Dayven!",
    timeSent: "2025-07-21T10:01:30"
  },
  {
    username: "Dayven",
    type: "AI",
    message: "Happy to help! Let’s stay focused and make today productive. 💪",
    timeSent: "2025-07-21T10:01:36"
  },
  {
    username: "Jhon",
    type: "User",
    message: "Let’s go! Start with English.",
    timeSent: "2025-07-21T10:01:42"
  },
  {
    username: "Dayven",
    type: "AI",
    message: "Starting English session now. You got this! 🧠",
    timeSent: "2025-07-21T10:01:50"
  }
];

export const Eventdata = [
  { month: "Jan", user: 12, ai: 8 },
  { month: "Feb", user: 10, ai: 15 },
  { month: "Mar", user: 18, ai: 12 },
  { month: "Apr", user: 22, ai: 9 },
  { month: "May", user: 25, ai: 20 },
  { month: "Jun", user: 19, ai: 14 },
  { month: "Jul", user: 21, ai: 18 },
  { month: "Aug", user: 23, ai: 16 },
  { month: "Sep", user: 17, ai: 13 },
  { month: "Oct", user: 20, ai: 19 },
  { month: "Nov", user: 16, ai: 11 },
  { month: "Dec", user: 14, ai: 10 }
];




