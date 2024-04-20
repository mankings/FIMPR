import React, { createContext, useState } from 'react';
import axios from 'axios';

export const VisionContext = createContext();

export const VisionProvider = ({ children }) => {
    const [base64, setBase64] = useState(null);
    const fileInputRef = React.useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const base64 = await convertFileToBase64(file);
            setBase64(base64);
            sendFileToServer(base64);
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
        const url = 'http://127.0.0.1:8000/upload-image/';
        axios.post(url, { image: base64 })
            .then(response => {
                console.log('Image uploaded successfully:', response.data);
            })
            .catch(error => {
                console.error('Error uploading image:', error);
            });
    };

    return (
        <VisionContext.Provider value={{ handleButtonClick, handleFileChange, base64, fileInputRef }}>
            {children}
        </VisionContext.Provider>
    );
};