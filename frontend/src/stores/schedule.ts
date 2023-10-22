import dayjs, { Dayjs } from "dayjs";
import { selector, selectorFamily } from "recoil";
import { Company, JobChangeSite, Schedule } from "../types";
import { userTokenState } from "./user";

export const dataFetchSelector = selector<{
  schedules: Schedule[];
  companies: Company[];
  jobChangeSites: JobChangeSite[];
}>({
  key: "dataFetchSelector",
  get: async ({ get }) => {
    console.log("Called scheduleListFetchSelector");
    // 初回の認証処理が終了するまでは、トークンが無いためnullを返す
    if (!get(userTokenState)) return null;
    // データ取得のリクエストを行う
    const res = await fetch("http://localhost:5001/calendar", {
      mode: "cors",
      headers: {
        Authorization: get(userTokenState),
        Vary: origin,
      },
    });
    if (!res.ok) [];
    const data = await res.json();
    console.log("data", data);

    return data;
  },
});

export const schedulesSelctor = selector<Schedule[]>({
  key: "schedulesSelctor",
  get: ({ get }) => {
    const data = get(dataFetchSelector);
    if (!data) return [];
    const scheduleList = data.schedules.map((schedule) => ({
      ...schedule,
      date: dayjs(schedule.date),
      time: dayjs(schedule.time),
    }));
    return scheduleList; //dateプロパティをDayjsに変換したデータ
  },
});

export const companySelctor = selector<Company[]>({
  key: "companySelctor",
  get: ({ get }) => {
    const data = get(dataFetchSelector);
    if (!data) return [];
    return data.companies;
  },
});

export const jobChangeSiteSelctor = selector<JobChangeSite[]>({
  key: "jobChangeSiteSelctor",
  get: ({ get }) => {
    const data = get(dataFetchSelector);
    if (!data) return [];
    return data.jobChangeSites;
  },
});

export const getDateSchedule = selectorFamily<Schedule[], Dayjs>({
  key: "getDateSchedule",
  get:
    (date) =>
    ({ get }) => {
      const result = get(schedulesSelctor).filter((schedule) => {
        dayjs(schedule.date).isSame(date);
      });
      return result;
    },
});
