var socket = io("http://localhost:6060");

var nlight 
socket.on("server-update-data", function (data) {
  // Home page

  $("#currentTemp").html(data.temp);
  $("#currentHumi").html(data.humi);
  $("#currentLight").html(data.light);
  nlight = data.light;
  //warning()
});

socket.on("send-full", function (data) {
  // console.log(data)
  data.forEach(function (item) {
    $("#light-content").append("<div class='h-para'>" + item.light + "</div>");
    $("#time-content").append("<div class='h-para'>" + item.time + "</div>");
    $("#temp-content").append("<div class='h-para'>" + item.temp + "</div>");
    $("#humi-content").append("<div class='h-para'>" + item.humi + "</div>");
    $("#id-content").append("<div class='h-para'>" + item.id + "</div>");
  });
});

// // ---- Control devices ----
// function livingroomLight() {
//     var checkBox = document.getElementById("livingroomLight");
//     if (checkBox.checked == true) {
//         alert('LED On')
//         $(".element-icon-control1").attr("src","bongdensang.jpg")
//         $(".turn-off1").css({"background-color" : "red"})
//         console.log('livinglight on')
//         socket.emit("livingroomLightChange", "on")
//     } else {
//         alert('LED Off')
//         $(".element-icon-control1").attr("src","bongden.jpg")
//         $(".turn-off1").css({"background-color" : "gray"})
//         console.log('livinglight off')
//         socket.emit("livingroomLightChange", "off")
        
// }

function ledOn1() {
  const note = confirm("Bạn có muốn bật đèn không");
  if (note) {
    $(".element-icon-control1").attr("src", "bongdensang.jpg");
    $(".turn-off1").css({ "background-color": "red" });
    $(".turn-off1").css({ "border-radius": "10px" });
    // $(".livingroom-control").css({"background-color" : "blue"})

    console.log("livinglight on");
    socket.emit("livingroomLightChange", "on");
  }
}
// function warning() {
//   if (nlight > 105) {
//     var t = confirm("ánh sáng quá thấp bạn cần bật đèn!!");
//     if (t) {
//       socket.emit("livingroomLightChange", "on");
//       socket.emit("airVentChange", "on");
//     }
//   }
//   else {
//     socket.emit("livingroomLightChange", "off");
//       socket.emit("airVentChange", "off");
//   }
// }



function ledOff1() {
  const note = confirm("Bạn có muốn tắt đèn không");
  if (note) {
    $(".element-icon-control1").attr("src", "bongden.jpg");
    $(".turn-off1").css({ "background-color": "gray" });
    $(".turn-off1").css({ "border-radius": "10px" });
    console.log("livinglight off");
    socket.emit("livingroomLightChange", "off");
  }
}
function ledOn() {
  const note = confirm("Bạn có muốn bật đèn không");
  if (note) {
    $(".btn1").css({ left: "0" });
    $(".img-bulb2").attr("src", "bongdensang.jpg");
    socket.emit("airVentChange", "on");
  }
}

function ledOff() {
  const note = confirm("Bạn có muốn tắt đèn không");
  if (note) {
    $(".btn1").css({ left: "70px" });
    $(".img-bulb2").attr("src", "bongden.jpg");
    socket.emit("airVentChange", "off");
  }
}
