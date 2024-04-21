import React, { useState, useEffect, useContext } from "react";
import Top from "../components/Top";
import { VisionContext } from "../contexts/VisionContext";
import { LocationContext } from "../contexts/LocationContext";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Bins from "../components/Bins";
import Footer from "../components/Footer";
import { IoIosPin } from "react-icons/io";

function Analysis() {
    const { info } = useContext(VisionContext);
    const { getMapsLink, locations } = useContext(LocationContext);
    const [recyclable, setRecyclable] = useState(true);
    const [mapsLink, setMapsLink] = useState('');

    useEffect(() => {
        if (info) {
            setRecyclable(info.recyclable.toLowerCase() === 'no' ? false : true);
        }
    }, [info]);

    useEffect(() => {
        AOS.init({
            duration: 2500,
            once: true
        });
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [recyclable]);

    useEffect(() => {
        const fetchMapsLink = async () => {
            const location = locations[0];
            try {
                const link = await getMapsLink(location);
                setMapsLink(link);
            } catch (error) {
                console.error('Failed to get maps link:', error);
            }
        };

        if (info && info.bins && info.bins.length > 0) {
            fetchMapsLink();
        }
    }, [info, getMapsLink]);

    useEffect(() => {
        // Scroll to the bottom of the page after the component mounts
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    }, []);
    return (
        <div className="flex flex-col items-center justify-around h-fit gap-4 overflow-hidden h-[calc(100vh*2 - 32px)]">
            <Top></Top>
            <div className={`card w-[90dvw] text-primary-content ${recyclable ? 'bg-primary' : 'bg-secondary'}`} data-aos="fade-up" data-aos-delay="200">
                <div className="card-body">
                    <h2 className="text-5xl card-title">recyclable?</h2>
                    <p className="text-2xl">{info.recyclable}!</p>
                </div>
            </div>

            <div className={`card w-[90dvw] text-primary-content bg-info ${recyclable ? '' : 'hidden'}`} data-aos="fade-up" data-aos-delay="2000">
                <div className="card-body">
                    <h2 className="text-5xl card-title">how?</h2>
                    <p className="text-2xl">{info.instructions}</p>
                </div>
            </div>

            <div className={`card w-[90dvw] text-neutral-content bg-neutral ${recyclable ? '' : 'hidden'}`} data-aos="fade-up" data-aos-delay="2800">
                <div className="card-body">
                    <div className="flex justify-between">
                        <div className="text-5xl card-title">where?</div>
                        <a href={VITE_MAPS_LINK}
                            target="_blank" rel="noreferrer">
                            <IoIosPin className={`text-6xl animate-pulse`}></IoIosPin>
                        </a>
                    </div>
                    <Bins bins={info.bins}></Bins>
                </div>
            </div>


            <div data-aos="fade-up" data-aos-delay="3000">
                <Footer />
            </div>
        </div>
    );
}

export default Analysis;
