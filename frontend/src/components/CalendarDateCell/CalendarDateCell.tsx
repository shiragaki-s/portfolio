import { Box } from "@mui/material";

import { Dayjs } from "dayjs";
import { useRef } from "react";
import {
  useDateSchedules,
  useHoverState,
  useRegistModal,
} from "./CalendarDateCell.hooks";
import { CalendarDateCellRegisterButton } from "../CalendarDateCellRegisterButton/CalendarDateCellRegisterButton";
import { ModalRegisterSchedule } from "../ModalRegisterSchedule/ModalRegisterSchedule";
import { CalendarDateSchedulesStack } from "../CalendarDateSchedulesStack/CalendarDateSchedulesStack";

type Props = {
  date: Dayjs;
};
export const CalendarDateCell = ({ date }: Props) => {
  const ref = useRef<HTMLElement>();
  const { isHover } = useHoverState(ref);
  const { open, setRegistModalOpen, onClickRegistModal } = useRegistModal();
  const { schedules } = useDateSchedules(date);

  return (
    <Box ref={ref} border={"solid"} width={"150px"} height={"150px"}>
      <Box
        display={"inline-flex"}
        width={"100%"}
        height={"30px"}
        justifyContent={"space-between"}
      >
        {date.date()}
        {isHover && (
          <CalendarDateCellRegisterButton
            onClickRegistModal={onClickRegistModal}
          />
        )}
        <ModalRegisterSchedule
          open={open}
          handleClose={() => setRegistModalOpen(false)}
          date={date}
        />
      </Box>
      {/* 時間・タイトル表示させて、編集モーダルを表示 */}
      <CalendarDateSchedulesStack schedules={schedules} />
    </Box>
  );
};
