import React, { useState, useEffect, useContext } from "react";
import Top from "../components/Top";
import { VisionContext } from "../contexts/VisionContext";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Analysis() {
    const { info } = useContext(VisionContext);
    const [recyclable, setRecyclable] = useState(true);

    useEffect(() => {
        if (info) {
            setRecyclable(info.recyclable.toLowerCase() === 'no' ? false : true);
        }
    }, [info]);
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true
        });
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [recyclable]);
    console.log('recyclable:', recyclable)
    return (
        <div className="flex flex-col items-center justify-center h-fit gap-4 overflow-hidden h-[calc(100vh*2 - 32px)]">
            <Top></Top>
            <div className={`card w-96 text-primary-content ${recyclable ? 'bg-primary' : 'bg-secondary'}`} data-aos="fade-up" data-aos-delay="200">
                <div className="card-body">
                    <h2 className="text-5xl card-title">is it recyclable?</h2>
                    <p className="text-2xl">{info.recyclable}!</p>
                </div>
            </div>

            <div className={`card w-96 text-primary-content bg-info ${recyclable ? '' : 'hidden'}`} data-aos="fade-up" data-aos-delay="2000">
                <div className="card-body">
                    <h2 className="text-5xl card-title">how do I recycle it?</h2>
                    <p className="text-2xl">{info.instructions}</p>
                </div>
            </div>

            <div className={`card w-96 text-accent bg-neutral ${recyclable ? '' : 'hidden'}`} data-aos="fade-up" data-aos-delay="3000">
                <div className="card-body">
                    <h2 className="text-5xl card-title">where would I recycle it?</h2>
                    <p className="text-2xl">{info.bins}</p>
                </div>
            </div>

        </div>
    );
}

export default Analysis;
