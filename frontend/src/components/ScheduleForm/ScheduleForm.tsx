import { Box, FormControl } from "@mui/material";
import { Schedule } from "../../types";
import { ScheduleFormDate } from "../ScheduleFormDate/ScheduleFormDate";
import { ScheduleFormTitle } from "../ScheduleFormTitle/ScheduleFormTitle";
import { ScheduleFormSelectCompany } from "../ScheduleFormSelectCompany/ScheduleFormSelectCompany";
import { ScheduleFormCompanyName } from "../ScheduleFormCompanyName/ScheduleFormCompanyName";
import { ScheduleFormCompanySite } from "../ScheduleFormCompanySite/ScheduleFormCompanySite";
import { ScheduleFormSelectJobSite } from "../ScheduleFormSelectJobSite/ScheduleFormSelectJobSite";
import { ScheduleFormJobSiteName } from "../ScheduleFormJobSiteName/ScheduleFormJobSiteName";
import { ScheduleFormJobSiteUrl } from "../ScheduleFormJobSiteUrl/ScheduleFormJobSiteUrl";
import { ScheduleFormCompanyFeature } from "../ScheduleFormCompanyFeature/ScheduleFormCompanyFeature";
import { ScheduleFormDesireLevel } from "../ScheduleFormDesireLevel/ScheduleFormDesireLevel";
import { ScheduleFormRemarks } from "../ScheduleFormRemarks/ScheduleFormRemarks";
import { ScheduleFormDecisionButton } from "../ScheduleFormDecisionButton/ScheduleFormDecisionButton";
import { ScheduleFormDeleteButton } from "../ScheduleFormDeleteButton/ScheduleFormDeleteButton";
import { ScheduleFormCancelButton } from "../ScheduleFormCancelButton/ScheduleFormCancelButton";
import { companySelctor, jobChangeSiteSelctor } from "../../stores/schedule";
import { useRecoilValue } from "recoil";

type Props = {
  schedule: Schedule;
  setNewSchedule: (schedule: Schedule) => void;
  onSubmitHandle: () => void;
  handleClose: () => void;
  initScheduleForm: () => void;
  onClickDelete?: () => void;
  buttonText: string;
};
export const ScheduleForm = ({
  schedule,
  setNewSchedule,
  onSubmitHandle,
  handleClose,
  initScheduleForm,
  onClickDelete,
  buttonText,
}: Props) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: "80%" }}>
        <ScheduleFormDate schedule={schedule} setNewSchedule={setNewSchedule} />
        <ScheduleFormTitle
          schedule={schedule}
          setNewSchedule={setNewSchedule}
        />
        <ScheduleFormSelectCompany
          schedule={schedule}
          setNewSchedule={setNewSchedule}
        />
        <ScheduleFormCompanyName
          schedule={schedule}
          setNewSchedule={setNewSchedule}
        />
        <ScheduleFormCompanySite
          schedule={schedule}
          setNewSchedule={setNewSchedule}
        />
        <ScheduleFormSelectJobSite
          schedule={schedule}
          setNewSchedule={setNewSchedule}
        />
        <ScheduleFormJobSiteName
          schedule={schedule}
          setNewSchedule={setNewSchedule}
        />
        <ScheduleFormJobSiteUrl
          schedule={schedule}
          setNewSchedule={setNewSchedule}
        />
        <ScheduleFormCompanyFeature
          schedule={schedule}
          setNewSchedule={setNewSchedule}
        />
        <ScheduleFormDesireLevel
          schedule={schedule}
          setNewSchedule={setNewSchedule}
        />
        <ScheduleFormRemarks
          schedule={schedule}
          setNewSchedule={setNewSchedule}
        />
        <Box display={"flex"}>
          <ScheduleFormDecisionButton
            onSubmitHandle={onSubmitHandle}
            handleClose={handleClose}
            buttonText={buttonText}
          />
          {onClickDelete && (
            <ScheduleFormDeleteButton
              onClickDelete={onClickDelete}
              handleClose={handleClose}
            />
          )}
          <ScheduleFormCancelButton
            initScheduleForm={initScheduleForm}
            handleClose={handleClose}
          />
        </Box>
      </FormControl>
    </Box>
  );
};
