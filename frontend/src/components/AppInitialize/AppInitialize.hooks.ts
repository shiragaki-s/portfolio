import { useSetRecoilState } from "recoil";
import { useScheduleList } from "../../hooks/useScheduleList";
import { Company, JobChangeSite, Schedule } from "../../types";
import { companyListState } from "../../stores/company";
import { useRequestPortfolio } from "../../hooks/useRequestPortfolio";
import { jobChangeSiteListState } from "../../stores/jobChangeSite";
import { requestCheckerState } from "../../stores/schedule";

export const useInitialize = () => {
  const { setSchedules } = useScheduleList();
  const setCompanies = useSetRecoilState(companyListState);
  const setJobChangeSite = useSetRecoilState(jobChangeSiteListState);
  const { request } = useRequestPortfolio();
  const setRequestChecker = useSetRecoilState(requestCheckerState);

  const loadDateFromDB = () => {
    (async function () {
      // dateとtimeをdayjs型に変換してSchedule型にする
      const response = await request<{
        schedules: Schedule[];
        companies: Company[];
        jobChangeSites: JobChangeSite[];
      }>("calendar", { method: "GET" });
      if (!response.data) {
        alert(response.errorMessage);
        return;
      }

      setSchedules(response.data.schedules);
      setCompanies(response.data.companies);

      setJobChangeSite(response.data.jobChangeSites);

      setRequestChecker(JSON.stringify(response.data)); // playwrightで実行したときに、response.dataにmockデータが入っていることは確認済み
    })();
  };

  return { loadDateFromDB };
};
