import React, { useEffect } from "react";
import { MdRecycling } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import { FaArrowAltCircleDown } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Analysis() {
    useEffect(() => {
        AOS.init({
          // settings here can be adjusted based on your needs, for example:
          duration: 1200, // controls animation duration
        });
    }, []);
    return (
        <div className="flex flex-col items-center justify-center h-fit gap-4 overflow-hidden h-[calc(100vh*2 - 32px)]">
            <div className="flex flex-col items-center h-screen gap-4 text-center" data-aos="fade-up">
                <div className="flex flex-col items-center gap-2 text-center h-fit" data-aos="flip-left">
                    <MdRecycling className="text-7xl" />
                    <span className="text-6xl font-bold">FIMPR</span>
                </div>
                <div data-aos="zoom-in">
                    <img src="src/assets/dedo.jpeg" className="object-fill rounded-lg" alt="Your Photo" />
                </div>
                <span className="text-xl" data-aos="fade-down">This is your photo</span>
                <button data-aos="fade-up"><FaArrowAltCircleDown className="text-7xl text-primary" /></button>
            </div>
            <div className="flex flex-col items-center w-full justify-around h-[calc(100vh-32px)]">
                <span className="text-4xl font-bold tracking-wider" data-aos="zoom-in-up">Our Analysis</span>
                <div className="w-full btn btn-primary h-36 text-primary-content" data-aos="zoom-out">a</div>
                <div className="w-full btn btn-success h-36 text-primary-content" data-aos="slide-up">You should</div>
                <div className="w-full btn btn-warning h-36" data-aos="fade-right"></div>
                <button className="flex flex-col items-center p-8 btn btn-primary w-fit text-primary-content text-1xl" data-aos="flip-right">
                    <IoArrowBack className="text-3xl" />
                    Back
                </button>
            </div>
        </div>
    );
}

export default Analysis;
