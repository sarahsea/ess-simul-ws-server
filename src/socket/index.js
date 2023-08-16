const {
  makeDateTimeXAxisForDay,
  makeRandomData,
  makeRandomInterval,
} = require("../utils/dummyChartDataMaker.js");

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

    // 차트 데이터를 만들어서 socketIo.emit을 이용 데이터를 보낸다
    // 랜덤한 시간 간격으로 (간격은 밀리세컨단위로?)
    // 2초 간격의 하루치 데이터를 보낸다
    // 데이터 형태는 datetime 이 2초 단위
    // 다양한키의 랜덤 숫자
    // 소비전력량 a,b,c
    // 충/방전량 * n

    let datetimelist = makeDateTimeXAxisForDay();
    console.log("datetimeList length", datetimelist.length);
    // const randomInterval = makeRandomInterval()
    // let list = datetimelist.slice()
    const promise = new Promise((res, rej) => {
      // res(makeRandomData(list))
    });

    const makeData = async () => {
      // datamaker 실행하고,
      // list 업데이트
    };
    const interval = (ms) => new Promise((res) => setTimeout(res, ms));
    async function maker() {
      while (datetimelist.length) {
        if (!datetimelist.length) break;
        await interval(1000);
        const result = makeRandomData(datetimelist.slice());
        datetimelist = result.datetimeList.slice();
        socketIo.emit("messages", result.data);
      }
    }
    maker();
    return;
  });
};
