import React, { useContext, useEffect } from 'react';
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
                className={`px-4 py-10 btn btn-primary h-fit text-primary-content`}
                onClick={handleButtonClick}>
                <div className="h-fit text-8xl">
                  <LuScan />
                </div>
                <div>
                  <span className="font-bold text-7xl">FIMPaR</span>
                  <p className="text-xl font-normal">click here to scan some trash</p>
                </div>
              </button>
            </form>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="h-48 mt-5 w-[90dvw] skeleton"></div>
          <div className="h-48 mt-5 w-[90dvw] skeleton"></div>
          <div className="h-48 mt-5 w-[90dvw] skeleton"></div>
        </div>
      )}
    </div>
  );
}

export default SubmitPhoto;
