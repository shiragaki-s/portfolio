import { Schedule } from "@/types";
import { Button, Typography } from "@mui/material";
import { EditScheduleModal } from "../EditScheduleModal/EditScheduleModal";
import { useEditModal } from "../ScheduleList/ScheduleList.hooks";
import { useState } from "react";
import dayjs from "dayjs";

type Props = {
  schedule: Schedule;
};
export const ScheduleButton = ({ schedule }: Props) => {
  const defaultSchedule: Schedule = {
    id: "",
    title: "",
    date: dayjs(),
    time: dayjs(),
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
  const { editModalIsOpen, setEditModalIsopen, onClickEditModal } =
    useEditModal();
  const [targetSchedule, setTargetSchedule] = useState<Schedule>(schedule);
  return (
    <>
      <Button sx={{ width: "150px" }} onClick={() => onClickEditModal()}>
        <Typography
          maxWidth={"100%"}
          variant="body2"
          textAlign={"left"}
          noWrap
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            width: "140px",
          }}
        >
          {schedule.time.format("HH:mm")}
          {schedule.title}
        </Typography>
      </Button>
      <EditScheduleModal
        open={editModalIsOpen}
        handleClose={() => {
          setEditModalIsopen(false);
          setTargetSchedule(defaultSchedule);
        }}
        targetSchedule={schedule}
      />
    </>
  );
};
