import { ScheduleCondition } from "../pages/scheduleList";
import { Schedule } from "../types";

export const useScheduleSearch = () => {
  const executeSearch = (
    scheduleCondition: ScheduleCondition,
    schedules: Schedule[]
  ): Schedule[] => {
    //フィルタリング
    return (
      schedules
        // 開始日時での期間検索
        .filter((schedule) => {
          if (!scheduleCondition.startDate) return true;

          return schedule.date.isAfter(
            scheduleCondition.startDate.add(-1, "day")
          );
        })
        .filter((schedule) => {
          if (!scheduleCondition.endDate) return true;
          return schedule.date.isBefore(
            scheduleCondition.endDate?.add(1, "day")
          );
        })
        .filter((schedule) => schedule.title.includes(scheduleCondition.title))
    );
  };

  return { executeSearch };
};
