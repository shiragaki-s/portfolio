import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { useEditForm } from "../../hooks/useEditForm";
import { Schedule } from "../../types";
import { defaultSchedule } from "../../utils/calendarUtill";
import { ScheduleFormBaseContainer } from "../ScheduleFormBaseContainer/ScheduleFormBaseContainer";
type Props = {
  searchResultSchedules: Schedule[];
};
export const ScheduleListTable = ({ searchResultSchedules }: Props) => {
  const { editFormIsOpen, setEditFormIsopen, onClickEditForm } = useEditForm();
  const [targetSchedule, setTargetSchedule] =
    useState<Schedule>(defaultSchedule);

  const sortSchedules = useMemo(() => {
    return [...searchResultSchedules].sort((a, b) =>
      a.date.isAfter(b.date) ? 1 : -1
    );
  }, [searchResultSchedules]);

  // const addFunc = (num1: number, num2: number) => {
  //   return num1 + num2;
  // };

  // const addFunc2 = useCallback((num1: number, num2: number) => {
  //   return num1 + num2;
  // }, []);

  return (
    <>
      <Box display={"flex"}>
        <TableContainer sx={{ flexGlow: "none" }}>
          <Table sx={{ height: "auto" }}>
            <TableHead>
              <TableRow sx={{ height: "10px", width: "50px" }}>
                <TableCell>予定日</TableCell>
                <TableCell>時間</TableCell>
                <TableCell>タイトル</TableCell>
                <TableCell>会社名</TableCell>
                <TableCell>転職サイト</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ height: "10px" }}>
              {sortSchedules.map((schedule) => (
                <TableRow
                  key={schedule.id}
                  onClick={() => {
                    setTargetSchedule(schedule);
                    onClickEditForm();
                  }}
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <TableCell>{schedule.date.format("YYYY/MM/DD")}</TableCell>
                  <TableCell>{schedule.time.format("HH:mm")}</TableCell>
                  <TableCell>{schedule.title}</TableCell>
                  <TableCell>{schedule.company.name}</TableCell>
                  <TableCell>{schedule.jobChangeSite.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {editFormIsOpen && (
          <ScheduleFormBaseContainer
            handleClose={() => {
              setEditFormIsopen(false);
            }}
            schedule={targetSchedule}
          />
        )}
      </Box>
    </>
  );
};
