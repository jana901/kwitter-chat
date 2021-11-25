const firebaseConfig = {
    apiKey: "AIzaSyCT4K9Q-St0T-L86HXS6PUU1H272YdGFU4",
    authDomain: "practice-55ae3.firebaseapp.com",
    databaseURL: "https://practice-55ae3-default-rtdb.firebaseio.com",
    projectId: "practice-55ae3",
    storageBucket: "practice-55ae3.appspot.com",
    messagingSenderId: "196614530331",
    appId: "1:196614530331:web:ac8e9adfdfea9b2ece5fbe"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
function addUser(){
    username=document.getElementById("user_name").value;
localStorage.setItem("user_name",username);
window.location="kwitter_room.html";
}

function addroom(){
    room_name=document.getElementById("roomname").value;
    firebase.database().ref("/").child(room_name).update({purpose:"add room"});
}