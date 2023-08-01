import { useEffect } from "react";
import { useInitialize } from "./Initialize.hooks";
// import { handlers } from "@/mocks/handlers";
// import { rest, setupWorker } from "msw";
// import { setupServer } from "msw/node";

export const Initialize = () => {
  const { loadDateFromDB } = useInitialize();
  useEffect(() => {
    // if (typeof window === "undefined") {
    //   const serverWorker = setupServer(...handlers);
    //   serverWorker.listen();
    //   // @ts-ignore
    //   window.msw = {
    //     worker: serverWorker,
    //     rest: rest,
    //   };
    // } else {
    //   const browserWorker = setupWorker(...handlers);
    //   browserWorker.start();
    //   // @ts-ignore
    //   window.msw = {
    //     worker: browserWorker,
    //     rest: rest,
    //   };
    // }
    // バックエンドから初期データの取得を行う
    loadDateFromDB();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};
