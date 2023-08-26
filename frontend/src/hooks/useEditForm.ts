import { useState } from "react";

export const useEditForm = () => {
  const [editFormIsOpen, setEditFormIsopen] = useState(false);
  const onClickEditForm = () => {
    setEditFormIsopen(true);
  };
  return { editFormIsOpen, setEditFormIsopen, onClickEditForm };
};
