export default function Activity(props) {
    return (
        <div className="block w-[268px] h-[40px]">
            <h2 className="text-[13px] text-bold text-gray-400">
                {"Data de Entrega: " + props.dataEntrega}
            </h2>
            <p className="text-[13px] text-white">
                <span className="inline-block max-w-[180px] whitespace-nowrap overflow-hidden text-ellipsis hover:underline">
                    {
                        "Dê uma cadeirada no amiginhooooooooooooooooooooooooooooooooooooooooooooooo"
                    }
                </span>
            </p>
        </div>
    );
}
