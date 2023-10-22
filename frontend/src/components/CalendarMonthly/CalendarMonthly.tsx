import { Box, Typography } from "@mui/material";
import { Dayjs } from "dayjs";
import { getMonthlyDateList } from "../../utils/calendarUtill";
import { CalendarMonthlyChangeButton } from "../CalendarMonthlyChangeButton/CalendarMonthlyChangeButton";
import { CalendarEmptyDate } from "../CalendarEmptyDate/CalendarEmptyDate";
import { CalendarDateCell } from "../CalendarDateCell/CalendarDateCell";

type Props = {
  date: Dayjs;
  onClickBack: () => void;
  onClickNext: () => void;
};

export const CalendarMonthly = (props: Props) => {
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
        <CalendarMonthlyChangeButton onClick={onClickBack} text="前月" />
        <Typography
          variant="h4"
          sx={{ textAlign: "center", margin: "auto", width: "300px" }}
          gutterBottom
        >
          {date.format("M")}月{" "}
        </Typography>
        <CalendarMonthlyChangeButton onClick={onClickNext} text="後月" />
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
        <CalendarEmptyDate dayWeek={Number(date.startOf("M").format("d"))} />
        {dateList.map((date, index) => (
          <Box key={index}>
            <CalendarDateCell date={date} />
          </Box>
        ))}
        <CalendarEmptyDate dayWeek={6 - Number(date.endOf("M").format("d"))} />
      </Box>
    </>
  );
};
