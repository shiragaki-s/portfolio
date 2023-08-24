import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Company, Schedule } from "../../types";
import { defaultSchedule } from "../../utils/calendarUtill";

type Props = {
  schedule: Schedule;
  companyList: Company[];
  setNewSchedule: (schedule: Schedule) => void;
};
export const ScheduleFormSelectCompany = ({
  schedule,
  companyList,
  setNewSchedule,
}: Props) => {
  console.log("schedule.id");
  console.log(schedule.id);
  return (
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
          } else if (newCompany.id === -1) {
            newCompany = defaultSchedule.company;
          }
          const newSchedule = { ...schedule, company: newCompany };
          setNewSchedule(newSchedule);
        }}
      >
        <MenuItem value={-1} selected={schedule.company.id === -1}>
          --新規の会社を登録--
        </MenuItem>
        {
          // 既存の会社のmap
          companyList.map((company) => {
            return (
              <MenuItem
                key={company.id}
                value={company.id}
                selected={schedule.company.id === company.id}
              >
                {company.name}
              </MenuItem>
            );
          })
        }
      </Select>
    </FormControl>
  );
};
