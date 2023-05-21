import { Box, IconButton } from "@mui/material";

import { Dayjs } from "dayjs";
import { useEffect, useRef, useState } from "react";
import { useHoverState, useRegistModal } from "./DateCell.hooks";
import { RegistModalButton } from "../RegistModalButton/RegistModalButton";
import { ScheduleRegisterModal } from "../ScheduleRegisterModal/ScheduleRegisterModal";

type Props = {
  date: Dayjs;
};
export const DateCell = ({ date }: Props) => {
  const ref = useRef<HTMLElement>();
  const { isHover } = useHoverState(ref);
  const { open, setRegistModalOpen, onClickRegistModal } = useRegistModal();

  return (
    <Box ref={ref} border={"solid"} width={"150px"} height={"150px"}>
      <Box
        display={"inline-flex"}
        width={"100%"}
        justifyContent={"space-between"}
      >
        {date.date()}
        {isHover && (
          <RegistModalButton onClickRegistModal={onClickRegistModal} />
        )}
        <ScheduleRegisterModal
          open={open}
          handleClose={() => setRegistModalOpen(false)}
          date={date}
        />
      </Box>
    </Box>
  );
};
