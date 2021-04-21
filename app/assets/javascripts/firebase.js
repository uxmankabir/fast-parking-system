var firebaseConfig = {
  apiKey: "AIzaSyDrb2_CwmJse3KOWA_X17IJYHe4kExHi5s",
  authDomain: "fastparkingsystem-b28c5.firebaseapp.com",
  projectId: "fastparkingsystem-b28c5",
  databaseURL: "https://fastparkingsystem-b28c5-default-rtdb.firebaseio.com/",
  storageBucket: "fastparkingsystem-b28c5.appspot.com",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database()
database.ref('slot1').on('value', (snapshot) => {
  console.log("Slot 1");
  console.log(snapshot.val());
  const slot1 = snapshot.val();
  if(slot1.status == "free"){
    $(".js-public-slot-1").removeClass("btn-primary btn-danger").addClass("btn-success")
  }else{
    $(".js-public-slot-1").removeClass("btn-primary btn-success").addClass("btn-danger")
  }
});

database.ref('slot2').on('value', (snapshot) => {
  console.log("Slot 2");
  console.log(snapshot.val());
  const slot2 = snapshot.val();
  if(slot2.status == "free"){
    $(".js-public-slot-2").removeClass("btn-primary btn-danger").addClass("btn-success")
  }else{
    $(".js-public-slot-2").removeClass("btn-primary btn-success").addClass("btn-danger")
  }
});