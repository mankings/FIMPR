import React, { createContext, useState } from 'react';
import axios from 'axios';

export const VisionContext = createContext();

export const VisionProvider = ({ children }) => {
    const [base64, setBase64] = useState(null);
    const fileInputRef = React.useRef(null);
    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(false); // Added loading state
    const [submitted, setSubmitted] = useState(false);
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const base64 = await convertFileToBase64(file);
            setBase64(base64);
            sendFileToServer(base64)
        } else {
            console.error('Please select an image file.');
        }
    };

    const convertFileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
            reader.readAsDataURL(file);
        });
    };

    const sendFileToServer = (base64) => {
        setLoading(true);
        const url = 'http://35.181.153.8:8000/upload-image';
        axios.post(url, { image: base64 })
            .then(response => {
                const content = response.data.result.choices[0].message.content;

                // Split the content by newlines and then by the ': ' delimiter to create key-value pairs
                const lines = content.split('\n');
                const info = {};
                lines.forEach(line => {
                    const [key, value] = line.split(': ').map(s => s.trim());
                    info[key.toLowerCase()] = value; // Convert the key to lowercase for consistent JSON keys
                });

                console.log('Content JSON:', info);
                setInfo(info);
                setLoading(false);
                setSubmitted(true);
            })
            .catch(error => {
                console.error('Error uploading image:', error);
                setLoading(false);
            });
    };

    function resetEverything() {
        setBase64(null);
        setInfo(null);
        setLoading(false);
        setSubmitted(false);
    }
    return (
        <VisionContext.Provider value={{ handleButtonClick, handleFileChange, base64, fileInputRef, info, loading, submitted, setSubmitted, resetEverything }}>
            {children}
        </VisionContext.Provider>
    );
};