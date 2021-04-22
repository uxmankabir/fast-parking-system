var firebaseConfig = {
  apiKey: "AIzaSyDrb2_CwmJse3KOWA_X17IJYHe4kExHi5s",
  authDomain: "fastparkingsystem-b28c5.firebaseapp.com",
  projectId: "fastparkingsystem-b28c5",
  databaseURL: "https://fastparkingsystem-b28c5-default-rtdb.firebaseio.com/",
  storageBucket: "fastparkingsystem-b28c5.appspot.com",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database()

// database.ref('slot1').on('value', (snapshot) => {
//   console.log("Slot 1");
//   console.log(snapshot.val());
//   const slot1 = snapshot.val();
//   if(slot1.status == "free"){
//     $(".js-public-slot-1").removeClass("btn-primary btn-danger").addClass("btn-success")
//   }else{
//     $(".js-public-slot-1").removeClass("btn-primary btn-success").addClass("btn-danger")
//   }
// });

// database.ref('slot2').on('value', (snapshot) => {
//   console.log("Slot 2");
//   console.log(snapshot.val());
//   const slot2 = snapshot.val();
//   if(slot2.status == "free"){
//     $(".js-public-slot-2").removeClass("btn-primary btn-danger").addClass("btn-success")
//   }else{
//     $(".js-public-slot-2").removeClass("btn-primary btn-success").addClass("btn-danger")
//   }
// });

database.ref('slot1').on('value', (snapshot) => {
  console.log("Slot 1", snapshot.val());
  const slot1 = snapshot.val();
  if(slot1.status == "free"){
    setSlotFree("slot1")
  }else{
    setSlotOccupie("slot1")
  }
});

database.ref('slot2').on('value', (snapshot) => {
  console.log("Slot 2", snapshot.val());
  const slot2 = snapshot.val();
  if(slot2.status == "free"){
    setSlotFree("slot2")
  }else{
    setSlotOccupie("slot2")
  }
});

function setLinkFree(linkClass){
  $(linkClass)
    .removeClass("btn-secondary btn-danger disabled")
    .addClass("btn-success")
    .data("status", "free")
}
function setLinkReserved(linkClass){
  $(linkClass)
    .removeClass("btn-success btn-danger")
    .addClass("btn-secondary disabled")
    .data("status", "reserved")
}
function setLinkOccupied(linkClass){
  $(linkClass)
    .removeClass("btn-success btn-secondary")
    .addClass("btn-danger disabled")
    .data("status", "occupied")
}

function setSlotFree(slot_no){
  $.ajax({
    type: "POST",
    url: "/slots/free_slot",
    data: { slot_no: slot_no },
    success: function(response) {

    }
  });
}

function setSlotOccupie(slot_no){
  $.ajax({
    type: "POST",
    url: "/slots/occupie_slot",
    data: { slot_no: slot_no },
    success: function(response) {

    }
  });
}