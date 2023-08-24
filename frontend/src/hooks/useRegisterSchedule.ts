import { useScheduleList } from "../hooks/useScheduleList";
import { Schedule } from "../types";
import { useRegisterCompany } from "./useRegisterCompany";
import { useRegisterJobChangeSite } from "./useRegisterJobChangeSite";
import { useRequestPortfolio } from "./useRequestPortfolio";

export const useRegisterSchedule = () => {
  const { schedules, setSchedules } = useScheduleList();
  const { request } = useRequestPortfolio();
  const { executeRegisterCompanyRequest } = useRegisterCompany();
  const { executeRegisterJobChangeSiteRequest } = useRegisterJobChangeSite();
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
      setSchedules(schedules.filter((schedule) => schedule.id !== schedule.id));
      return;
    }

    const data = res.data;
    const newCompany = { ...schedule.company, id: res.data.company_id };
    const newJobChangeSite = {
      ...schedule.jobChangeSite,
      id: res.data.job_site_id,
    };
    const newSchedule = {
      ...schedule,
      id: data.id,
      company: newCompany,
      jobChangeSite: newJobChangeSite,
    };
    const newSchedules =
      schedule.id === -1
        ? insertSchedules(schedules, newSchedule)
        : updateSchedules(schedules, newSchedule);
    setSchedules(newSchedules);
  };
  return { executeRegisterSchedulRequest };
};

function updateSchedules(
  schedules: Schedule[],
  newSchedule: Schedule
): Schedule[] {
  return schedules.map((schedule) =>
    schedule.id === newSchedule.id ? newSchedule : schedule
  );
}

function insertSchedules(
  schedules: Schedule[],
  newSchedule: Schedule
): Schedule[] {
  return [...schedules, newSchedule];
}
