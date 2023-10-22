import { useRecoilCallback } from "recoil";
import { dataFetchSelector } from "../stores/schedule";

export const useScheduleReflesher = () => {
  const refreshSchedule = useRecoilCallback(({ refresh }) => () => {
    refresh(dataFetchSelector);
  });

  return { refreshSchedule };
};
