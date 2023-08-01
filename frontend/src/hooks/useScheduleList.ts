import { useRecoilValue, useSetRecoilState } from "recoil";
import { scheduleListSelector, scheduleListState } from "../stores/schedule";

export const useScheduleList = () => {
  const schedules = useRecoilValue(scheduleListState);
  const setSchedules = useSetRecoilState(scheduleListSelector);
  return { schedules, setSchedules };
};
