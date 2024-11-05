// ModalContext.js
import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idTarefaEditando, setIdTarefaEditando] = useState(null);

  const abrirModalEdicao = (id) => {
    setIdTarefaEditando(id);
    setIsModalOpen(true);
  };

  const fecharModal = () => {
    setIsModalOpen(false);
    setIdTarefaEditando(null);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, idTarefaEditando, abrirModalEdicao, fecharModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
