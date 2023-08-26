import { Box, MenuItem, Select } from "@mui/material";
import { useCompanyList } from "../../hooks/useCompanyList";
import { useState } from "react";

export const ScheduleSearchCompany = () => {
  const { companyList } = useCompanyList();
  const [companyId, setCompanyId] = useState<number>(-1);
  return (
    <Box display={"flex"} sx={{ marginRight: "20px" }}>
      <p>会社名：</p>
      <Select
        name="会社名"
        labelId="companyLabel"
        id="companyId"
        value={companyId}
        onChange={(e) => {
          typeof e.target.value === "number" && setCompanyId(e.target.value);
        }}
      >
        <MenuItem value={-1}>選択してください</MenuItem>
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
    </Box>
  );
};
