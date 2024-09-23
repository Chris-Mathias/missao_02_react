import NavBarComp from "../components/navBar";
import SideBarComp from "../components/sideBar";
import GridComp from "../components/grid";
import Modal from "../components/modal";
import { SideBarProvider } from "@/contexts/sideBarContext";
<<<<<<< HEAD
import { DataProvider } from "@/contexts/dataContext";
import { ModalProvider } from "@/contexts/modalContext";

export default function Home() {
    return (
        <DataProvider>
            <SideBarProvider>
                <ModalProvider>
                    <div className="h-screen bg-base-100">
                        <NavBarComp />
                        <div
                            className="flex"
                            style={{ height: "calc(100vh - 65px)" }}
                        >
                            <GridComp />
                            <SideBarComp />
                        </div>
                    </div>
                    <Modal />
                </ModalProvider>
            </SideBarProvider>
        </DataProvider>
    );
=======
import { useEffect, useState } from "react";
import { ModalProvider } from "@/contexts/modalContext";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/turmas")
      .then((response) => response.json()) // Converte a resposta para JSON
      .then((data) => {
        console.log(data); // Exibe o JSON no console
        setData(data); // Define o estado com o JSON recebido
      })
      .catch((error) => console.error("Erro ao buscar os dados:", error));
  }, []);

  return (
    <SideBarProvider>
      <ModalProvider>
        <div className="h-screen bg-base-100">
          <NavBarComp />
          <div className="flex" style={{ height: "calc(100vh - 65px)" }}>
            <GridComp />
            <SideBarComp />
          </div>
          <Modal />
        </div>
      </ModalProvider>
    </SideBarProvider>
  );
>>>>>>> 3914c92cf9f56eea1b367b7e5706d7dd246f9b3d
}
