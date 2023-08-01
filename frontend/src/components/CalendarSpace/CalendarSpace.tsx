import { Box } from "@mui/material";
type Props = {
  dayWeek: number;
};
export const CalendarSpace = (props: Props) => {
  const { dayWeek } = props;
  return (
    <>
      {[...Array(dayWeek)]
        .map((_, i) => i)
        .map((_, i) => (
          <Box key={i} border={"solid"} width={"150px"} height={"150px"}></Box>
        ))}
    </>
  );
};
