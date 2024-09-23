import { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
<<<<<<< HEAD
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const toggleModal = () => setIsModalOpen((prev) => !prev);

    return (
        <ModalContext.Provider
            value={{ isModalOpen, openModal, closeModal, toggleModal }}
        >
            {children}
        </ModalContext.Provider>
    );
=======
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <ModalContext.Provider
      value={{ isModalOpen, openModal, closeModal, toggleModal }}
    >
      {children}
    </ModalContext.Provider>
  );
>>>>>>> 3914c92cf9f56eea1b367b7e5706d7dd246f9b3d
};

export const useModal = () => useContext(ModalContext);
