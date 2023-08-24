import {
  Button,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import { Schedule } from "../../types";

type Props = {
  displaySchedule: Schedule;
  setDisplayFlg: (flg: boolean) => void;
};
export const ScheduleListSelectedDetail = ({
  displaySchedule,
  setDisplayFlg,
}: Props) => {
  return (
    <Box>
      <Table>
        <TableHead></TableHead>
        <TableBody>
          <TableRow>
            <TableCell>登録日</TableCell>
            <TableCell>
              {displaySchedule.date.format("YYYY年MM月DD日")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>時間</TableCell>
            <TableCell>{displaySchedule.time.format("HH:mm")}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>タイトル</TableCell>
            <TableCell>{displaySchedule.title}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>会社名</TableCell>
            <TableCell>{displaySchedule.company.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>会社公式サイト</TableCell>
            <TableCell>{displaySchedule.company.url}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>転職サイト</TableCell>
            <TableCell>{displaySchedule.jobChangeSite.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>求人内容URL</TableCell>
            <TableCell>{displaySchedule.jobChangeSite.url}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>求人内容の気になる点</TableCell>
            <TableCell>{displaySchedule.company.interestFeatures}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>希望度</TableCell>
            <TableCell>
              <Rating
                name="simple-controlled"
                value={displaySchedule.desiredLevel}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>備考欄</TableCell>
            <TableCell>{displaySchedule.remarks}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button
        variant="outlined"
        sx={{ width: 100, padding: 1, margin: 2 }}
        onClick={() => setDisplayFlg(false)}
      >
        閉じる
      </Button>
    </Box>
  );
};
