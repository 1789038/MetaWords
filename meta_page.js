
var user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+ user_name;

var room_name=localStorage.getItem("room_name");
document.getElementById("room_name").innerHTML = "Category "+ room_name;

//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyARQaNF3ZNhtc0r8z7sH8PTrRd8Mzh9HDE",
      authDomain: "kwitter-18ffc.firebaseapp.com",
      databaseURL: "https://kwitter-18ffc-default-rtdb.firebaseio.com",
      projectId: "kwitter-18ffc",
      storageBucket: "kwitter-18ffc.appspot.com",
      messagingSenderId: "462770863687",
      appId: "1:462770863687:web:0bf311500f64c917f07b62"
    };
    
    // Initialize Firebase
   
    firebase.initializeApp(firebaseConfig);

    
function getData() { firebase.database().ref("/").child("category").child(room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "category") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log("message_data - " + message_data.message);
row="<div class='room_room' id="+firebase_message_id+">"+message_data.name+" : <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.google.com/search?q="+message_data.message+"\">"+message_data.message+"</a></div><hr>";
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();


function logout()
      {
      window.location="index.html";   
      }

function send()
      {
msg=document.getElementById("msg").value;
firebase.database().ref("/").child("category").child(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value="";
      }

