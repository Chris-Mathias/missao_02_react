import { useState } from "react";
import {
    faHome,
    faCalendar,
    faGraduationCap,
    faBoxArchive,
    faGear,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "./icon";
import Separator from "./separator";

export default function SideBar() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleMouseEnter = () => {
        setIsExpanded(true);
    };

    const handleMouseLeave = () => {
        setIsExpanded(false);
    };

    return (
        <div
            className={`bg-base-100 transition-all border-r-[1px] border-gray-700 ${
                isExpanded ? "w-[300px]" : "w-[76px]"
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
