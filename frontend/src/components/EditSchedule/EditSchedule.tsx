import { Box } from "@mui/material";
import { useState } from "react";
import { Schedule } from "../../types";
import { useRegisterSchedule } from "../../hooks/useRegisterSchedule";
import { useDeleteSchedule } from "../../hooks/useDeleteSchedule";
import { ScheduleForm } from "../ScheduleForm/ScheduleForm";

type Props = {
  handleClose: () => void;
  targetSchedule: Schedule;
};
export const EditSchedule = ({ handleClose, targetSchedule }: Props) => {
  const [newSchedule, setNewSchedule] = useState<Schedule>(targetSchedule);
  const { executeRegisterSchedulRequest } = useRegisterSchedule();
  const onSubmitHandle = () => {
    executeRegisterSchedulRequest(newSchedule);
  };
  const initScheduleForm = () => {
    setNewSchedule(targetSchedule);
  };
  const { executeDeleteSchedulRequest } = useDeleteSchedule();
  const onClickDelete = () => {
    executeDeleteSchedulRequest(targetSchedule.id);
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
        buttonText="編集"
      />
    </Box>
  );
};
