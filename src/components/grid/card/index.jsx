import Icon from "../../icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdBadge,
  faFolder,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  return (
    <div className="bg-base-100 w-75 h-73 border-[1px] border-gray-700 rounded-lg cursor-pointer hover:shadow-xl">
      <div
        className="flex flex-col h-[100px] pb-3 p-4 rounded-t-lg w-full bg-cover bg-center"
        style={{ backgroundImage: `url("${props.bg}")` }}
      >
        <div className="hover:underline">
          <div className="flex justify-between w-full h-7">
            <h1 className="block text-xl text-bold text-ellipsis overflow-hidden whitespace-nowrap">
              {props.title}
            </h1>
            <Icon className="m-[-12px]">
              <FontAwesomeIcon icon={faEllipsisVertical} className="h-[18px]" />
            </Icon>
          </div>
          <div className="block text-sm text-ellipsis overflow-hidden whitespace-nowrap w-[180px] h-5">
            {props.subtitle}
          </div>
        </div>
        <div className="block mt-auto text-sm text-ellipsis overflow-hidden whitespace-nowrap w-[180px] h-5 hover:underline">
          {props.teacher}
        </div>
      </div>
      <div className="flex justify-end pt-3 p-4 h-[135px] w-full border-b-[1px] border-gray-700">
        <div className="block w-[268px] h-[40px]">
          <h2 className="text-[11px] text-gray-400">
            {"Data de Entrega: " + props.dataEntrega}
          </h2>
          <p className="text-[11px] text-white">
            <span className="inline-block max-w-[180px] whitespace-nowrap overflow-hidden text-ellipsis hover:underline">
              {
                "Dê uma cadeirada no amiginhooooooooooooooooooooooooooooooooooooooooooooooo"
              }
            </span>
          </p>
        </div>
        <img
          className="h-[75px] w-[75px] mt-[-49.5px] rounded-full"
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
