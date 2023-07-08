import { useEffect } from "react";
import { useInitialize } from "./Initialize.hooks";
import { handlers } from "@/mocks/handlers";
import { setupWorker } from "msw";
import { setupServer } from "msw/node";

export const Initialize = () => {
  const { loadDateFromDB } = useInitialize();
  useEffect(() => {
    if (typeof window === "undefined") {
      const serverWorker = setupServer(...handlers);
      serverWorker.listen();
    } else {
      const browserWorker = setupWorker(...handlers);
      browserWorker.start();
    }
    // バックエンドから初期データの取得を行う
    loadDateFromDB();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};
