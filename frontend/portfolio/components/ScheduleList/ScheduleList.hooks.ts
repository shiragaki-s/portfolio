import { scheduleListState } from "@/stores/schedule";
import { useState } from "react";
import { useRecoilValue } from "recoil";

export const useEditModal = () => {
  const [open, setEditModalOpen] = useState(false);
  const onClickEditModal = () => {
    setEditModalOpen(true);
  };
  return { open, setEditModalOpen, onClickEditModal };
};

export const useScheduleList = () => {
  const schedules = useRecoilValue(scheduleListState)
  return {schedules}
}