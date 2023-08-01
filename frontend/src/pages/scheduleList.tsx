import { Box } from "@mui/material";
import { MainHeader } from "../components/Header/MainHeader";
import { ScheduleList } from "../components/ScheduleList/ScheduleList";
// @を使わないと全部相対パスで書く
// import { Inter } from '../../../hoge'
// @を使うと、基点のフォルダからのパスだけでいい
// import { Inter } from '@/components/hoge'

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
