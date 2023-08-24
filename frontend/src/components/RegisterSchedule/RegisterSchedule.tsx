import { useState } from "react";
import { Dayjs } from "dayjs";
import { Schedule } from "../../types";
import { useRegisterSchedule } from "../../hooks/useRegisterSchedule";
import { defaultSchedule } from "../../utils/calendarUtill";
import { ScheduleForm } from "../ScheduleForm/ScheduleForm";

type Props = {
  handleClose: () => void;
  date: Dayjs;
};

export const RegisterSchedule = ({ handleClose, date }: Props) => {
  const [newSchedule, setNewSchedule] = useState<Schedule>({
    ...defaultSchedule,
    date,
  });
  const { executeRegisterSchedulRequest } = useRegisterSchedule();
  const onSubmitHandle = () => {
    executeRegisterSchedulRequest(newSchedule);
  };
  const initScheduleForm = () => {
    setNewSchedule(defaultSchedule);
  };

  return (
    <ScheduleForm
      schedule={newSchedule}
      setNewSchedule={setNewSchedule}
      handleClose={handleClose}
      onSubmitHandle={onSubmitHandle}
      initScheduleForm={initScheduleForm}
      buttonText="登録"
    />
  );
};
