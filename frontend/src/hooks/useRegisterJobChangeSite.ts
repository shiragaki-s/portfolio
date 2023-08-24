import { JobChangeSite } from "../types";
import { useJobChangeSiteList } from "./useJobChangeSiteList";

export const useRegisterJobChangeSite = () => {
  const { setJobChangeSiteList } = useJobChangeSiteList();
  const executeRegisterJobChangeSiteRequest = async (
    jobChangeSite: JobChangeSite,
    newjobChangeSiteId?: number
  ) => {
    if (jobChangeSite.id !== -1 || newjobChangeSiteId == null) return;
    setJobChangeSiteList((currentJobChangeSiteList) => [
      ...currentJobChangeSiteList,
      { ...jobChangeSite, id: newjobChangeSiteId },
    ]);
  };
  return { executeRegisterJobChangeSiteRequest };
};
