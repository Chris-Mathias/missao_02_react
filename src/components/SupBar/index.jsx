import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function SupBar() {
    return (
        <div className="navbar bg-base-100 border-b-[1px] border-gray-700">
            <div className="flex-none">
                <button className="btn btn-circle w-12 h-12 btn-ghost hover:bg-gray-700 mr-3 ml-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-6 w-6 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>
            <div className="flex-1 hover:text-green-600 hover:underline">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 579 500"
                    width="2500"
                    height="2159"
                    className="inline-block h-7 w-7 stroke-current mr-3"
                >
                    <linearGradient
                        id="a"
                        gradientTransform="matrix(12.992 0 0 -4 -1584.623 1631.087)"
                        gradientUnits="userSpaceOnUse"
                        x1="154.865"
                        x2="154.865"
                        y1="295.747"
                        y2="282.634"
                    >
                        <stop
                            offset="0"
                            stop-color="#bf360c"
                            stop-opacity=".2"
                        />
                        <stop
                            offset="1"
                            stop-color="#bf360c"
                            stop-opacity=".02"
                        />
                    </linearGradient>
                    <radialGradient
                        id="b"
                        cx="131.401"
                        cy="367.2"
                        gradientTransform="matrix(38.0002 0 0 -38 -4973.328 13965.323)"
                        gradientUnits="userSpaceOnUse"
                        r="18.197"
                    >
                        <stop offset="0" stop-color="#fff" stop-opacity=".1" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </radialGradient>
                    <path d="M52.6 52.6h473.7v394.7H52.6z" fill="#0f9d58" />
                    <path
                        d="M394.7 263.2c16.4 0 29.6-13.3 29.6-29.6S411 204 394.7 204s-29.6 13.3-29.6 29.6 13.3 29.6 29.6 29.6zm0 19.7c-31.7 0-65.8 16.8-65.8 37.6v21.6h131.6v-21.6c0-20.8-34.1-37.6-65.8-37.6zm-210.5-19.7c16.4 0 29.6-13.3 29.6-29.6S200.5 204 184.2 204s-29.6 13.3-29.6 29.6 13.3 29.6 29.6 29.6zm0 19.7c-31.7 0-65.8 16.8-65.8 37.6v21.6H250v-21.6c0-20.8-34.1-37.6-65.8-37.6z"
                        fill="#57bb8a"
                    />
                    <path
                        d="M289.5 236.8c21.8 0 39.5-17.7 39.4-39.5 0-21.8-17.7-39.5-39.5-39.4-21.8 0-39.4 17.7-39.4 39.5s17.7 39.4 39.5 39.4zm0 26.4c-44.4 0-92.1 23.6-92.1 52.6v26.3h184.2v-26.3c0-29.1-47.7-52.6-92.1-52.6z"
                        fill="#f7f7f7"
                    />
                    <path d="M342.1 421.1h118.4v26.3H342.1z" fill="#f1f1f1" />
                    <path
                        d="M539.5 0h-500C17.7 0 0 17.7 0 39.5v421.1C0 482.3 17.7 500 39.5 500h500c21.8 0 39.5-17.7 39.5-39.5v-421C578.9 17.7 561.3 0 539.5 0zm-13.2 447.4H52.6V52.6h473.7z"
                        fill="#f4b400"
                    />
                    <path
                        d="M539.5 0h-500C17.7 0 0 17.7 0 39.5v3.3C0 21 17.7 3.3 39.5 3.3h500C561.3 3.3 579 21 579 42.8v-3.3C578.9 17.7 561.3 0 539.5 0z"
                        fill="#fff"
                        opacity=".2"
                    />
                    <path
                        d="M539.5 496.7h-500C17.7 496.7 0 479 0 457.2v3.3C0 482.3 17.7 500 39.5 500h500c21.8 0 39.5-17.7 39.5-39.5v-3.3c-.1 21.8-17.7 39.5-39.5 39.5z"
                        fill="#bf360c"
                        opacity=".2"
                    />
                    <path
                        d="M460.3 447.4H341.9l52.6 52.6h118.3z"
                        fill="url(#a)"
                    />
                    <path
                        d="M52.6 49.3h473.7v3.3H52.6z"
                        fill="#263238"
                        opacity=".2"
                    />
                    <path
                        d="M52.6 447.4h473.7v3.3H52.6z"
                        fill="#fff"
                        opacity=".2"
                    />
                    <path
                        d="M539.5 0h-500C17.7 0 0 17.7 0 39.5v421.1C0 482.3 17.7 500 39.5 500h500c21.8 0 39.5-17.7 39.5-39.5v-421C578.9 17.7 561.3 0 539.5 0z"
                        fill="url(#b)"
                    ></path>
                </svg>
                <h1 className="text-xl">Google Sala de Aula</h1>
            </div>
            <div className="flex-none">
                <button className="btn btn-circle w-12 h-12 btn-ghost hover:bg-gray-700">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block h-5 w-5"
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </svg>
                </button>
            </div>
            <div className="flex-none">
                <button className="btn btn-circle w-12 h-12 btn-ghost hover:bg-gray-700">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="inline-block h-5 w-5 stroke-current"
                    >
                        <path d="M7 5C7 6.10457 6.10457 7 5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5Z" />
                        <path d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z" />
                        <path d="M19 7C20.1046 7 21 6.10457 21 5C21 3.89543 20.1046 3 19 3C17.8954 3 17 3.89543 17 5C17 6.10457 17.8954 7 19 7Z" />
                        <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" />
                        <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" />
                        <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" />
                        <path d="M5 21C6.10457 21 7 20.1046 7 19C7 17.8954 6.10457 17 5 17C3.89543 17 3 17.8954 3 19C3 20.1046 3.89543 21 5 21Z" />
                        <path d="M14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19Z" />
                        <path d="M19 21C20.1046 21 21 20.1046 21 19C21 17.8954 20.1046 17 19 17C17.8954 17 17 17.8954 17 19C17 20.1046 17.8954 21 19 21Z" />
                    </svg>
                </button>
            </div>
            <div className="flex-none">
                <button className="btn btn-circle w-12 h-12 btn-ghost hover:bg-gray-700 mr-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block h-8 w-8"
                    >
                        <FontAwesomeIcon icon={faCircleUser} />
                    </svg>
                </button>
            </div>
        </div>
    );
}
