import { Box, MenuItem, Select } from "@mui/material";
import { useJobChangeSiteList } from "../../hooks/useJobChangeSiteList";
import { useState } from "react";

export const ScheduleSearchJobChangeSite = () => {
  const { jobChangeSiteList } = useJobChangeSiteList();
  const [jobChangeSiteId, setJobChangeSiteId] = useState<number>(-1);
  return (
    <Box display={"flex"} sx={{ marginRight: "20px" }}>
      <p>転職サイト名：</p>
      <Select
        name="会社名"
        labelId="companyLabel"
        id="companyId"
        value={jobChangeSiteId}
        onChange={(e) => {
          typeof e.target.value === "number" &&
            setJobChangeSiteId(e.target.value);
        }}
      >
        <MenuItem value={-1}>選択してください</MenuItem>
        {
          // 既存の会社のmap
          jobChangeSiteList.map((company) => {
            return (
              <MenuItem key={company.id} value={company.id}>
                {company.name}
              </MenuItem>
            );
          })
        }
      </Select>
    </Box>
  );
};
