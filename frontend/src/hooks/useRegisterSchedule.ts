import { Schedule } from "../types";
import { useRegisterCompany } from "./useRegisterCompany";
import { useRegisterJobChangeSite } from "./useRegisterJobChangeSite";
import { useRequestPortfolio } from "./useRequestPortfolio";
import { useScheduleReflesher } from "./useScheduleRefresher";

export const useRegisterSchedule = () => {
  const { request } = useRequestPortfolio();
  const { executeRegisterCompanyRequest } = useRegisterCompany();
  const { executeRegisterJobChangeSiteRequest } = useRegisterJobChangeSite();
  const { refreshSchedule } = useScheduleReflesher();

  const executeRegisterSchedulRequest = async (schedule: Schedule) => {
    const registerData = {
      id: schedule.id,
      title: schedule.title,
      date: schedule.date.format("YYYY-MM-DD"),
      time: schedule.time.format("YYYY-MM-DD HH:mm"),
      company: {
        id: schedule.company.id,
        name: schedule.company.name,
        url: schedule.company.url,
        interestFeatures: schedule.company.interestFeatures,
      },
      jobChangeSite: {
        id: schedule.jobChangeSite.id,
        name: schedule.jobChangeSite.name,
        url: schedule.jobChangeSite.url,
      },
      desiredLevel: schedule.desiredLevel,
      remarks: schedule.remarks,
    };

    const res = await request<{
      id: number;
      company_id: number;
      job_site_id: number;
    }>("calendar", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Vary: origin,
      },
      body: JSON.stringify(registerData),
    });
    refreshSchedule();
    console.log("refreshSchedule");
    executeRegisterCompanyRequest(schedule.company, res.data?.company_id);
    executeRegisterJobChangeSiteRequest(
      schedule.jobChangeSite,
      res.data?.job_site_id
    );
    if (
      res.errorMessage ||
      res.data == null ||
      res.data.id == null ||
      res.data.company_id == null ||
      res.data.job_site_id == null
    ) {
      console.error(
        `schedule_id: ${res.data?.id},company_id: ${res.data?.company_id},job_site_id: ${res.data?.job_site_id}`
      );
      alert("登録に失敗しました。");
      return;
    }
  };

  return { executeRegisterSchedulRequest };
};
