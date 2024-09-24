import Icon from "../../icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faIdBadge,
    faFolder,
    faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useData } from "@/contexts/dataContext";

export default function Card(props) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const { handleDelete } = useData();

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div className="bg-base-100 w-75 h-73 border-[1px] border-gray-700 rounded-lg cursor-pointer hover:shadow-2xl">
            <div
                className="flex flex-col relative h-[100px] pb-3 p-4 rounded-t-lg w-full bg-cover bg-center bg-black/40 bg-blend-darken"
                style={{ backgroundImage: `url("${props.bg}")` }}
            >
                <div className="hover:underline">
                    <div className="flex justify-between w-full h-7">
                        <h1 className="block text-xl text-bold text-ellipsis overflow-hidden whitespace-nowrap">
                            {props.title}
                        </h1>
                        <Icon className="m-[-12px]" onClick={togglePopup}>
                            <FontAwesomeIcon
                                icon={faEllipsisVertical}
                                className="h-[18px]"
                            />
                        </Icon>
                    </div>
                    <div className="block text-sm text-ellipsis overflow-hidden whitespace-nowrap w-[180px] h-5">
                        {props.subtitle}
                    </div>
                </div>
                <div className="block mt-auto text-sm text-ellipsis overflow-hidden whitespace-nowrap w-[180px] h-5 hover:underline">
                    {props.teacher}
                </div>
                <div
                    className={`absolute z-20 p-3 right-0 mt-8 mr-[-56px] w-[100px] bg-base-100 rounded-md hover:bg-base-200 shadow-black shadow-2xl transition-all duration-150
                        ${
                            isPopupOpen
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-95 pointer-events-none"
                        }`}
                >
                    <div
                        className="flex text-base font-bold justify-center"
                        onClick={() => handleDelete(props.id)}
                    >
                        Excluir
                    </div>
                </div>
            </div>
            <div className="flex justify-end pt-3 p-4 h-[135px] w-full border-b-[1px] border-gray-700">
                <div className="flex flex-col w-[190px] h-[105px]">
                    {props.children}
                </div>
                <img
                    className="h-[75px] w-[75px] mt-[-49.5px] rounded-full object-cover z-10"
                    src={props.pfp}
                />
            </div>
            <div className="flex justify-end p-1 h-[57px] w-full rounded-b-lg">
                <Icon>
                    <FontAwesomeIcon icon={faIdBadge} className="h-[18px]" />
                </Icon>
                <Icon>
                    <FontAwesomeIcon icon={faFolder} className="h-[18px]" />
                </Icon>
            </div>
        </div>
    );
}
