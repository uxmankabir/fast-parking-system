var firebaseConfig = {
  apiKey: "AIzaSyDrb2_CwmJse3KOWA_X17IJYHe4kExHi5s",
  authDomain: "fastparkingsystem-b28c5.firebaseapp.com",
  projectId: "fastparkingsystem-b28c5",
  databaseURL: "https://fastparkingsystem-b28c5-default-rtdb.firebaseio.com/",
  storageBucket: "fastparkingsystem-b28c5.appspot.com",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database()

database.ref('public/slot1').on('value', (snapshot) => {
  console.log("Slot 1", snapshot.val());
  const slot = snapshot.val();
  if(slot.status == "free"){
    $(".js-public-slot-1").removeClass("bg-primary bg-danger").addClass("bg-success")
    $(".js-public-slot-1 h3").text("Free")
  }else{
    $(".js-public-slot-1").removeClass("bg-primary bg-success").addClass("bg-danger")
    $(".js-public-slot-1 h3").text("Occupied")
  }
});

database.ref('public/slot2').on('value', (snapshot) => {
  console.log("Slot 2", snapshot.val());
  const slot = snapshot.val();
  if(slot.status == "free"){
    $(".js-public-slot-2").removeClass("bg-primary bg-danger").addClass("bg-success")
    $(".js-public-slot-2 h3").text("Free")
  }else{
    $(".js-public-slot-2").removeClass("bg-primary bg-success").addClass("bg-danger")
    $(".js-public-slot-2 h3").text("Occupied")
  }
});

database.ref('public/slot3').on('value', (snapshot) => {
  console.log("Slot 3", snapshot.val());
  const slot = snapshot.val();
  if(slot.status == "free"){
    $(".js-public-slot-3").removeClass("bg-primary bg-danger").addClass("bg-success")
    $(".js-public-slot-3 h3").text("Free")
  }else{
    $(".js-public-slot-3").removeClass("bg-primary bg-success").addClass("bg-danger")
    $(".js-public-slot-3 h3").text("Occupied")
  }
});

database.ref('public/slot4').on('value', (snapshot) => {
  console.log("Slot 4", snapshot.val());
  const slot = snapshot.val();
  if(slot.status == "free"){
    $(".js-public-slot-4").removeClass("bg-primary bg-danger").addClass("bg-success")
    $(".js-public-slot-4 h3").text("Free")
  }else{
    $(".js-public-slot-4").removeClass("bg-primary bg-success").addClass("bg-danger")
    $(".js-public-slot-4 h3").text("Occupied")
  }
});

database.ref('private/slot1').on('value', (snapshot) => {
  console.log("Slot 1", snapshot.val());
  const slot1 = snapshot.val();
  if(slot1.status == "free"){
    setSlotFree("slot1")
  }else{
    setSlotOccupie("slot1")
  }
});

database.ref('private/slot2').on('value', (snapshot) => {
  console.log("Slot 2", snapshot.val());
  const slot2 = snapshot.val();
  if(slot2.status == "free"){
    setSlotFree("slot2")
  }else{
    setSlotOccupie("slot2")
  }
});

// function setLinkFree(linkClass){
//   $(linkClass)
//     .removeClass("btn-secondary btn-danger disabled")
//     .addClass("btn-success")
//     .data("status", "free")
// }
// function setLinkReserved(linkClass){
//   $(linkClass)
//     .removeClass("btn-success btn-danger")
//     .addClass("btn-secondary disabled")
//     .data("status", "reserved")
// }
// function setLinkOccupied(linkClass){
//   $(linkClass)
//     .removeClass("btn-success btn-secondary")
//     .addClass("btn-danger disabled")
//     .data("status", "occupied")
// }

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