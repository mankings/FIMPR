import React, { useContext } from 'react';
import { AiFillSecurityScan } from "react-icons/ai";
import { LuScan } from "react-icons/lu";
import { VisionContext } from '../contexts/VisionContext';
import '../App.css';

function SubmitPhoto() {

  const { handleButtonClick, handleFileChange, fileInputRef, loading } = useContext(VisionContext);
  return (
    <div className="box-border flex flex-col justify-around h-full">
      <div className="flex flex-col gap-2 mt-20 h-fit">
        <h1 className="text-5xl font-bold">Bem-vind@ ao <span className="font-black tracking-wider text-primary ">FIMPR</span></h1>
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
            className="px-4 py-4 btn btn-primary h-fit text-primary-content animate-pulse"
            onClick={handleButtonClick}>
            <div className="h-fit text-8xl">
              <LuScan />
            </div>
            <div>
              <span className="text-2xl font-bold">FIMPaR</span>
              <p className="font-normal">usa a nossa ferramenta de reconhecimento de resíduos</p>
            </div>
          </button>
        </form>
      </div>
      {loading && (
        <div className="flex items-center justify-center">
          <div className="w-12 h-12 mb-4 ease-linear border-8 border-t-8 border-gray-200 rounded-full loader"></div>
          <span className="text-xl font-semibold">Processing image...</span>
        </div>
      )}
    </div>
  );
}

export default SubmitPhoto;
