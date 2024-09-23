<<<<<<< HEAD
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "@/contexts/modalContext";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Modal() {
    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        teacher: "",
        pfp: "",
        bg: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/turmas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Resposta do backend:", result);
                window.location.reload();
            } else {
                console.error(
                    "Erro na resposta do servidor:",
                    response.statusText
                );
            }
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
        }
    };

    const { isModalOpen, toggleModal } = useModal();

    if (!isModalOpen) return null;

    return (
        <motion.div
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1, opacity: 0 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-base-100 p-4 rounded-lg"
        >
            <motion.div
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1, opacity: 0 }}
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-base-100 p-4 rounded-lg"
            >
                <div
                    className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50`}
                >
                    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-base-100 p-4 rounded-lg">
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-semibold">
                                Adicionar Turma
                            </h1>
                            <FontAwesomeIcon
                                icon={faXmark}
                                className="cursor-pointer w-6 h-6"
                                onClick={toggleModal}
                            />
                        </div>
                        <form
                            className="flex flex-col gap-4 mt-4"
                            onSubmit={handleSubmit}
                        >
                            <label className="flex flex-col">
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="input input-bordered flex-grow w-96"
                                    placeholder="Turma"
                                />
                            </label>
                            <label className="flex flex-col mt-4">
                                <input
                                    type="text"
                                    name="subtitle"
                                    value={formData.subtitle}
                                    onChange={handleChange}
                                    className="input input-bordered flex-grow"
                                    placeholder="Complemento"
                                />
                            </label>
                            <label className="flex flex-col mt-4">
                                <input
                                    type="text"
                                    name="teacher"
                                    value={formData.teacher}
                                    onChange={handleChange}
                                    className="input input-bordered flex-grow"
                                    placeholder="Professor"
                                />
                            </label>
                            <label className="flex flex-col mt-4">
                                <input
                                    type="text"
                                    name="pfp"
                                    value={formData.pfp}
                                    onChange={handleChange}
                                    className="input input-bordered flex-grow"
                                    placeholder="Foto de perfil (link)"
                                />
                            </label>
                            <label className="flex flex-col mt-4">
                                <input
                                    type="text"
                                    name="bg"
                                    value={formData.bg}
                                    onChange={handleChange}
                                    className="input input-bordered flex-grow"
                                    placeholder="Imagem de fundo (link)"
                                />
                            </label>
                            <button
                                type="submit"
                                className="btn btn-primary bg-green-500 hover:bg-green-700 border-lime-700 hover:border-lime-800 mt-4"
                            >
                                Adicionar
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
=======
import { useModal } from "@/contexts/modalContext";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function Modal() {
  const { isModalOpen, toggleModal } = useModal();

  if (!isModalOpen) return null;

  return (
    <motion.div
      initial={{ scale: 1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 1, opacity: 0 }}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-base-100 p-4 rounded-lg"
    >
      <motion.div
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1, opacity: 0 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-base-100 p-4 rounded-lg"
      >
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50`}
        >
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-base-100 p-4 rounded-lg">
            <div className="flex justify-between">
              <h1 className="text-2xl font-semibold">Adicionar Turma</h1>
              <FaTimes
                className="cursor-pointer"
                onClick={toggleModal}
                size={24}
              />
            </div>
            <form className="flex flex-col gap-4 mt-4">
              <label className="flex flex-col">
                <span className="text-lg">
                  Adicione um titulo para a turma:
                </span>
                <input
                  type="text"
                  className="ml-2 input input-bordered flex-grow"
                  placeholder="Titulo da turma"
                />
              </label>
              <label className="flex flex-col mt-4">
                <span className="text-lg">
                  Adicione um subtitulo para a turma:
                </span>
                <input
                  className="ml-2 input input-bordered flex-grow"
                  placeholder="Subtitulo da turma"
                />
              </label>
              <label className="flex flex-col mt-4">
                <span className="text-lg">Adicione o nome do professor:</span>
                <input
                  className="ml-2 input input-bordered flex-grow"
                  placeholder="Nome do professor"
                />
              </label>
              <label className="flex flex-col mt-4">
                <span className="text-lg">
                  Adicione uma foto de perfil para o professor:
                </span>
                <input
                  className="ml-2 input input-bordered flex-grow"
                  placeholder="Link da foto de perfil"
                />
              </label>
              <label className="flex flex-col mt-4">
                <span className="text-lg">
                  Adicione uma foto de fundo para a turma:
                </span>
                <input
                  className="ml-2 input input-bordered flex-grow"
                  placeholder="Link da foto de fundo"
                />
              </label>
              <button
                type="submit"
                className="btn btn-primary bg-green-500 hover:bg-green-700 border-lime-700 hover:border-lime-800 mt-4"
              >
                Adicionar
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
>>>>>>> 3914c92cf9f56eea1b367b7e5706d7dd246f9b3d
}
