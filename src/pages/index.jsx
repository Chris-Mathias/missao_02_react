import NavBarComp from "../components/navBar";
import SideBarComp from "../components/sideBar";
import GridComp from "../components/grid";
import { SideBarProvider } from "@/contexts/sideBarContext";

export default function Home() {
    return (
        <SideBarProvider>
            <div className="h-screen bg-base-100">
                <NavBarComp />
                <div className="flex" style={{ height: "calc(100vh - 65px)" }}>
                    <GridComp />
                    <SideBarComp />
                </div>
            </div>
        </SideBarProvider>
    );
}
