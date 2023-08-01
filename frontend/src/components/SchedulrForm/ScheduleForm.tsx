import { Company, JobChangeSite, Schedule } from "@/types";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  ListItem,
  MenuItem,
  Rating,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useCompanyList } from "@/hooks/useCompanyList";
import { useJobChangeSiteList } from "@/hooks/useJobChangeSiteList";

type Props = {
  schedule: Schedule;
  setNewSchedule: (schedule: Schedule) => void;
  onSubmitHandle: () => void;
  handleClose: () => void;
  initScheduleForm: () => void;
  onClickDelete?: () => void;
  deleteButtonFlg: boolean;
  buttonText: string;
  // companyList: Company[];
  // jobChangeSiteList: JobChangeSite[];
};
export const ScheduleForm = ({
  schedule,
  setNewSchedule,
  onSubmitHandle,
  handleClose,
  initScheduleForm,
  onClickDelete,
  deleteButtonFlg,
  buttonText,
}: // companyList,
// jobChangeSiteList,
Props) => {
  const { jobChangeSiteList, setJobChangeSiteList } = useJobChangeSiteList();
  const { companyList, setCompanyList } = useCompanyList();
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
            data-testid="form-time"
            defaultValue={schedule.time}
            onChange={(value) => {
              if (value !== null) {
                const newSchedule = { ...schedule, time: value };
                setNewSchedule(newSchedule);
              }
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
          data-testid="form-title"
          defaultValue={schedule.title}
          onChange={(e) => {
            const newSchedule = { ...schedule, title: e.target.value };
            setNewSchedule(newSchedule);
          }}
        />
        <FormControl fullWidth>
          <InputLabel id="companyLabel">会社名</InputLabel>
          <Select
            labelId="companyLabel"
            id="companyId"
            label="会社名"
            data-testid="form-company-name-select"
            value={schedule.company.id}
            onChange={(e) => {
              let newCompany: Company = {
                ...schedule.company,
                id: Number(e.target.value),
              };

              if (newCompany.id !== -1) {
                newCompany = companyList.filter(
                  (company) => company.id === newCompany.id
                )[0];
              }
              const newSchedule = { ...schedule, company: newCompany };
              setNewSchedule(newSchedule);
            }}
          >
            <MenuItem value={-1}>--新規の会社を登録--</MenuItem>
            {
              // 既存の会社のmap
              companyList.map((company) => {
                return (
                  <MenuItem key={company.id} value={company.id}>
                    {company.name}
                  </MenuItem>
                );
              })
            }
          </Select>
        </FormControl>

        <TextField
          name="fbemail"
          id="fbemail"
          label="会社名"
          placeholder="会社名"
          variant="filled"
          margin="dense"
          size="small"
          data-testid="form-company-name-input"
          // defaultValue={schedule.company.name}
          value={schedule.company.name}
          disabled={schedule.company.id !== -1}
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
          data-testid="form-company-site-url"
          variant="filled"
          margin="dense"
          size="small"
          // defaultValue={schedule.company.url}
          value={schedule.company.url}
          disabled={schedule.company.id !== -1}
          onChange={(e) => {
            const newCompany = { ...schedule.company, url: e.target.value };
            const newSchedule = { ...schedule, company: newCompany };
            setNewSchedule(newSchedule);
          }}
        />
        <FormControl fullWidth>
          <InputLabel id="jobChangeSiteLabel">転職サイト名</InputLabel>
          <Select
            labelId="jobChangeSiteLabel"
            id="jobChangeSiteId"
            label="転職サイト名"
            data-testid="form-company-site-name-select"
            value={schedule.jobChangeSite.id}
            onChange={(e) => {
              let newJobChangeSite: JobChangeSite = {
                ...schedule.jobChangeSite,
                id: Number(e.target.value),
              };

              if (newJobChangeSite.id !== -1) {
                newJobChangeSite = jobChangeSiteList.filter(
                  (jobChangeSite) => jobChangeSite.id === newJobChangeSite.id
                )[0];
              }

              const newSchedule = {
                ...schedule,
                jobChangeSite: newJobChangeSite,
              };
              setNewSchedule(newSchedule);
            }}
          >
            <MenuItem key={-1} value={-1}>
              --新規の転職サイトを登録--
            </MenuItem>
            {
              // 既存の転職サイトのmap
              jobChangeSiteList.map((jobChangeSite) => {
                return (
                  <MenuItem key={jobChangeSite.id} value={jobChangeSite.id}>
                    {jobChangeSite.name}
                  </MenuItem>
                );
              })
            }
          </Select>
        </FormControl>

        <TextField
          name="fbmessage"
          id="fbmessage"
          label="転職サイト"
          placeholder="転職サイト"
          data-testid="form-company-site-name"
          variant="filled"
          margin="dense"
          size="small"
          // defaultValue={schedule.jobChangeSite.name}
          value={schedule.jobChangeSite.name}
          disabled={schedule.jobChangeSite.id !== -1}
          onChange={(e) => {
            const site = jobChangeSiteList.find(
              (site) => site.id === Number(e.target.value)
            );
            if (!site) return;
            const newJobChangeSite = {
              ...site,
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
          data-testid="form-site-url"
          variant="filled"
          margin="dense"
          size="small"
          // defaultValue={schedule.jobChangeSite.url}
          value={schedule.jobChangeSite.url}
          disabled={schedule.jobChangeSite.id !== -1}
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
          data-testid="form-interest-features"
          variant="filled"
          margin="dense"
          size="small"
          defaultValue={schedule.company.interestFeatures}
          disabled={schedule.company.id !== -1}
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
          data-testid="form-rating"
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
          data-testid="form-remarks"
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
            data-testid="register-button"
            onClick={() => {
              // onSubmitHandle = 新規登録 or 更新処理を親コンポーネントから渡す
              onSubmitHandle();
              handleClose();
            }}
          >
            {buttonText}
          </Button>
          {deleteButtonFlg && (
            <Button
              variant="contained"
              color="error"
              sx={{ width: 100, padding: 1, margin: 2 }}
              onClick={() => {
                onClickDelete ? onClickDelete() : handleClose();
                handleClose();
              }}
            >
              削除
            </Button>
          )}
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
