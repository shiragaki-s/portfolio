import { useScheduleList } from "../hooks/useScheduleList";
import { useRequestPortfolio } from "./useRequestPortfolio";

export const useDeleteSchedule = () => {
  const { setSchedules } = useScheduleList();
  const { request } = useRequestPortfolio();
  const executeDeleteSchedulRequest = async (scheduleId: number) => {
    const res = await request("delete", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Vary: origin,
      },
      body: JSON.stringify({ schedule_id: scheduleId }),
    });

    if (!res.errorMessage) {
      // const newSchedules = schedules.filter(
      //   (schedule: Schedule) => schedule.id !== scheduleId
      // );
      // setSchedules(newSchedules);
      setSchedules((schedules) =>
        schedules.filter((schedule) => schedule.id !== scheduleId)
      );
      return;
    } else {
      // エラーメッセージ表示
      alert("スケジュールの削除に失敗しました。");
    }
  };
  return { executeDeleteSchedulRequest };
};
