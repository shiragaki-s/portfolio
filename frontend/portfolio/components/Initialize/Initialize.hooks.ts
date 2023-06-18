import { useRequestPortfolio } from "@/hooks/useRequestPortfolio";
import { Company, JobChangeSite, NewSchedule } from "@/types";
import { useScheduleList } from "../ScheduleList/ScheduleList.hooks";
import { useSetRecoilState } from "recoil";
import { companyListState } from "@/stores/company";
import { jobChangeSiteListState } from "@/stores/jobChangeSite";

export const useInitialize = () => {
  const { schedules, setSchedules } = useScheduleList();
  const setCompanies = useSetRecoilState(companyListState);
  const setJobChangeSite = useSetRecoilState(jobChangeSiteListState);
  const { request } = useRequestPortfolio();

  const loadDateFromDB = () => {
    (async function () {
      // //dateとtimeをdayjs型に変換してSchedule型にする
      const response = await request<{
        schedules: NewSchedule[];
        companies: Company[];
        jobChangeSites: JobChangeSite[];
      }>("GET", "calendar");

      if (!response.data) {
        alert(response.errorMessage);
        return;
      }
      setSchedules(response.data.schedules);
      setCompanies(response.data.companies);
      setJobChangeSite(response.data.jobChangeSites);
    })();
  };

  return { loadDateFromDB };
};
