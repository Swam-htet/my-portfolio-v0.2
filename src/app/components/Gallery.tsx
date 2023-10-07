import Card from "@/app/components/Card";

export default function Gallery() {
    return (
        <>
            <div className="grid grid-cols-3 gap-10 mt-20">
                <div className="text-center bg-red-500 p-5 col-span-3 xl:col-span-1">
                    <Card/>
                </div>
                <div className="text-center bg-orange-500 p-5 col-span-3 xl:col-span-2">
                    <Card/>
                </div>
                <div className="text-center bg-green-500 p-5 col-span-3 xl:col-span-2">
                    <Card/>
                </div>
                <div className="text-center bg-blue-500 p-5 col-span-3 xl:col-span-1">
                    <Card/>
                </div>

            </div>
        </>)
}