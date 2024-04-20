import React, { useContext } from 'react';
import { AiFillSecurityScan } from "react-icons/ai";
import { LuScan } from "react-icons/lu";
import { VisionContext } from '../contexts/VisionContext';

function Landing() {

  const { handleButtonClick, handleFileChange, fileInputRef } = useContext(VisionContext);

  return (
    <div className="box-border flex flex-col justify-around h-full">
      <div className="flex flex-col gap-2 mt-20 h-fit">
        <h1 className="text-5xl font-bold">Bem-vind@ ao <span className="font-black tracking-wider text-primary ">FIMPR</span></h1>
      </div>
      <div className="flex flex-col w-full gap-4">
        {/* Repeatable elements should ideally be mapped from data */}
        {[...Array(3)].map((_, index) => (
          <div className="flex flex-row items-center gap-4 h-fit w-fit" key={index}>
            <AiFillSecurityScan className="text-3xl text-primary"></AiFillSecurityScan>
            Number of available data: 2
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <form>
          <input
            type="file"
            accept="image/*" // Only accept images
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <button
            type="button"
            className="px-4 py-10 btn btn-primary h-fit text-primary-content"
            onClick={handleButtonClick}
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
      </div>
    </div>
  );
}

export default Landing;
