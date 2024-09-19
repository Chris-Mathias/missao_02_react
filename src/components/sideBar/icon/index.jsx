import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideBarIcon(props) {
    return (
        <li className="flex items-center h-10 hover:bg-gray-700 hover:rounded-r-[20px] mr-2">
            <a href="#" className="block whitespace-nowrap overflow-hidden">
                <FontAwesomeIcon icon={props.icon} className="mr-7 ml-7 w-5" />
                <span className="">{props.label}</span>
            </a>
        </li>
    );
}
