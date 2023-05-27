import { Box, Button, FormControl, TextField } from "@mui/material";
import { ScheduleForm } from "../SchedulrForm/ScheduleForm";
import { Dayjs } from "dayjs";
import { Schedule } from "@/types";
import { useState } from "react";
import { useScheduleList } from "../ScheduleList/ScheduleList.hooks";

type Props = {
  handleClose: () => void;
  targetSchedule: Schedule;
};
export const EditSchedule = ({ handleClose, targetSchedule }: Props) => {
  const { schedules, setSchedules } = useScheduleList();
  const [newSchedule, setNewSchedule] = useState<Schedule>(targetSchedule);
  const onSubmitHandle = () => {
    const newSchedules = schedules.map((schedule) =>
      schedule.id === newSchedule.id ? newSchedule : schedule
    );
    setSchedules(newSchedules);
    console.log(newSchedule);
    console.log("更新処理の呼び出し");
  };
  const initScheduleForm = () => {
    setNewSchedule(targetSchedule);
  };
  return (
    <ScheduleForm
      schedule={newSchedule}
      setNewSchedule={setNewSchedule}
      handleClose={handleClose}
      onSubmitHandle={onSubmitHandle}
      initScheduleForm={initScheduleForm}
    />
  );
};
