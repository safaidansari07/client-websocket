let websocket = new WebSocket(url);
if (!websocket) {
  throw new Error("Server didn't accept WebSocket");
}

websocket.addEventListener("open", () => {
  console.log("Opened websocket");
});

websocket.addEventListener("message", (message) => {
  console.log(message);
});

websocket.addEventListener("close", (message) => {
  console.log("‘Closed websocket’");
});

websocket.addEventListener("error", (message) => {
  console.log("‘Something went wrong with the WebSocket’");

  // Potentially reconnect the WebSocket connection, by instantiating a
  // new WebSocket as seen above, and connecting new events
  // websocket = new WebSocket(url)
  // websocket.addEventListener(...)
});
