import CardComp from "./card";

export default function Grid() {
    return (
        <div className="grid bg-base-100 grid-cols-auto-fit grid-rows-auto-fit gap-6 ml-[76px] p-6 w-screen">
            <CardComp
                bg="https://gstatic.com/classroom/themes/img_learnlanguage.jpg"
                pfp="https://lh3.googleusercontent.com/a-/ALV-UjVUojLAsXB1bfaHlwRs3FAVLqVpqqJS70eqiXmNflLeUHtPhcs=s75-c"
                title="3º Sistemas Embarcados"
                subtitle="2024"
                teacher="LORI RONALDO FLORES MACHADO FILHO"
            />
            <CardComp
                bg="https://gstatic.com/classroom/themes/img_read.jpg"
                pfp="https://lh3.googleusercontent.com/a-/ALV-UjVc2D-uGNmOKQ8fcvWsSLoqlNIPGu6jq1SCFasBbm7x6q3XRtE=s75-c"
                title="4º Programação de Computadores"
                subtitle="2024"
                teacher="JOSÉ LUIZ GOMES DO AMARAL"
            />
            <CardComp
                bg="https://gstatic.com/classroom/themes/img_learnlanguage.jpg"
                pfp="https://lh3.googleusercontent.com/a-/ALV-UjUrvKLU86lIH5yftrczso7qim-AIh1HuuXFk4iNgtmwheJTP30=s75-c"
                title="5º Circuitos Digitais"
                subtitle="2024"
                teacher="KARLA ANA LIMA DE OLIVEIRA"
            />
            <CardComp
                bg="https://gstatic.com/classroom/themes/img_read.jpg"
                pfp="https://lh3.googleusercontent.com/a/ACg8ocJfQbvGd_sqWMrlzlC2Dh8HydqgcpZF10LYzGH1eLM5-Amy8Q=s75-c-mo"
                title="6º Procrastinação 2"
                subtitle="2024"
                teacher="FERNANDO HENRIQUE DOS SANTOS"
            />
        </div>
    );
}
