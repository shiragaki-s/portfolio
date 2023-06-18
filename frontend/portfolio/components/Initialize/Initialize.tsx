import { useEffect, useState } from "react";
import { useScheduleList } from "../ScheduleList/ScheduleList.hooks";
import { publicDecrypt } from "crypto";
import dayjs from "dayjs";
import { useRequestPortfolio } from "@/hooks/useRequestPortfolio";
import { NewSchedule, Schedule } from "@/types";
import { useInitialize } from "./Initialize.hooks";

export const Initialize = () => {
  const { loadDateFromDB } = useInitialize();
  useEffect(() => {
    // バックエンドから初期データの取得を行う
    loadDateFromDB();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};
