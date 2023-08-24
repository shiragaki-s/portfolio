import { Company } from "../types";

import { atom } from "recoil";

export const companyListState = atom<Array<Company>>({
  key: "companyList",
  default: [],
});
