import { useRequestPortfolio } from "./useRequestPortfolio";
import { useScheduleReflesher } from "./useScheduleRefresher";

export const useDeleteSchedule = () => {
  const { request } = useRequestPortfolio();
  const { refreshSchedule } = useScheduleReflesher();
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
      refreshSchedule();
      return;
    } else {
      // エラーメッセージ表示
      alert("スケジュールの削除に失敗しました。");
    }
  };
  return { executeDeleteSchedulRequest };
};
