import { MdRecycling } from "react-icons/md";
import { IoSettings } from "react-icons/io5";

function Auth() {


    return (
        <div className="flex flex-col h-fit">
            <div className="flex flex-row justify-between h-fit">
                <div className="flex flex-col items-center self-center gap-2 text-center">
                    <MdRecycling className="text-3xl"></MdRecycling>
                    <span className="font-bold text-1xl">FIMPR</span>
                </div>
            </div>
        </div>
    );
}

export default Auth;