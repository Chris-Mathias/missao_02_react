import CardComp from "./card";
import { useData } from "@/contexts/dataContext";

export default function Grid() {
    const { data } = useData();

    console.log(data);

    return (
        <div className="grid bg-base-100 grid-cols-auto-fit grid-rows-auto-fit gap-6 ml-[76px] p-6 w-screen">
            {data?.map((item) => (
                <CardComp
                    key={item.id}
                    title={item.title}
                    subtitle={item.subtitle}
                    teacher={item.teacher.toUpperCase()}
                    pfp={item.pfp}
                    bg={item.bg}
                ></CardComp>
            ))}
        </div>
    );
}
