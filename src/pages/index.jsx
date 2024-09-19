import NavBarComp from "../components/navBar";
import SideBarComp from "../components/sideBar";
import GridComp from "../components/grid";

export default function Home() {
    return (
        <div>
            <NavBarComp />
            <div className="flex">
                <SideBarComp />
                <GridComp />
            </div>
        </div>
    );
}
