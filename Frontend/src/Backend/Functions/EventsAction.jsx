import { v4 as uuidv4 } from 'uuid';
import {
  doc,
  setDoc,
  serverTimestamp,
  onSnapshot,
  collection,
  getDocs,
  orderBy,
  query,
  where
} from "firebase/firestore";
import { db } from "../../Backend/Firebase/Api";

// Add event
export default async function addEvent(Title,Type,startDate,endDate,allday,Time,Priority,Note,setter,UID) {

  const ID = uuidv4();

  const Data = {
    id: ID,
    title: Title,
    type: Type,
    createdAt: serverTimestamp(),
    start: startDate,
    end: endDate,
    allday: allday,
    time: Time,
    priority: Priority,
    note: Note,
    status: 'Scheduled',
    activty:'Active',
    addedBy: setter,
    UID: UID
  };

  try {
    const ref = doc(db, "Events", ID);
    await setDoc(ref, Data);

  } catch (error) {
    console.error('❌ Error adding event:', error);
  }
}

// Fetch events
export const fetchEvents = async (UID) => {
  try {
    const q = query(collection(db, "Events"), where('UID', '==', UID), orderBy('createdAt', 'asc'));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ref: doc.ref,
        ...doc.data()
      }));
      console.log('✅ Events fetched successfully');
      console.log(data);
      return data;
    }

    return []; // Return empty array if no events
  } catch (error) {
    console.error('❌ Error fetching events:', error);
    return [];
  }
};
