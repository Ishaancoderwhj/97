// Your web app's Firebase configuration


review=localStorage.getItem("review");


const firebaseConfig = {
    apiKey: "AIzaSyDXdgoGp5XnGLaqWYbPFgo-Y_TgkCkFQzY",
    authDomain: "p97-review.firebaseapp.com",
    databaseURL: "https://p97-review-default-rtdb.firebaseio.com",
    projectId: "p97-review",
    storageBucket: "p97-review.appspot.com",
    messagingSenderId: "595331706252",
    appId: "1:595331706252:web:a3baeffeb51cd733dabaa9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function addUser(){
    user_name=document.getElementById("user_name").value;
localStorage.setItem("user_name",user_name);
window.location="genre.html";
  }

  function logout(){
    window.location="index.html";
  }

function setData(){
 var reviewkashmir=document.getElementById("reviewkashmir").value;
 localStorage.setItem("reviewkashmir",reviewkashmir);
 var reviewgoa=document.getElementById("reviewgoa").value;
 localStorage.setItem("reviewgoa",reviewgoa);
 var reviewkolkata=document.getElementById("reviewkolkata").value;
 localStorage.setItem("reviewkolkata",reviewkolkata);
 var reviewmumbai=document.getElementById("reviewmumbai").value;
 localStorage.setItem("reviewmumbai",reviewmumbai);

 var reviewspider=document.getElementById("reviewspider").value;
 localStorage.setItem("reviewspider",reviewspider);
 var reviewfast=document.getElementById("reviewfast").value;
 localStorage.setItem("reviewfast",reviewfast);
 var reviewmcu=document.getElementById("reviewmcu").value;
 localStorage.setItem("reviewmcu",reviewmcu);

 var reviewfamous=document.getElementById("reviewfamous").value;
 localStorage.setItem("reviewfamous",reviewfamous);
 var reviewwimpy=document.getElementById("reviewwimpy").value;
 localStorage.setItem("reviewwimpy",reviewwimpy);
 var reviewtom=document.getElementById("reviewtom").value;
 localStorage.setItem("reviewtom",reviewtom);

 var reviewnaruto=document.getElementById("reviewnaruto").value;
 localStorage.setItem("reviewnaruto",reviewnaruto);
 var reviewspider=document.getElementById("reviewspider").value;
 localStorage.setItem("reviewspider",reviewspider);
 var reviewsaitama=document.getElementById("reviewsaitama").value;
 localStorage.setItem("reviewsaitama",reviewsaitama);

}


  