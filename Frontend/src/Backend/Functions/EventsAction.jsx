import { v4 as uuidv4 } from 'uuid';
import {
  doc,
  setDoc,
  serverTimestamp,
  onSnapshot,
  collection,
  getDocs,
  updateDoc,
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


export async function fetchEvents(userUID, callback) {
  const ref = collection(db, 'Events');
  const q = query(ref, where("UID", "==", userUID), orderBy("createdAt", "desc"));

  try {
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const Data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      callback(Data); // send data to the provided callback function
    });

    return unsubscribe; // You can call this to stop listening

  } catch (error) {
    console.log("Error fetching events:", error);
  }
}


export async function UpdateEvent(id,status){
  console.log('Updating event with ID:', id);

  const docRef = doc(db, "Events", id);
  try {
    if(status === 'Missed'){
      await updateDoc(docRef, { status: status, activty:'Inactive' });
      console.log(`Event status updated to ${status}`);
      return;
    }

    await updateDoc(docRef, { status: status });
    console.log(`Event status updated to ${status}`);
  } catch (error) {
    console.error('❌ Error updating event:', error);
  }
}
