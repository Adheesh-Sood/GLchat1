 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
 import { getDatabase,ref,set,push,onValue } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBhgzL-Y4uBpP3RAyNyM-GF2APJGoUScCw",
   authDomain: "glchat-5a6c3.firebaseapp.com",
   databaseURL: "https://glchat-5a6c3-default-rtdb.firebaseio.com",
   projectId: "glchat-5a6c3",
   storageBucket: "glchat-5a6c3.appspot.com",
   messagingSenderId: "420582896865",
   appId: "1:420582896865:web:ff6e8f5ab26d58f3bc33a0",
   measurementId: "G-59VLDR3YDJ"
 };
 // Initialize Firebase
const now = new Date();
const dateStr = now.toLocaleDateString();
const timeStr = now.toLocaleTimeString();

 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const database = getDatabase();
 let uInp = document.getElementById('userText')
 document.getElementById('subb').addEventListener('click' , ()=>{
    const db = getDatabase();
const postListRef = ref(db, 'posts/userTxt');
const newPostRef = push(postListRef);

set(newPostRef, {
  message: "Date: " + dateStr + ", Time: " + timeStr + ': ' +  document.getElementById('name').value +' says ' +   document.getElementById('userText').value,
});

 })

const dbRef = ref(database, 'posts/userTxt');

onValue(dbRef, (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const childKey = childSnapshot.key;
    const childData = childSnapshot.val();
    console.log(childData.message)
    
      let j = document.createElement('div');j.innerText = childData.message;document.body.append(j)
    
    // ...
  });
}, {
  onlyOnce: true
});


document.getElementById('subb').addEventListener('click' , ()=>{
  location.reload()
})