import React, { useContext } from 'react';
import { AiFillSecurityScan } from "react-icons/ai";
import { LuScan } from "react-icons/lu";
import { VisionContext } from '../contexts/VisionContext';
import { MdRecycling } from "react-icons/md";
import '../App.css';

function SubmitPhoto() {

  const { handleButtonClick, handleFileChange, fileInputRef, loading } = useContext(VisionContext);

  return (
    <div className={`box-border flex flex-col ${loading ? 'justify-start' : 'justify-around'} h-full`}>
      {!loading ? (
        <>
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
        </>
      ) : (
            <div className="h-48 mt-5 w-96 skeleton"></div>
      )}
    </div>
  );
}

export default SubmitPhoto;