import { RiDeleteBin5Fill } from "react-icons/ri";

const Bins = ({ bins }) => {
    const binTypes = bins.split(', ');  // Adjust split logic based on actual string format

    // Map bin types to colors
    const binColors = {
        yellow: '#f1c40f',
        green: '#2ecc71',
        blue: '#3498db'
    };

    return (
        <div className="flex items-center justify-center gap-4">
            {binTypes.map((bin, index) => (
                <div key={index} className="flex-col items-center justify-end gap-2">
                    <RiDeleteBin5Fill
                        style={{
                            color: binColors.hasOwnProperty(bin.toLowerCase()) ? binColors[bin.toLowerCase()] : '#ccc', // Color the icon based on the bin type
                            fontSize: '80px'  // Set the icon size (optional)
                        }}
                    />
                    <p className="text-lg font-bold text-center">{bin.toLowerCase()}</p>
                </div>
            ))}
        </div>
    );
};

export default Bins;
