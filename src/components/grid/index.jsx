import CardComp from './card';

export default function Grid() {
    return (
        <div className="grid bg-base-100 grid-cols-auto-fit grid-rows-auto-fit gap-6 ml-[76px] p-6 w-screen">
            <CardComp />
            <CardComp />
            <CardComp />
            <CardComp />
        </div>
    );
}