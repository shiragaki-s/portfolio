import { useState } from "react";
import { Dayjs } from "dayjs";
import { Schedule } from "../../types";
import { useRegisterSchedule } from "../../hooks/useRegisterSchedule";
import { defaultSchedule } from "../../utils/calendarUtill";
import { ScheduleForm } from "../ScheduleForm/ScheduleForm";
import { useDeleteSchedule } from "../../hooks/useDeleteSchedule";

type Props = {
  handleClose: () => void;
  schedule: Schedule;
  registerDate?: Dayjs;
};

export const ScheduleFormBaseContainer = ({
  handleClose,
  schedule,
  registerDate,
}: Props) => {
  const [newSchedule, setNewSchedule] = useState<Schedule>(
    registerDate
      ? {
          ...schedule,
          date: registerDate,
        }
      : { ...schedule }
  );

  const { executeRegisterSchedulRequest } = useRegisterSchedule();
  const { executeDeleteSchedulRequest } = useDeleteSchedule();
  const onSubmitHandle = async () => {
    executeRegisterSchedulRequest(newSchedule);
  };

  const initScheduleForm = () => {
    setNewSchedule(defaultSchedule);
  };

  const buttonText = registerDate ? "登録" : "編集";
  const onClickDelete = () => {
    executeDeleteSchedulRequest(schedule.id);
    handleClose();
  };
  return (
    <ScheduleForm
      schedule={newSchedule}
      setNewSchedule={setNewSchedule}
      handleClose={handleClose}
      onSubmitHandle={onSubmitHandle}
      initScheduleForm={initScheduleForm}
      buttonText={buttonText}
      onClickDelete={onClickDelete}
    />
  );
};
