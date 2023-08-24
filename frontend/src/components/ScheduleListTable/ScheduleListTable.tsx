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
import { useEditModal, useDeleteModal } from "./ScheduleListTable.hooks";
import { Schedule } from "../../types";
import { useScheduleList } from "../../hooks/useScheduleList";
import { useDeleteSchedule } from "../../hooks/useDeleteSchedule";
import { defaultSchedule } from "../../utils/calendarUtill";
import { ScheduleFormBaseContainer } from "../ScheduleFormBaseContainer/ScheduleFormBaseContainer";
import { ScheduleListSelectedDetail } from "../ScheduleListSelectedDetail/ScheduleListSelectedDetail";
import { ModalDeleteSchedule } from "../ModalDeleteSchedule/ModalDeleteSchedule";

export const ScheduleListTable = () => {
  const { schedules } = useScheduleList();
  const [displayFlg, setDisplayFlg] = useState(false);
  const { setEditModalIsopen, onClickEditModal } = useEditModal();
  const { deleteModalIsOpen, setDeleteModalIsopen, onClickDeleteModal } =
    useDeleteModal();
  const { executeDeleteSchedulRequest } = useDeleteSchedule();
  const [targetSchedule, setTargetSchedule] =
    useState<Schedule>(defaultSchedule);
  const onClickDelete = () => {
    executeDeleteSchedulRequest(targetSchedule.id);
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
                    setTargetSchedule(schedule);
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
        {/* TODO */}
        <ScheduleFormBaseContainer
          handleClose={() => {
            setEditModalIsopen(false);
          }}
          schedule={targetSchedule}
        />
        {deleteModalIsOpen && (
          <ModalDeleteSchedule
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
          <ScheduleListSelectedDetail
            displaySchedule={targetSchedule}
            setDisplayFlg={setDisplayFlg}
          />
        )}
      </Box>
    </>
  );
};
