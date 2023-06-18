import { NewSchedule, Schedule } from "@/types";
import dayjs, { Dayjs } from "dayjs";
import { DefaultValue, atom, selector, selectorFamily } from "recoil";

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
  default: [],
});

export const scheduleListSelector = selector<NewSchedule[]>({
  key: "scheduleListSelector",
  get: ({ get }) => get(scheduleListState),
  set: ({ set }, newSchedules) => {
    if (newSchedules instanceof DefaultValue) return;
    const schedules = newSchedules.map((schedule) => {
      return {
        ...schedule,
        time:
          typeof schedule.time === "string"
            ? dayjs(schedule.time)
            : schedule.time,
        date:
          typeof schedule.date === "string"
            ? dayjs(schedule.date)
            : schedule.date,
      };
    });
    set(scheduleListState, schedules);
  },
});

export const getDateSchedule = selectorFamily<Schedule[], Dayjs>({
  key: "getDateSchedule",
  get:
    (date) =>
    ({ get }) => {
      const result = get(scheduleListState).filter((schedule) => {
        // (schedule.date as Dayjs).isSame(date)
        dayjs(schedule.date).isSame(date);
      });
      return result;
    },
});
