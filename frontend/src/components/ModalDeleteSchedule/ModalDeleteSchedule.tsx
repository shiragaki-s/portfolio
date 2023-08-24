import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Schedule } from "../../types";

type Props = {
  open: boolean;
  handleClose: () => void;
  targetSchedule: Schedule;
  onClickDelete: () => void;
};
export const ModalDeleteSchedule = ({
  open,
  handleClose,
  targetSchedule,
  onClickDelete,
}: Props) => {
  return (
    <Dialog
      fullWidth
      maxWidth={"sm"}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle>スケジュール削除</DialogTitle>
      <DialogContent>
        <Table>
          <TableHead></TableHead>
          <TableBody>
            <TableRow>
              <TableCell>登録日</TableCell>
              <TableCell>
                {targetSchedule.date.format("YYYY年MM月DD日")}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>時間</TableCell>
              <TableCell>{targetSchedule.time.format("HH:mm")}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>タイトル</TableCell>
              <TableCell>{targetSchedule.title}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>会社名</TableCell>
              <TableCell>{targetSchedule.company.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>会社公式サイト</TableCell>
              <TableCell>{targetSchedule.company.url}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>転職サイト</TableCell>
              <TableCell>{targetSchedule.jobChangeSite.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>求人内容URL</TableCell>
              <TableCell>{targetSchedule.jobChangeSite.url}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>求人内容の気になる点</TableCell>
              <TableCell>{targetSchedule.company.interestFeatures}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>希望度</TableCell>
              <TableCell>
                <Rating
                  name="simple-controlled"
                  value={targetSchedule.desiredLevel}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>備考欄</TableCell>
              <TableCell>{targetSchedule.remarks}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: 100, padding: 1, margin: 2 }}
          onClick={() => {
            // onSubmitHandle = 新規登録 or 更新処理を親コンポーネントから渡す
            onClickDelete();
            handleClose();
          }}
        >
          削除
        </Button>
        <Button
          variant="outlined"
          sx={{ width: 100, padding: 1, margin: 2 }}
          onClick={() => {
            handleClose();
          }}
        >
          キャンセル
        </Button>
      </DialogContent>
    </Dialog>
  );
};
