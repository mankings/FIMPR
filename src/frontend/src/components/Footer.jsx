import { MdRecycling } from "react-icons/md";
import { useContext } from 'react';
import { VisionContext } from '../contexts/VisionContext';

function Footer() {
    const { resetEverything } = useContext(VisionContext);

    return (
        <div className="flex flex-col h-fit">
            <div className="flex flex-row justify-between h-fit">
                <div className="flex flex-col items-center self-center gap-2 mx-auto text-center">
                    <button onClick={resetEverything} className="text-xl font-extrabold btn btn-ghost bg-neutral">
                        let's recycle something else?
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Footer;