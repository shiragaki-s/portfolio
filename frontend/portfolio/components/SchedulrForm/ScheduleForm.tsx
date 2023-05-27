import { Schedule } from "@/types";
import {
  Box,
  Button,
  FormControl,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

type Props = {
  schedule: Schedule;
  setNewSchedule: (schedule: Schedule) => void;
  onSubmitHandle: () => void;
  handleClose: () => void;
  initScheduleForm: () => void;
};
export const ScheduleForm = ({
  schedule,
  setNewSchedule,
  onSubmitHandle,
  handleClose,
  initScheduleForm,
}: Props) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: "80%" }}>
        <Box>
          <label>面接日</label>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", margin: "auto", width: "300px" }}
            gutterBottom
          >
            {schedule.date.format("YYYY年MM月DD日")}
          </Typography>
        </Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label="時間"
            defaultValue={schedule.time}
            onChange={(value) => {
              if (value !== null) {
                // schedule.time = value;
                const newSchedule = { ...schedule, time: value };
                setNewSchedule(newSchedule);
              }
              console.log(value);
            }}
          />
        </LocalizationProvider>
        <TextField
          name="fbname"
          label="タイトル"
          placeholder="タイトル"
          variant="filled"
          margin="dense"
          size="small"
          defaultValue={schedule.title}
          onChange={(e) => {
            const newSchedule = { ...schedule, title: e.target.value };
            setNewSchedule(newSchedule);
          }}
        />
        <TextField
          name="fbemail"
          id="fbemail"
          label="会社名"
          placeholder="会社名"
          variant="filled"
          margin="dense"
          size="small"
          defaultValue={schedule.company.name}
          onChange={(e) => {
            const newCompany = { ...schedule.company, name: e.target.value };
            const newSchedule = { ...schedule, company: newCompany };
            setNewSchedule(newSchedule);
          }}
        />
        <TextField
          name="fbmessage"
          id="fbmessage"
          label="会社公式サイト"
          placeholder="会社公式サイト"
          variant="filled"
          margin="dense"
          size="small"
          defaultValue={schedule.company.url}
          onChange={(e) => {
            const newCompany = { ...schedule.company, url: e.target.value };
            const newSchedule = { ...schedule, company: newCompany };
            setNewSchedule(newSchedule);
          }}
        />
        <TextField
          name="fbmessage"
          id="fbmessage"
          label="転職サイト"
          placeholder="転職サイト"
          variant="filled"
          margin="dense"
          size="small"
          defaultValue={schedule.jobChangeSite.name}
          onChange={(e) => {
            const newJobChangeSite = {
              ...schedule.jobChangeSite,
              name: e.target.value,
            };
            const newSchedule = {
              ...schedule,
              jobChangeSite: newJobChangeSite,
            };
            setNewSchedule(newSchedule);
          }}
        />
        <TextField
          name="fbmessage"
          id="fbmessage"
          label="求人内容 URL"
          placeholder="求人内容 URL"
          variant="filled"
          margin="dense"
          size="small"
          defaultValue={schedule.jobChangeSite.url}
          onChange={(e) => {
            const newJobChangeSite = {
              ...schedule.jobChangeSite,
              url: e.target.value,
            };
            const newSchedule = {
              ...schedule,
              jobChangeSite: newJobChangeSite,
            };
            setNewSchedule(newSchedule);
          }}
        />
        <TextField
          name="fbmessage"
          id="fbmessage"
          label="求人内容の気になる点"
          multiline
          minRows={3}
          placeholder="求人内容の気になる点"
          variant="filled"
          margin="dense"
          size="small"
          defaultValue={schedule.company.interestFeatures}
          onChange={(e) => {
            const newCompany = {
              ...schedule.company,
              interestFeatures: e.target.value,
            };
            const newSchedule = {
              ...schedule,
              company: newCompany,
            };
            setNewSchedule(newSchedule);
          }}
        />
        <label>希望度</label>
        <Rating
          name="simple-controlled"
          value={schedule.desiredLevel}
          onChange={(_, newValue) => {
            const newSchedule = {
              ...schedule,
              desiredLevel: newValue ? newValue : 0,
            };
            setNewSchedule(newSchedule);
          }}
        />
        <TextField
          name="fbmessage"
          id="fbmessage"
          label="備考欄"
          multiline
          minRows={3}
          placeholder="備考欄"
          variant="filled"
          margin="dense"
          size="small"
          defaultValue={schedule.remarks}
          onChange={(e) => {
            const newSchedule = { ...schedule, remarks: e.target.value };
            setNewSchedule(newSchedule);
          }}
        />
        <Box display={"flex"}>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: 100, padding: 1, margin: 2 }}
            onClick={() => {
              // onSubmitHandle = 新規登録 or 更新処理を親コンポーネントから渡す
              onSubmitHandle();
              handleClose();
            }}
          >
            登録
          </Button>
          <Button
            variant="outlined"
            sx={{ width: 100, padding: 1, margin: 2 }}
            onClick={() => {
              initScheduleForm();
              handleClose();
            }}
          >
            キャンセル
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};
