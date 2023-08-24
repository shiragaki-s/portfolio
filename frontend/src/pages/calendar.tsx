import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useState } from "react";
import { Box } from "@mui/material";
import { CalendarMonthly } from "../components/CalendarMonthly/CalendarMonthly";
import { AppMainHeader } from "../components/AppMainHeader/AppMainHeader";
// @を使わないと全部相対パスで書く
// import { Inter } from '../../../hoge'
// @を使うと、基点のフォルダからのパスだけでいい
// import { Inter } from '@/components/hoge'
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

export default function Calendar() {
  const [date, setDate] = useState(dayjs().tz());
  const onClickBack = () => {
    setDate(date.subtract(1, "month"));
  };
  const onClickNext = () => {
    setDate(date.add(1, "month"));
  };
  return (
    <>
      <Box margin={"100px"}>
        <AppMainHeader />
      </Box>
      <Box>
        <CalendarMonthly
          date={date}
          onClickBack={onClickBack}
          onClickNext={onClickNext}
        />
      </Box>
    </>
  );
}
