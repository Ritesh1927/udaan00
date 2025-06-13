// src/auth/AuthModalContext.js
import { createContext, useState } from 'react';

export const AuthModalContext = createContext();

export const AuthModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('login');
  const [modalData, setModalData] = useState({});

  const openModal = (tab = 'login', data = {}) => {
    setCurrentTab(tab);
    setModalData(data);
    setIsOpen(true);
  };

  // const switchTab = (tab) => setCurrentTab(tab);
  const switchTab = (tab, data = {}) => {
    setCurrentTab(tab);
    setModalData(data);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <AuthModalContext.Provider
      value={{
        isOpen,
        currentTab,
        modalData,
        openModal,
        closeModal,
        switchTab
      }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};