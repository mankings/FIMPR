import React, { useEffect, useContext } from "react";
import { VisionContext } from "../contexts/VisionContext";
import { MdRecycling } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import { FaArrowAltCircleDown } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Analysis() {
    const { info } = useContext(VisionContext);
    useEffect(() => {
        AOS.init({
            // settings here can be adjusted based on your needs, for example:
            duration: 1200, // controls animation duration
        });
    }, []);
    return (
        <div className="flex flex-col items-center justify-center h-fit gap-4 overflow-hidden h-[calc(100vh*2 - 32px)]">
            <div className="flex flex-col items-center h-screen gap-4 text-center" data-aos="fade-up">
                <div className="flex flex-col items-center gap-2">
                        <div>
                            <p>Recyclable: {info.recyclable}</p>
                            <p>Instructions: {info.instructions}</p>
                            <p>Bins: {info.bins}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Analysis;
