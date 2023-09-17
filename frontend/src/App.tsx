import { RecoilRoot } from "recoil";
import { AppInitialize } from "./components/AppInitialize/AppInitialize";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./pages/calendar";
import ScheduleList from "./pages/scheduleList";
import { setupWorker } from "msw";
import { handlers } from "./mocks/handlers";
import Login from "./pages/login";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Box } from "@mui/material";
import { AppMainHeader } from "./components/AppMainHeader/AppMainHeader";
import { SignOut } from "./types";

// if (typeof window !== "undefined") {
//   const browserWorker = setupWorker(...handlers);
//   browserWorker.start();
// }

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => {
        if (!isSignOut(signOut)) return <></>;
        return (
          <RecoilRoot>
            <AppInitialize />
            <BrowserRouter>
              <Box margin={"100px"}>
                <AppMainHeader signOut={signOut} />
              </Box>
              <Routes>
                <Route path={`/`} element={<Calendar />} />
                <Route path={`/scheduleList`} element={<ScheduleList />} />
                <Route path={`/login`} element={<Login />} />
              </Routes>
            </BrowserRouter>
            <h1>Hello {user?.attributes?.nickname}</h1>
          </RecoilRoot>
        );
      }}
    </Authenticator>
  );
}
// 型ガード関数
const isSignOut = (func: SignOut | undefined): func is SignOut => {
  return func !== undefined;
};
