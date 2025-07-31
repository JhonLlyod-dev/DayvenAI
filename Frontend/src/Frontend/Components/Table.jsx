

export default function Table(){

  return(
    <table className="min-w-full border border-gray-200 divide-y divide-gray-100 text-sm text-center rounded-md overflow-hidden shadow">
      <thead className="bg-gray-100 text-gray-700 poppins-semibold ">
        <tr>
          <th className="px-4 py-2 text-start">Time</th>
          <th className="px-4 py-2">Sun</th>
          <th className="px-4 py-2">Mon</th>
          <th className="px-4 py-2">Tue</th>
          <th className="px-4 py-2">Wed</th>
          <th className="px-4 py-2">Thu</th>
          <th className="px-4 py-2">Fri</th>
          <th className="px-4 py-2">Sat</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 ">
        <tr className="hover:bg-gray-50 font-medium">
          <td className="px-4 py-2 font-medium text-left">Morning (8am - 12pm)</td>
          <td className="px-4 py-2 text-gray-400">Off</td>
          <td className="px-4 py-2">✓</td>
          <td className="px-4 py-2">✓</td>
          <td className="px-4 py-2">✓</td>
          <td className="px-4 py-2">✓</td>
          <td className="px-4 py-2">✓</td>
          <td className="px-4 py-2 text-gray-400">Off</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="px-4 py-2 font-medium text-left">Afternoon (1pm - 5pm)</td>
          <td className="px-4 py-2 text-gray-400">Off</td>
          <td className="px-4 py-2">✓</td>
          <td className="px-4 py-2">✓</td>
          <td className="px-4 py-2">✓</td>
          <td className="px-4 py-2">✓</td>
          <td className="px-4 py-2">✓</td>
          <td className="px-4 py-2 text-gray-400">Off</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="px-4 py-2 font-medium text-left">Evening (6pm - 10pm)</td>
          <td className="px-4 py-2 text-gray-400">Off</td>
          <td className="px-4 py-2">✓</td>
          <td className="px-4 py-2">✓</td>
          <td className="px-4 py-2 text-gray-400">Off</td>
          <td className="px-4 py-2">✓</td>
          <td className="px-4 py-2">✓</td>
          <td className="px-4 py-2 text-gray-400">Off</td>
        </tr>
      </tbody>
    </table>

  )
}