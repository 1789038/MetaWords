
var userName = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+ userName;

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

    


    


function addCategory() {
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child("category").child(room_name).update({
  category : "adding category name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "meta_page.html";

}

function getData() 
      {
            firebase.database().ref("/"+"category").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key; 
            
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
      {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="meta_page.html";
      }

function logout()
      {
      window.location="index.html";   
      }

function send()
      {
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:userName,
      message:msg,
      link:'https://www.google.com/search?q='+msg,
      like:0
});
document.getElementById("msg").value="";
      }

