import {
    faHome,
    faCalendar,
    faGraduationCap,
    faBoxArchive,
    faGear,
    faListCheck,
    faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "./sideIcon";
import Separator from "./separator";
import { useSideBar } from "@/contexts/sideBarContext";
import { useData } from "@/contexts/dataContext";

export default function SideBar() {
    const { isExpanded, setExpandedTrue, setExpandedFalse } = useSideBar();
    const { data } = useData();

    return (
        <div
            className={`absolute bg-base-100 transition-all duration-150 border-r-[1px] border-gray-700 ${
                isExpanded ? "w-[300px]" : "w-[76px]"
            }`}
            onMouseEnter={setExpandedTrue}
            onMouseLeave={setExpandedFalse}
            style={{ height: "calc(100vh - 65px)" }}
        >
            <ul className="pt-2">
                <Icon icon={faHome} title="Início" show={true} />
                <Icon icon={faCalendar} title="Agenda" show={true} />
                <Separator />
                <Icon
                    icon={faGraduationCap}
                    caret={faCaretRight}
                    title="Minhas inscrições"
                    show={true}
                />
                <Icon icon={faListCheck} title="Pendentes" />
                {data?.map((item) => (
                    <Icon
                        key={item.id}
                        title={item.title}
                        pfp={item.pfp}
                    ></Icon>
                ))}
                <Separator />
                <Icon
                    icon={faBoxArchive}
                    title="Turmas arquivadas"
                    show={true}
                />
                <Icon icon={faGear} title="Configurações" show={true} />
            </ul>
        </div>
    );
}
