import { useState } from "react";

export const useEditModal = () => {
  const [editModalIsOpen, setEditModalIsopen] = useState(false);
  const onClickEditModal = () => {
    setEditModalIsopen(true);
  };
  return { editModalIsOpen, setEditModalIsopen, onClickEditModal };
};

export const useDeleteModal = () => {
  const [deleteModalIsOpen, setDeleteModalIsopen] = useState(false);
  const onClickDeleteModal = () => {
    setDeleteModalIsopen(true);
  };
  return { deleteModalIsOpen, setDeleteModalIsopen, onClickDeleteModal };
};
