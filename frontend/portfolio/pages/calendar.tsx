import Image from "next/image";
import { Inter } from "next/font/google";
import { MonthlyCalendar } from "@/components/MonthlyCalendar/MonthlyCalendar";
import dayjs from "dayjs";
import { useState } from "react";
import { MainHeader } from "@/components/Header/MainHeader";
import { Box } from "@mui/material";
// @を使わないと全部相対パスで書く
// import { Inter } from '../../../hoge'
// @を使うと、基点のフォルダからのパスだけでいい
// import { Inter } from '@/components/hoge'

const inter = Inter({ subsets: ["latin"] });

export default function Calendar() {
  const [date, setDate] = useState(dayjs());
  const onClickBack = () => {
    setDate(date.subtract(1, "month"));
  };
  const onClickNext = () => {
    setDate(date.add(1, "month"));
  };
  return (
    <>
      <Box margin={"100px"}>
        <MainHeader />
      </Box>
      <Box>
        <MonthlyCalendar
          date={date}
          onClickBack={onClickBack}
          onClickNext={onClickNext}
        />
      </Box>
    </>
  );
}
