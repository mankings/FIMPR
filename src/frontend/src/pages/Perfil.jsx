import { FaTrashAlt } from "react-icons/fa";


function Perfil() {


  return (
    <div className="flex flex-col box-border justify-around h-full w-full">
      <div className="flex flex-col w-full items-center gap-10">
        {/* topo */}
        <div className="flex flex-col w-full items-center gap-4">
          <img src="src/assets/manco.jpeg" alt="" className=" w-40 h-40 object-fill rounded-full border-primary border-8 border-solid" />
          <span className="text-2xl">Olá, <b>Mangay</b></span>
          <p className="text-center"><b>Descrição:</b> Minim dolor et Lorem sit commodo non laboris qui Lorem deserunt.</p>
        </div>
        {/* dados */}
        <div className="w-full flex flex-col gap-2">
          <span className="text-xl font-bold">Estes são os teus status:</span>
          <div className="grid grid-cols-2 gap-4 w-full content-around justify-items-start">
              <div className="btn btn-primary w-full flex flex-row gap-4 p-4 h-full">
                <span className="text-4xl">40</span>
                <p>own scans</p>
              </div>
              <div className="btn btn-secondary w-full flex flex-row gap-4 p-4 h-full">
                <span className="text-4xl">40</span>
                <p>own scans</p>
              </div>
          </div>
        </div>
        {/* ECOPONTO FAVORITO */}
        <div className="flex flex-row gap-4">
          <div className="flex-1 w-full h-full flex justify-center items-center">
            <FaTrashAlt className="text-primary text-8xl"></FaTrashAlt>
          </div>
          <span className="text-3xl flex-1">O ecoponto que mais utilizas é o <b>VIDRÃO</b></span>
        </div>
      </div>
    </div>
  );
}

export default Perfil;