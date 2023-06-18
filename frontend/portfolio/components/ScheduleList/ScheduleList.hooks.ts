import { scheduleListSelector, scheduleListState } from "@/stores/schedule";
import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

export const useEditModal = () => {
  const [editModalIsOpen, setEditModalIsopen] = useState(false);
  const onClickEditModal = () => {
    setEditModalIsopen(true);
  };
  return { editModalIsOpen, setEditModalIsopen, onClickEditModal };
};

export const useScheduleList = () => {
  const schedules = useRecoilValue(scheduleListState);
  const setSchedules = useSetRecoilState(scheduleListSelector);
  return { schedules, setSchedules };
};

export const useDeleteModal = () => {
  const [deleteModalIsOpen, setDeleteModalIsopen] = useState(false);
  const onClickDeleteModal = () => {
    setDeleteModalIsopen(true);
  };
  return { deleteModalIsOpen, setDeleteModalIsopen, onClickDeleteModal };
};
