import { useScheduleList } from "@/hooks/useScheduleList";
import { Schedule } from "@/types";
import { useRequestPortfolio } from "./useRequestPortfolio";

export const useRegisterSchedule = () => {
  const { schedules, setSchedules } = useScheduleList();
  const { request } = useRequestPortfolio();
  const executeRegisterSchedulRequest = async (newSchedule: Schedule) => {
    const registerData = {
      id: newSchedule.id,
      title: newSchedule.title,
      date: newSchedule.date.format("YYYY-MM-DD"),
      time: newSchedule.time.format("YYYY-MM-DD HH:mm"),
      company: {
        id: newSchedule.company.id,
        name: newSchedule.company.name,
        url: newSchedule.company.url,
        interestFeatures: newSchedule.company.interestFeatures,
      },
      jobChangeSite: {
        id: newSchedule.jobChangeSite.id,
        name: newSchedule.jobChangeSite.name,
        url: newSchedule.jobChangeSite.url,
      },
      desiredLevel: newSchedule.desiredLevel,
      remarks: newSchedule.remarks,
    };

    const res = await request<{ id: number }>("calendar", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Vary: origin,
      },
      body: JSON.stringify(registerData),
    });

    if (!res.errorMessage) {
      return res.data?.id;
    } else {
      // エラー処理
      setSchedules(
        schedules.filter((schedule) => schedule.id !== newSchedule.id)
      );
    }
  };
  return { executeRegisterSchedulRequest };
};
