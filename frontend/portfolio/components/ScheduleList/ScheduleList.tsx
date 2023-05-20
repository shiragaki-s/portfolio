import { AlternateEmail } from "@mui/icons-material";
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

export const ScheduleList = () => {
  const [displayFlg, setDisplayFlg] = useState(false);
  const [displayKey, setDisplayKey] = useState("");
  const [deleteKey, setDeleteKey] = useState("");
  const { open, setEditModalOpen, onClickEditModal } = useEditModal();
  const {schedules} = useScheduleList()
  const onClickDelete = () => {
    // setScheduleList(
    //   scheduleList.filter((schedule) => deleteKey !== schedule.id)
    // );
  }
  return (
    <Box display={"flex"}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>予定日</TableCell>
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
              <TableCell>{schedule.date.format()}</TableCell>
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
                    alert("編集");
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
      />
    </Box>
  );
};
