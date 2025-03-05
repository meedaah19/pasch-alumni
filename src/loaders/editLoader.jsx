import {doc, getDoc} from '../firebase/firebase';
import {db} from '../firebase/firebase';

export async function editJobLoader({params}) {
    const jobId = params.id;
    console.log("Job ID from URL:", jobId);
    const jobRef = doc(db, "jobs", jobId);
    const jobSnap = await getDoc(jobRef);

    if(!jobSnap.exists()) {
        console.error("Error: No job found in Firestore for ID:", jobId);
        throw new Error("Job not found!",{status: 404})};
        return jobSnap.data();
}

export async function editApplicationLoader({params}) {
    const userId = params.id;
    const userRef = doc(db, 'alumni', userId);
    const userSnap = await getDoc(userRef);

    if(!userSnap.exists()) {
        throw new Error("Profile not found!",{status: 404})};
        return { id: userId, ...userSnap.data() };
    }
