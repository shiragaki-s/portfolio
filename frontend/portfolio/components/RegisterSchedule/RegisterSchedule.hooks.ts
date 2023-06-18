import { Schedule } from "@/types";
import { useScheduleList } from "../ScheduleList/ScheduleList.hooks";

export const useRegisterSchedule = () => {
  const { schedules, setSchedules } = useScheduleList();
  const executeRegisterSchedulRequest = async (newSchedule: Schedule) => {
    const registerData = {
      id: -1,
      title: newSchedule.title,
      date: newSchedule.date.format("YYYY-MM-DD"),
      time: newSchedule.time.format("YYYY-MM-DD HH:mm"),
      company: {
        id: -1,
        name: newSchedule.company.name,
        url: newSchedule.company.url,
        interestFeatures: newSchedule.company.interestFeatures,
      },
      jobChangeSite: {
        id: -1,
        name: newSchedule.jobChangeSite.name,
        url: newSchedule.jobChangeSite.url,
      },
      desiredLevel: newSchedule.desiredLevel,
      remarks: newSchedule.remarks,
    };

    const res = await fetch("http://localhost:5001/calendar", {
      method: "POST",
      mode: "cors",
      // cache: "no-cache",
      // credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "http://localhost:5001/calendar",
        Vary: origin,
      },
      // redirect: "follow",
      // referrerPolicy: "no-referrer",
      body: JSON.stringify(registerData),
    });
    if (res.ok) {
      console.log("登録成功");
    } else {
      // エラー処理
      setSchedules(
        schedules.filter((schedule) => schedule.id !== newSchedule.id)
      );
    }
  };
  return { executeRegisterSchedulRequest };
};
