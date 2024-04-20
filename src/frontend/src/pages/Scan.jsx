import { LuScan } from "react-icons/lu";
function Scan() {


  return (
    <div className="flex flex-col box-border mt-6 h-full w-full gap-6">
      {/* recebe a foto que foi tirada e pergunta se quer adicionar mais alguma para aumentar a confiabilidade?*/}
        <div className="flex flex-row gap-4">
            <div className="w-24 h-44">
                <img src="src/assets/manco.jpeg" alt="" className="object-cover w-full h-full rounded-xl border-primary border-4 border-solid" />
            </div>
            <button className="btn btn-primary w-32 h-full">
            <span className="text-xl flex flex-col items-center gap-4"><LuScan className="text-4xl"></LuScan>Enviar outra foto</span>
            </button>
        </div>
        <div>
            a
        </div>
    </div>
  );
}

export default Scan;