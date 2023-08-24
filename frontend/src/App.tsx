import { RecoilRoot } from "recoil";
import { AppInitialize } from "./components/AppInitialize/AppInitialize";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./pages/calendar";
import ScheduleList from "./pages/scheduleList";
import { setupWorker } from "msw";
import { handlers } from "./mocks/handlers";

// if (typeof window !== "undefined") {
//   const browserWorker = setupWorker(...handlers);
//   browserWorker.start();
// }

export default function App() {
  return (
    <RecoilRoot>
      <AppInitialize />
      <BrowserRouter>
        <Routes>
          <Route path={`/calendar`} element={<Calendar />} />
          <Route path={`/scheduleList`} element={<ScheduleList />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}
