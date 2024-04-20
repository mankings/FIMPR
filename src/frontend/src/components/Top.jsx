import { MdRecycling } from "react-icons/md";
import { IoSettings } from "react-icons/io5";

function Top() {


    return (
        <div className="flex flex-col h-fit">
            <div className="flex flex-row justify-between h-fit">
                <div className="flex flex-col items-center self-center gap-2 mx-auto text-center">
                    <MdRecycling className="text-6xl"></MdRecycling>
                </div>
            </div>
        </div>
    );
}

export default Top;