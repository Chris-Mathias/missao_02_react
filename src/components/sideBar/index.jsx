import {
    faHome,
    faCalendar,
    faGraduationCap,
    faBoxArchive,
    faGear,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "./sideIcon";
import Separator from "./separator";
import { useSideBar } from "@/contexts/sideBarContext";

export default function SideBar() {
    const { isExpanded, setExpandedTrue, setExpandedFalse } = useSideBar();
    
    return (
        <div
            className={`absolute bg-base-100 transition-all border-r-[1px] border-gray-700 ${
                isExpanded ? "w-[300px]" : "w-[76px]"
            }`}
            onMouseEnter={setExpandedTrue}
            onMouseLeave={setExpandedFalse}
            style={{ height: "calc(100vh - 65px)" }}
        >
            <ul className="pt-2">
                <Icon icon={faHome} label="Início"/>
                <Icon icon={faCalendar} label="Agenda"/>
                <Separator />
                <Icon icon={faGraduationCap} label="Minhas inscrições"/>
                <Separator />
                <Icon icon={faBoxArchive} label="Turmas arquivadas"/>
                <Icon icon={faGear} label="Configurações"/>
            </ul>
        </div>
    );
}
