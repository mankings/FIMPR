import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetchLocations();
    }, []);

    const fetchLocations = async () => {
        try {
            const response = await axios.get('http://localhost:8000/ecopoints/');
            setLocations(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // Wrapped navigator.geolocation.getCurrentPosition in a Promise
    const getUserLocation = () => {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    const { latitude, longitude } = position.coords;
                    resolve({ latitude, longitude });
                }, error => {
                    reject(error);
                });
            } else {
                reject(new Error("Geolocation is not supported by this browser."));
            }
        });
    };

    async function getMapsLink(location) {
        try {
            const { latitude, longitude } = await getUserLocation();
            return `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${location.lat},${location.lng}`;
        } catch (error) {
            console.error(error);
            return "Unable to get location";
        }
    }

    return (
        <LocationContext.Provider value={{ locations, getMapsLink }}>
            {children}
        </LocationContext.Provider>
    );
};
