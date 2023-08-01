import { Box } from "@mui/material";
import { ScheduleForm } from "../SchedulrForm/ScheduleForm";
import { useState } from "react";
import { Schedule } from "../../types";
import { useScheduleList } from "../../hooks/useScheduleList";
import { useRegisterSchedule } from "../../hooks/useRegisterSchedule";

type Props = {
  handleClose: () => void;
  targetSchedule: Schedule;
};
export const EditSchedule = ({ handleClose, targetSchedule }: Props) => {
  const { schedules, setSchedules } = useScheduleList();
  const [newSchedule, setNewSchedule] = useState<Schedule>(targetSchedule);
  const { executeRegisterSchedulRequest } = useRegisterSchedule();
  const onSubmitHandle = () => {
    const newSchedules = schedules.map((schedule) =>
      schedule.id === newSchedule.id ? newSchedule : schedule
    );
    setSchedules(newSchedules);
    //newScheduleのidが-1になっている？
    executeRegisterSchedulRequest(newSchedule);
  };
  const initScheduleForm = () => {
    setNewSchedule(targetSchedule);
  };
  const onClickDelete = () => {
    const newSchedules = schedules.filter(
      (schedule) => schedule.id !== targetSchedule.id
    );
    setSchedules(newSchedules);
    handleClose();
  };
  return (
    <Box>
      <ScheduleForm
        schedule={newSchedule}
        setNewSchedule={setNewSchedule}
        handleClose={handleClose}
        onSubmitHandle={onSubmitHandle}
        initScheduleForm={initScheduleForm}
        onClickDelete={onClickDelete}
        deleteButtonFlg={true}
        buttonText="編集"
      />
    </Box>
  );
};
