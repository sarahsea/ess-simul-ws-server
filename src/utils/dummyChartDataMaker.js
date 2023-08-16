const dayjs = require("dayjs");

module.exports = {
  makeDateTimeXAxisForDay: () => {
    const list = [];

    const start = dayjs(dayjs().format("YYYY-MM-DD ") + "00:00:00");
    const end = dayjs(dayjs().format("YYYY-MM-DD ") + "23:59:58");

    for (let i = start; i.isBefore(end); i = i.add(2, "seconds")) {
      list.push(new Date(i.format("YYYY-MM-DD HH:mm:ss")));
    }

    return list;
  },
  makeRandomInterval: () => {
    return Math.floor(Math.random * 10) * 100 + 100;
  },
  makeRandomData: (datetimeList) => {
    // 랜덤 갯수의 obj를 반환
    // dtm 을 받은 datetimelist에서 사용
    if (!datetimeList.length)
      return {
        data: [],
        datetimeList: [],
      };
    // const objCnt = Math.floor(Math.random() * 1000);
    const objCnt = 9000;
    const data = [];

    let range =
      objCnt > datetimeList.length
        ? datetimeList.splice(0, datetimeList.length)
        : datetimeList.splice(0, objCnt);
    // console.log("range", range);
    range?.forEach((datetime) => {
      data.push(
        Object.assign(
          {},
          {
            dtm: datetime,
            aPower: Math.floor(Math.random() * 50) + 100,
            bPower: Math.floor(Math.random() * 20) + 200,
            cPower: Math.floor(Math.random() * 10) + 300,
            dPower: Math.floor(Math.random() * 5) + 150,
            aChg: Math.ceil(Math.random() * 100),
            aDis: Math.ceil(Math.random() * 100) * -1,
            bChg: Math.ceil(Math.random() * 100),
            bDis: Math.ceil(Math.random() * 100) * -1,
            cChg: Math.ceil(Math.random() * 100),
            cDis: Math.ceil(Math.random() * 100) * -1,
            dChg: Math.ceil(Math.random() * 100),
            dDis: Math.ceil(Math.random() * 100) * -1,
          }
        )
      );
    });

    return {
      data,
      datetimeList,
    };
  },
};
