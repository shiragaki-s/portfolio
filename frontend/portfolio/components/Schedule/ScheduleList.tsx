import { AlternateEmail } from "@mui/icons-material";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  alertTitleClasses,
} from "@mui/material";

export const ScheduleList = () => {
  const scheduleList = [
    {
      id: "1",
      registerDate: "4月1日",
      company: "株式会社ABC",
      InterviewDate: "5月5日",
      officialSite: "https://www.google.com/",
      jobChangeSite: "green",
    },
    {
      id: "2",
      registerDate: "4月2日",
      company: "株式会社DEF",
      InterviewDate: "5月7日",
      officialSite: "https://www.yahoo.co.jp/",
      jobChangeSite: "wantedly",
    },
  ];
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>登録日</TableCell>
          <TableCell>会社名</TableCell>
          <TableCell>面接日</TableCell>
          <TableCell>公式サイト</TableCell>
          <TableCell>転職サイト</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {scheduleList.map((schedule) => (
          <TableRow
            key={schedule.id}
            onClick={() => {
              alert("row");
            }}
          >
            <TableCell>{schedule.id}</TableCell>
            <TableCell>{schedule.registerDate}</TableCell>
            <TableCell>{schedule.company}</TableCell>
            <TableCell>{schedule.InterviewDate}</TableCell>
            <TableCell>{schedule.officialSite}</TableCell>
            <TableCell>{schedule.jobChangeSite}</TableCell>
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
  );
};
