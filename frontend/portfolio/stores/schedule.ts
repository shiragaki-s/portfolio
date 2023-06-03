import { Schedule } from "@/types";
import dayjs, { Dayjs } from "dayjs";
import { atom, selectorFamily } from "recoil";

// atomFamily
// const scheduleState = atomFamily<Schedule,string>({
//   key: "scheduleState"
// })
// const scheduleIdListState = atom<string>({
//   key: "",
//   default:[ ]
// })

export const scheduleListState = atom<Array<Schedule>>({
  key: "scheduleList",
  default: [
    {
      id: "1",
      title: "カジュアル面談",
      date: dayjs("2023-05-01"),
      time: dayjs("2023-05-01 09:00"),
      company: {
        name: "株式会社ABC",
        url: "https://www.abc/",
        interestFeatures: "React",
      },
      jobChangeSite: {
        name: "green",
        url: "https://www.green/",
      },
      desiredLevel: 3,
    },
    {
      id: "2",
      title: "面接",
      date: dayjs("2023-05-05"),
      time: dayjs("2023-05-05 10:00"),
      company: {
        name: "株式会社DEF",
        url: "https://www.yahoo.co.jp/",
        interestFeatures: "Lambda",
      },
      jobChangeSite: {
        name: "wantedly",
        url: "https://wanted.jp",
      },
      desiredLevel: 4,
      remarks: "ホワイトそう",
    },
  ],
});

export const getDateSchedule = selectorFamily<Schedule[], Dayjs>({
  key: "getDateSchedule",
  get:
    (date) =>
    ({ get }) => {
      console.log(`date is ${date}`);

      const result = get(scheduleListState).filter((schedule) =>
        schedule.date.isSame(date)
      );

      console.log(result);

      return result;
    },
});
