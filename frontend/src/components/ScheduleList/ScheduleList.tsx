import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { useEditModal, useDeleteModal } from "./ScheduleList.hooks";
import { EditScheduleModal } from "../EditScheduleModal/EditScheduleModal";
import { DeleteScheduleModal } from "../DeleteScheduleModal/DeleteScheduleModal";
import dayjs from "dayjs";
import { DisplaySchedule } from "../DisplaySchedule/DisplaySchedule";
import { Schedule } from "../../types";
import { useScheduleList } from "../../hooks/useScheduleList";

export const ScheduleList = () => {
  const defaultSchedule: Schedule = {
    id: -1,
    title: "",
    date: dayjs(),
    time: dayjs(),
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
  const { schedules, setSchedules } = useScheduleList();
  const [displayFlg, setDisplayFlg] = useState(false);
  const [displaySchedule, setDisplaySchedule] = useState(defaultSchedule);
  const { editModalIsOpen, setEditModalIsopen, onClickEditModal } =
    useEditModal();
  const { deleteModalIsOpen, setDeleteModalIsopen, onClickDeleteModal } =
    useDeleteModal();
  const [targetSchedule, setTargetSchedule] =
    useState<Schedule>(defaultSchedule);
  const onClickDelete = () => {
    const newSchedules = schedules.filter(
      (schedule: Schedule) => schedule.id !== targetSchedule.id
    );
    setSchedules(newSchedules);
  };
  return (
    <>
      <Box display={"flex"}>
        <TableContainer sx={{ flexGlow: "none" }}>
          <Table sx={{ height: "auto" }}>
            <TableHead>
              <TableRow sx={{ height: "10px", width: "50px" }}>
                <TableCell></TableCell>
                <TableCell>予定日</TableCell>
                <TableCell>時間</TableCell>
                <TableCell>タイトル</TableCell>
                <TableCell>会社名</TableCell>
                <TableCell>転職サイト</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ height: "10px" }}>
              {schedules.map((schedule) => (
                <TableRow
                  key={schedule.id}
                  onClick={() => {
                    setDisplayFlg(true);
                    setDisplaySchedule(schedule);
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
                        setTargetSchedule(schedule);
                        onClickDeleteModal();
                      }}
                    >
                      削除
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <EditScheduleModal
          open={editModalIsOpen}
          handleClose={() => {
            setEditModalIsopen(false);
          }}
          targetSchedule={targetSchedule}
        />
        {deleteModalIsOpen && (
          <DeleteScheduleModal
            open={deleteModalIsOpen}
            handleClose={() => {
              setDeleteModalIsopen(false);
              setTargetSchedule(defaultSchedule);
            }}
            targetSchedule={targetSchedule}
            onClickDelete={onClickDelete}
          />
        )}
        {displayFlg && (
          <DisplaySchedule
            displaySchedule={displaySchedule}
            setDisplayFlg={setDisplayFlg}
          />
        )}
      </Box>
    </>
  );
};
