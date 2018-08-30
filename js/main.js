var config = {
    apiKey: "AIzaSyCDwQQYYvbosg9FL5jkuFfZu_oUvy5TRtw",
    authDomain: "contactfom-11a08.firebaseapp.com",
    databaseURL: "https://contactfom-11a08.firebaseio.com",
    projectId: "contactfom-11a08",
    storageBucket: "contactfom-11a08.appspot.com",
    messagingSenderId: "356993376727"
  };
  firebase.initializeApp(config);

    var database=firebase.database();
    var ref=database.ref('Students');

 function submit(){
     
      var celectform =document.getElementById("celectform").value;
      var name =document.getElementById("name").value;
      var message =document.getElementById("message").value;
    var slide =document.getElementById("slide").value;
    

  }
  var push={
    celectform:celectform,
    name:name,
    message:message,
    slide:slide
     };
    ref.push(push);
    
 

    
    

