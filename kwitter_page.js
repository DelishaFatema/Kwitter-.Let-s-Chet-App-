// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA_fTBO135mCTQDNdn3eBF4SoAMJ6FyA7s",
    authDomain: "kwitter-project-a8441.firebaseapp.com",
    databaseURL: "https://kwitter-project-a8441-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-a8441",
    storageBucket: "kwitter-project-a8441.appspot.com",
    messagingSenderId: "210577591251",
    appId: "1:210577591251:web:c1e861783724b8e30c3d26"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = " ";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();