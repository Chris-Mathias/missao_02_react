import NavBarComp from "../components/navBar";
import SideBarComp from "../components/sideBar";
import GridComp from "../components/grid";
import Modal from "../components/modal";
import { SideBarProvider } from "@/contexts/sideBarContext";
import { DataProvider } from "@/contexts/dataContext";
import { ModalProvider } from "@/contexts/modalContext";

export default function Home() {
    return (
        <SideBarProvider>
            <ModalProvider>
                <DataProvider>
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
                </DataProvider>
            </ModalProvider>
        </SideBarProvider>
    );
}
