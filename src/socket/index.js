module.exports = function (socketIo, msgList) {
  socketIo.on("connection", function (socket) {
    // 클라이언트와 연결이 되면 연결된 사실을 출력합니다.
    console.log("socket connection succeeded.");

    socket.on("chat message", (msg) => {
      socketIo.emit("chat message", msg);
    });
    socket.on("send", (message) => {
      console.log("got msg", message);
      msgList.push(message);
      socketIo.emit("messages", msgList);
    });

    socket.on("disconnect", (reason) => {
      // 클라이언트와 연결이 끊어지면 이유를 출력해줍니다.
      console.log(`disconnect: ${reason}`);
    });

    // socket.on("UPDATE_NICKNAME", (requestData) => {
    //   const responseData = {
    //     ...requestData,
    //     type: "UPDATE_NICKNAME",
    //     time: new Date(),
    //   };
    //   socketIo.to(roomName).emit("RECEIVE_MESSAGE", responseData);
    //   console.log(
    //     `UPDATE_NICKNAME is fired with data: ${JSON.stringify(responseData)}`
    //   );
    // });
    return msgList;
  });
};
