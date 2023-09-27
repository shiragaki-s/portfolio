import { AppInitialize } from "./components/AppInitialize/AppInitialize";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./pages/calendar";
import ScheduleList from "./pages/scheduleList";

import Login from "./pages/login";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Box } from "@mui/material";
import { AppMainHeader } from "./components/AppMainHeader/AppMainHeader";
import { SignOut } from "./types";
import { Auth } from "aws-amplify";

// @ts-ignore
import aws_exports from "./aws-exports";

import { setupWorker } from "msw";
import { handlers } from "./mocks/handlers";
// if (typeof window !== "undefined") {
//   const browserWorker = setupWorker(...handlers);
//   browserWorker.start();
// }
Auth.configure(aws_exports);
export default function App() {
  return (
    <Authenticator socialProviders={["google"]}>
      {({ signOut, user }) => {
        console.log(user);
        if (!isSignOut(signOut)) return <>サインアウトが空</>;
        const userToken = user
          ?.getSignInUserSession()
          ?.getAccessToken()
          .getJwtToken();
        const nickName = user?.attributes?.nickname;
        if (!userToken) return <>トークンが空</>;
        if (!nickName) return <>ニックネームが空</>;
        return (
          <>
            <AppInitialize nickName={nickName} token={userToken} />
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
          </>
        );
      }}
    </Authenticator>
  );
}
// 型ガード関数
const isSignOut = (func: SignOut | undefined): func is SignOut => {
  return func !== undefined;
};
