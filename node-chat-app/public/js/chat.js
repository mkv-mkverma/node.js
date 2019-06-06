// TODO
// this create a connection
let socket = io();
function scrollToBottom() {
  // Selectors
  var messages = $("#messageDisplay");
  var newMessage = messages.children("li:last-child");
  // Heights
  var clientHeight = messages.prop("clientHeight");
  var scrollTop = messages.prop("scrollTop");
  var scrollHeight = messages.prop("scrollHeight");
  var newMessageHeight = newMessage.innerHeight();
  var lastMessageHeight = newMessage.prev().innerHeight();

  if (
    clientHeight + scrollTop + newMessageHeight + lastMessageHeight >=
    scrollHeight
  ) {
    messages.scrollTop(scrollHeight);
  }
}
socket.on("connect", function() {
  console.log("Connected to a server");
  //   socket.emit(emit name,data)
  let params = $.deparam(window.location.search);

  socket.emit("join", params, e => {
    if (e) {
      alert(e);
      window.location.href = "/";
    } else {
      console.log("No error");
    }
  });
});
socket.on("disconnect", () => {
  console.log("Disconnected from a server");
});

socket.on('updateUserList',users=>{
  var ol = $('<ol></ol>');

  users.forEach(function (user) {
    ol.append($('<li></li>').text(user));
  });

  $('#userDisplay').html(ol);
})

// getting the data
socket.on("newMessage", message => {
  let formattedTime = moment(message.createdAt).format("h:mm a");
  let template = $("#message-template").html();
  let html = Mustache.render(template, {
    text: message.text,
    from: message.from,
    createdAt: formattedTime
  });

  $("#messageDisplay").append(html);
  scrollToBottom();
  // let li = $('<li class="list-group-item"></li>');
  // li.text(`${message.from} ${formattedTime} : ${message.text}`);
  // $("#messageDisplay").append(li);
});

socket.on("newLocationMessage", message => {
  let formattedTime = moment(message.createdAt).format("h:mm a");
  let template = $("#location-message-template").html();
  let html = Mustache.render(template, {
    url: message.url,
    from: message.from,
    createdAt: formattedTime
  });

  $("#messageDisplay").append(html);
  scrollToBottom();
  // let li = $('<li class="list-group-item"></li>');
  // let a = $('<a target=_blank">My Current Location</a>');
  // li.text(`${message.from} : ${formattedTime} `);
  // a.attr("href", message.url);
  // $("#messageDisplay").append(li);
  // li.append(a);
});

// socket.emit(
//   "createMessage",
//   {
//     from: "John",
//     text: "Hi"
//   },
//   function(data) {
//     console.log("Got it", data);
//   }
// );

$("#message-form").on("submit", function(e) {
  // prevent default  behaviour of the form
  e.preventDefault();

  let messageTextBox = $("[name=message]");

  socket.emit(
    "createMessage",
    {
      from: "Manish",
      text: messageTextBox.val()
    },
    function() {
      messageTextBox.val("");
    }
  );
});

let locationButton = $("#send-location");
locationButton.on("click", () => {
  if (!navigator.geolocation) {
    return alert("Geolocation is not supported by browser");
  }

  locationButton.attr("disabled", "disabled").text("Sending location...");
  
  navigator.geolocation.getCurrentPosition(
    position => {
      locationButton.removeAttr("disabled").text("Send location");
      socket.emit("createLocationMessage", {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    },
    () => {
      locationButton.removeAttr("disabled").text("Send location");
      alert("Unbale to fetch location");
    }
  );
});
