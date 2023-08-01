import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { ScheduleRegisterModal } from "../ScheduleRegisterModal/ScheduleRegisterModal";

type Props = {
  onClickRegistModal: () => void;
};
export const RegistModalButton = ({ onClickRegistModal }: Props) => {
  return (
    <IconButton onClick={onClickRegistModal}>
      <AddIcon />
    </IconButton>
  );
};
