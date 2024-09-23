export default function Icon(props) {
    return (
        <button onClick={props.onClick} className={`btn btn-circle w-12 h-12 btn-ghost hover:bg-opacity-0 ${props.className}`}>
            {props.children}
        </button>
    );
}