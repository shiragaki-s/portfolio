import { Schedule } from "@/types";
import { useState } from "react";
import { useScheduleList } from "../ScheduleList/ScheduleList.hooks";
import { Dayjs } from "dayjs";
import { ScheduleForm } from "../SchedulrForm/ScheduleForm";

type Props = {
  handleClose: () => void;
  date: Dayjs;
};

export const RegisterSchedule = ({ handleClose, date }: Props) => {
  const defaultSchedule: Schedule = {
    id: "",
    title: "",
    date: date,
    time: date,
    company: {
      name: "",
      url: "",
      interestFeatures: "",
    },
    jobChangeSite: {
      name: "",
      url: "",
    },
    desiredLevel: 0,
    remarks: "",
  };
  const [newSchedule, setNewSchedule] = useState<Schedule>(defaultSchedule);
  const { schedules, setSchedules } = useScheduleList();
  const onSubmitHandle = () => {
    newSchedule.id = (schedules.length + 1).toString();
    setSchedules([...schedules, newSchedule]);
    console.log(newSchedule);
    console.log("新規登録処理の呼び出し");
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
    />
  );
};
