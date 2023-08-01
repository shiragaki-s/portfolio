import { Box, Button, IconButton, Typography } from "@mui/material";
import { Dayjs } from "dayjs";
import { CalendarSpace } from "../CalendarSpace/CalendarSpace";
import { useEffect } from "react";
import { CaledarButton } from "../CalendarButton/CalendarButton";
import { DateCell } from "../DateCell/DateCell";
import { useRecoilValue } from "recoil";
import { requestCheckerState, scheduleListState } from "../../stores/schedule";
import { getMonthlyDateList } from "../../utils/calendarUtill";

type Props = {
  date: Dayjs;
  onClickBack: () => void;
  onClickNext: () => void;
};

export const MonthlyCalendar = (props: Props) => {
  const requestChecker = useRecoilValue(requestCheckerState);
  const scheduleList = useRecoilValue(scheduleListState);
  const { date, onClickBack, onClickNext } = props;
  const dateList = getMonthlyDateList(date);
  const dayTypeList = ["日", "月", "火", "水", "木", "金", "土"];

  return (
    <>
      <Box
        display={"flex"}
        width={"400px"}
        sx={{ alignItems: "center", marginRight: "0" }}
      >
        <CaledarButton onClick={onClickBack} text="前月" />
        <Typography
          variant="h4"
          sx={{ textAlign: "center", margin: "auto", width: "300px" }}
          gutterBottom
        >
          {date.format("M")}月{" "}
          {requestChecker !== ""
            ? "初期データ取取得済み"
            : "まだ初回リクエストが返ってきていません"}
          {JSON.stringify(scheduleList.length)}
        </Typography>
        <CaledarButton onClick={onClickNext} text="後月" />
      </Box>
      <Box
        width={"400px"}
        display={"grid"}
        gridAutoFlow={"row"}
        gridTemplateColumns={"repeat(7,1fr)"}
      >
        {dayTypeList.map((dayType, index) => (
          <Box
            border={"solid"}
            key={index}
            width={"150px"}
            height={"50px"}
            sx={{ textAlign: "center" }}
          >
            {dayType}
          </Box>
        ))}
        <CalendarSpace dayWeek={Number(date.startOf("M").format("d"))} />
        {dateList.map((date, index) => (
          <Box key={index}>
            <DateCell date={date} />
          </Box>
        ))}
        <CalendarSpace dayWeek={6 - Number(date.endOf("M").format("d"))} />
      </Box>
    </>
  );
};
