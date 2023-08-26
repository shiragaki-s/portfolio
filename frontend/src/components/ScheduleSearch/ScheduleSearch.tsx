import { Box } from "@mui/material";
import { ScheduleSearchDate } from "../ScheduleSearchDate/ScheduleSearchDate";
import { ScheduleSearchCompany } from "../ScheduleSearchCompany/ScheduleSearchCompany";
import { ScheduleSearchJobChangeSite } from "../ScheduleSearchJobChangeSite/ScheduleSearchJobChangeSite";
import { ScheduleSearchDesireLevel } from "../ScheduleSearchDesireLevel/ScheduleSearchDesireLevel";
import { ScheduleSearchTitle } from "../ScheduleSearchTitle/ScheduleSearchTitle";
import { ScheduleSearchButton } from "../ScheduleSearchButton/ScheduleSearchButton";

export const ScheduleSearch = () => {
  return (
    <>
      {/* 領域１ */}
      {/* <Table sx={{ height: "auto", border: 0 }}>
        <TableHead>
          <TableRow sx={{ height: "10px", width: "50px" }}>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ height: "10px" }}>
          <TableRow>
            <TableCell>予定日：</TableCell>
            <TableCell>
              <Box display={"flex"}>
                <input />
                〜
                <input />
              </Box>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>会社名：</TableCell>
            <TableCell>
              <input />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>転職サイト：</TableCell>
            <TableCell>
              <input />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>希望度：</TableCell>
            <TableCell>
              <input />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>タイトル：</TableCell>
            <TableCell>
              <input />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table> */}
      {/* 領域２ */}
      <Box
        display={"flex"}
        sx={{
          whiteSpace: "nowrap",
          margin: "20px",
        }}
      >
        <ScheduleSearchDate />
        <ScheduleSearchCompany />
        <ScheduleSearchJobChangeSite />
        <ScheduleSearchDesireLevel />
        <ScheduleSearchTitle />
        <ScheduleSearchButton />
      </Box>
    </>
  );
};
