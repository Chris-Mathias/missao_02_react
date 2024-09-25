import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSideBar } from "@/contexts/sideBarContext";

export default function SideBarIcon(props) {
    const { isExpanded } = useSideBar();

    return (
        <li
            className={`items-center hover:bg-gray-700 hover:bg-opacity-55 mr-2
                ${props.show ? "flex" : isExpanded ? "flex" : "hidden"}
                ${props.pfp ? "h-12 rounded-r-[24px]" : "h-10 rounded-r-[20px]"}`}
        >
            <a href="#" className="block whitespace-nowrap overflow-hidden">
                <FontAwesomeIcon
                    icon={props.caret}
                    className={`inline-block ml-[11px] w-[6px]
                    ${isExpanded ? "rotate-90" : ""}`}
                />
                <FontAwesomeIcon
                    icon={props.icon}
                    className={`inline-block mr-7 h-5 w-5
                    ${props.caret ? "ml-[11px]" : "ml-7"}`}
                />
                <img
                    src={props.pfp}
                    className={`rounded-full mr-[22px] ml-[22px] w-8 h-8 object-cover
                        ${props.pfp ? "inline-block" : "hidden"}`}
                />
                <span className="">{props.title}</span>
            </a>
        </li>
    );
}
