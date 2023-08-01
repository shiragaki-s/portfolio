import { JobChangeSite } from "@/types";

import { atom } from "recoil";

export const jobChangeSiteListState = atom<Array<JobChangeSite>>({
  key: "jobChangeSiteList",
  default: [],
});
