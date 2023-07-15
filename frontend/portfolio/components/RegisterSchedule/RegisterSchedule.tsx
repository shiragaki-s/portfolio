import { Schedule } from "@/types";
import { useState } from "react";
import { Dayjs } from "dayjs";
import { ScheduleForm } from "../SchedulrForm/ScheduleForm";
import { useScheduleList } from "@/hooks/useScheduleList";
import { useRegisterSchedule } from "@/hooks/useRegisterSchedule";

type Props = {
  handleClose: () => void;
  date: Dayjs;
};

export const RegisterSchedule = ({ handleClose, date }: Props) => {
  const defaultSchedule: Schedule = {
    id: -1,
    title: "",
    date: date,
    time: date,
    company: {
      id: -1,
      name: "",
      url: "",
      interestFeatures: "",
    },
    jobChangeSite: {
      id: -1,
      name: "",
      url: "",
    },
    desiredLevel: 0,
    remarks: "",
  };
  const [newSchedule, setNewSchedule] = useState<Schedule>(defaultSchedule);
  const { schedules, setSchedules } = useScheduleList();
  const { executeRegisterSchedulRequest } = useRegisterSchedule();
  const onSubmitHandle = async () => {
    console.log("新規登録処理の呼び出し");
    const res = await executeRegisterSchedulRequest(newSchedule);
    if (!res) return;
    setSchedules([...schedules, { ...newSchedule, id: res }]);
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
      deleteButtonFlg={false}
      buttonText="登録"
    />
  );
};
