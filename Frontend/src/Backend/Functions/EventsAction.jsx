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
export default async function addEvent(Data) {
  if (!Data) return false;

  try {
    const ref = doc(db, "Events", uuidv4());
    await setDoc(ref, Data);
    console.log('✅ Event added successfully');
  } catch (error) {
    console.error('❌ Error adding event:', error);
  }
}

// Fetch events
export const fetchEvents = async () => {
  try {
    const q = query(collection(db, "Events"), orderBy('date', 'asc'));
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
