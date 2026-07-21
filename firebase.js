// Arisudan Trucks Firebase Configuration
// Replace the values below with your Firebase project configuration.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import {
getFirestore,
collection,
addDoc,
getDocs,
doc,
updateDoc,
deleteDoc
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {

apiKey: "YOUR_API_KEY",

authDomain: "YOUR_PROJECT.firebaseapp.com",

projectId: "YOUR_PROJECT_ID",

storageBucket: "YOUR_PROJECT.appspot.com",

messagingSenderId: "YOUR_SENDER_ID",

appId: "YOUR_APP_ID"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

async function register(email,password){

try{

await createUserWithEmailAndPassword(auth,email,password);

alert("Registration Successful");

}catch(e){

alert(e.message);

}

}

async function login(email,password){

try{

await signInWithEmailAndPassword(auth,email,password);

window.location="dashboard.html";

}catch(e){

alert(e.message);

}

}

async function logout(){

await signOut(auth);

window.location="login.html";

}

async function saveBooking(data){

await addDoc(collection(db,"bookings"),data);

}

async function getBookings(){

const snapshot=await getDocs(collection(db,"bookings"));

let list=[];

snapshot.forEach(doc=>{

list.push({

id:doc.id,

...doc.data()

});

});

return list;

}

export{

auth,

db,

register,

login,

logout,

saveBooking,

getBookings

};
