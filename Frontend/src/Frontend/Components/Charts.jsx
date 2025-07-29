import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,  LineChart ,
  Line,PieChart, Pie,Cell, 
} from "recharts";

import { Eventdata } from "../../Backend/Data/Data";



const weeklyEventsData = [
  { name: "Sun", events: 2 },
  { name: "Mon", events: 5 },
  { name: "Tue", events: 3 },
  { name: "Wed", events: 6 },
  { name: "Thu", events: 2 },
  { name: "Fri", events: 4 },
  { name: "Sat", events: 1 },
];

export default function Charts(){

  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;

    const data = payload[0].payload; // safely access the actual data object

    return (  
      <div className="border-l-3 border-l-gradient1 flex-center gap-2 text-myblack bg-smoothWhite border border-gray-200  py-2 px-4 rounded-lg shadow-lg">
        <h3 className="poppins-bold text-gradient1">{label}</h3>
        <span className="text-lg poppins-black">{data.events}</span>
      </div>
    );
  };



  return(
    <div className='h-70 flex w-full p-4 rounded-lg'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={weeklyEventsData}>
          <CartesianGrid  vertical={false} stroke={"#9ca3af"} strokeWidth={.1}/>
          <Tooltip content={CustomTooltip}  cursor={false} />
          <XAxis padding={{ left: 20, right: 20 }} orientation="bottom" dataKey="name" stroke={'#151B31'}  tickLine={false} strokeWidth={0}  interval={0} />
          <Bar  dataKey="events" activeBar={{ fill: '#3DA3EB' }} fill="#5CB4F3" strokeWidth={3} radius={20}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function EventChart(){

  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;

    const user = payload.find(item => item.dataKey === "user")?.value ?? 0;
    const ai = payload.find(item => item.dataKey === "ai")?.value ?? 0;

    return (
      <div className="border-t-3 border-t-gradient1 flex justify-center flex-col text-myblack bg-smoothWhite border border-gray-200 py-2 px-4 rounded-lg shadow-lg">
        <h3 className="poppins-black mb-2">{label}</h3>
        <div className="flex items-center gap-4">
          <span className="poppins-bold text-gradient1">User:</span>
          <span className="text-lg poppins-black">{user}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="poppins-bold text-gradient1">AI:</span>
          <span className="text-lg poppins-black">{ai}</span>
        </div>
      </div>
    );
  };

  return(
    <div className="h-30 flex w-full rounded-lg poppins-semibold text-sm">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={Eventdata}>
          <CartesianGrid vertical={false} stroke="#9ca3af" strokeWidth={0.1} />
          <XAxis
            padding={{ left: 20, right: 20 }}
            orientation="bottom"
            dataKey="month"
            stroke="#151B31"
            tickLine={false}
            strokeWidth={0}
            interval={0}
          />
          <Tooltip content={CustomTooltip}/>
          <Line
            type="monotone"
            dataKey="user"
            stroke="#5CB4F3"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="ai"
            stroke="#897AF4"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}


export const EventPieChart = () => {
  const userTotal = Eventdata.reduce((sum, item) => sum + item.user, 0);
  const aiTotal = Eventdata.reduce((sum, item) => sum + item.ai, 0);
  const total = userTotal + aiTotal;

  const pieData = [
    { name: "User", value: userTotal },
    { name: "AI", value: aiTotal },
  ];

  const COLORS = ["#5CB4F3", "#897AF4"]; // Blue & Purple

  const CustomCenterLabel = ({ cx, cy }) => (
    <>
      <text
        x={cx}
        y={cy - 10}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="28"
        fontWeight={900}
        fill="#151B31"
      >
        {total}
      </text>
      <text
        x={cx}
        y={cy + 15}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="14"
        fontWeight={900}
        fill="#151B31B3"
      >
        Events
      </text>
    </>
  );

  const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;

    const { name, value } = payload[0];

    return (
      <div className="border-l-3 border-l-gradient1 flex-center gap-2 text-myblack bg-smoothWhite border border-gray-200 py-2 px-4 rounded-lg shadow-lg">
        <h3 className="poppins-bold text-gradient1">{name}</h3>
        <span className="text-lg poppins-black">{value}</span>
      </div>
    );
  };

  return (
    <div className="w-full flex-center">
      <PieChart width={250} height={250}>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={100}
          dataKey="value"
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
          <CustomCenterLabel cx={125} cy={125} />
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </div>
  );
};
