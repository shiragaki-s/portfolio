import Image from "next/image";
import { Inter } from "next/font/google";
import { ScheduleList } from "@/components/ScheduleList/ScheduleList";
import { MainHeader } from "@/components/Header/MainHeader";
import { Box } from "@mui/material";
// @を使わないと全部相対パスで書く
// import { Inter } from '../../../hoge'
// @を使うと、基点のフォルダからのパスだけでいい
// import { Inter } from '@/components/hoge'

const inter = Inter({ subsets: ["latin"] });

export default function scheduleList() {
  return (
    <>
      <Box margin={"100px"}>
        <MainHeader />
      </Box>
      <Box>
        <ScheduleList />
      </Box>
    </>
  );
}
