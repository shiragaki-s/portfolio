import { scheduleListState } from "@/stores/schedule";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export const useEditModal = () => {
  const [open, setEditModalOpen] = useState(false);
  const onClickEditModal = () => {
    setEditModalOpen(true);
  };
  return { open, setEditModalOpen, onClickEditModal };
};

export const useScheduleList = () => {
  const [schedules, setSchedules] = useRecoilState(scheduleListState)
  return {schedules, setSchedules}
}