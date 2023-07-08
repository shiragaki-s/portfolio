import { scheduleListSelector, scheduleListState } from "@/stores/schedule";
import { useRecoilValue, useSetRecoilState } from "recoil";

export const useScheduleList = () => {
  const schedules = useRecoilValue(scheduleListState);
  const setSchedules = useSetRecoilState(scheduleListSelector);
  return { schedules, setSchedules };
};
