import { useState } from 'react';

const useModal = () => {
  const [modalState, setModalState] = useState({
    open: false,
    title: '',
    content: '',
    secondaryBtnLabel: '',
    primaryBtnLabel: '',
  });

  const [draftState, setDraftState] = useState(null);

  const handleOpen = ({ title, content, secondaryBtnLabel, primaryBtnLabel, draftData }) => {
    const stateCopy = { ...modalState };
    stateCopy['title'] = title;
    stateCopy['content'] = content;
    stateCopy['secondaryBtnLabel'] = secondaryBtnLabel;
    stateCopy['primaryBtnLabel'] = primaryBtnLabel;
    stateCopy['open'] = true;
    setModalState(stateCopy);
    setDraftState(draftData);
  };

  const handleClose = () => {
    const stateCopy = { ...modalState };
    stateCopy['open'] = false;
    setDraftState(null);
    setModalState(stateCopy);
  };

  const handleSave = (callbackFunc) => {
    callbackFunc();
  };

  return {
    modalState,
    handleClose,
    handleSave,
    handleOpen,
    draftState,
  };
};

export default useModal;
