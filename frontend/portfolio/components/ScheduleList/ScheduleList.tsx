import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { useEditModal, useScheduleList } from "./ScheduleList.hooks";
import { EditScheduleModal } from "../EditScheduleModal/EditScheduleModal";
import dayjs, { Dayjs } from "dayjs";
import { Schedule } from "@/types";

export const ScheduleList = () => {
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
  const { schedules, setSchedules } = useScheduleList();
  const [displayFlg, setDisplayFlg] = useState(false);
  const [displayKey, setDisplayKey] = useState("");
  const [deleteKey, setDeleteKey] = useState("");
  const { open, setEditModalOpen, onClickEditModal } = useEditModal();
  const [targetSchedule, setTargetSchedule] =
    useState<Schedule>(defaultSchedule);
  const onClickDelete = () => {
    // setScheduleList(
    //   scheduleList.filter((schedule) => deleteKey !== schedule.id)
    // );
  };
  return (
    <Box display={"flex"}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>予定日</TableCell>
            <TableCell>時間</TableCell>
            <TableCell>タイトル</TableCell>
            <TableCell>会社名</TableCell>
            <TableCell>転職サイト</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedules.map((schedule) => (
            <TableRow
              key={schedule.id}
              onClick={() => {
                setDisplayFlg(true);
                setDisplayKey(schedule.id);
              }}
            >
              <TableCell>{schedule.id}</TableCell>
              <TableCell>{schedule.date.format("YYYY/MM/DD")}</TableCell>
              <TableCell>{schedule.time.format("HH:mm")}</TableCell>
              <TableCell>{schedule.title}</TableCell>
              <TableCell>{schedule.company.name}</TableCell>
              <TableCell>{schedule.jobChangeSite.name}</TableCell>
              <TableCell
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setTargetSchedule(schedule);
                    onClickEditModal();
                  }}
                >
                  編集
                </Button>
              </TableCell>
              <TableCell
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    setDeleteKey(schedule.id);
                    onClickDelete();
                    alert("削除");
                  }}
                >
                  削除
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <EditScheduleModal
        open={open}
        handleClose={() => setEditModalOpen(false)}
        targetSchedule={targetSchedule}
      />
    </Box>
  );
};
