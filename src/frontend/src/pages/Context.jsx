import Top from "../components/Top"
import { FaBookOpenReader } from "react-icons/fa6";
import { AiFillSecurityScan } from "react-icons/ai";
import { LuScan } from "react-icons/lu";
import Landing from "./Landing";
import Perfil from "./Perfil";
import Scan from "./Scan";



function Context() {


  return (
    <div className="flex flex-col max-h-screen box-border justify-around">
        <Top></Top>
        <div className="h-[calc(100vh-96px)] flex flex-col">
        <Landing></Landing>
        {/*<Perfil></Perfil>*/}
        {/*<Scan></Scan>*/}
        </div>
    </div>
  );
}

export default Context;