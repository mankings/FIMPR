import { MdRecycling } from "react-icons/md";
import { IoSettings } from "react-icons/io5";

function Auth() {


  return (
    <div className="flex flex-col h-fit">
        <div className="flex flex-row h-fit justify-between">
            <div className="flex flex-col gap-2 text-center  items-center self-center">
                <MdRecycling className="text-3xl"></MdRecycling>
                <span className="text-1xl font-bold">FIMPR</span>
            </div>
            <div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn rounded-full h-16 max-w-16"><IoSettings className="text-3xl"/></div>
                <ul tabIndex={0} className="dropdown-content text-lg z-[1] menu p-2 shadow bg-base-300 rounded-box w-52">
                    <li><a>Perfil</a></li>
                    <li><a>Configurações</a></li>
                    <li><a>Sign out</a></li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Auth;