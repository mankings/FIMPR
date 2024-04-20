import React from 'react';
import { FaBookOpenReader } from "react-icons/fa6";
import { AiFillSecurityScan } from "react-icons/ai";
import { LuScan } from "react-icons/lu";



function Landing() {
    const fileInputRef = React.useRef(null);
    
    const handleButtonClick = () => {
      fileInputRef.current.click();
    };

  return (
    <div className="flex flex-col box-border justify-around h-full">
        <div className="flex flex-col gap-2 h-fit mt-20">
        <h1 className="text-5xl font-bold">Bem-vind@ ao <span className="text-primary font-black tracking-wider	">FIMPR</span></h1>
        <button className="btn btn-outline btn-primary w-fit">Saber mais</button>
        </div>
        <div className="w-full flex flex-col gap-4">
            <div className="flex flex-row gap-4 h-fit w-fit items-center">
                <AiFillSecurityScan className="text-3xl text-primary"></AiFillSecurityScan>
                Number of available data: 2
            </div>
            <div className="flex flex-row gap-4 h-fit w-fit items-center">
                <AiFillSecurityScan className="text-3xl text-primary"></AiFillSecurityScan>
                Number of available data: 2
            </div>
            <div className="flex flex-row gap-4 h-fit w-fit items-center">
                <AiFillSecurityScan className="text-3xl text-primary"></AiFillSecurityScan>
                Number of available data: 2
            </div>
            

        </div>
        {/* button cards */}
    <div className="flex flex-col gap-4">
        <form>
        {/* Hidden file input */}
        <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }} // Hide the input
            onChange={e => console.log(e.target.files)} // Handle file selection
        />
        {/* Visible button to trigger the file input */}
            <button 
                type="button" // Change this to 'button' to avoid form submission on click
                className="btn btn-primary h-fit px-4 py-10 text-primary-content"
                onClick={handleButtonClick} // Attach the click handler
            >
            <div className="h-fit text-8xl">
              <LuScan />
            </div>
            <div>
              <span className="text-2xl font-bold">Utilizar o FIMPR</span>
              <p className="font-normal">a nossa ferramenta de reconhecimento de resíduos</p>
            </div>
        </button>
        </form>
            {/*<button className="w-full bg-primary p-4 text-primary-content flex flex-row gap-4 items-center text-left">
                <div className="h-fit text-3xl "><FaBookOpenReader /></div>
                <div>
                    <span className="text-2xl font-bold">F.A.Q</span>
                    <p>informações sobre a área</p>
                </div>
            </button>*/} 
        </div>
    </div>
  );
}

export default Landing;