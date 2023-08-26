import { Box } from "@mui/material";
import { AppMainHeader } from "../components/AppMainHeader/AppMainHeader";
import { ScheduleListTable } from "../components/ScheduleListTable/ScheduleListTable";
import { ScheduleSearch } from "../components/ScheduleSearch/ScheduleSearch";
// @を使わないと全部相対パスで書く
// import { Inter } from '../../../hoge'
// @を使うと、基点のフォルダからのパスだけでいい
// import { Inter } from '@/components/hoge'

export default function scheduleList() {
  return (
    <>
      <Box margin={"100px"}>
        <AppMainHeader />
      </Box>
      <Box marginBottom={"50px"}>
        <ScheduleSearch />
      </Box>
      <ScheduleListTable />
    </>
  );
}
