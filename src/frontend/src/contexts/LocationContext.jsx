import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
    const [locations, setLocations] = useState([]);
    const [userLatitude, setUserLatitude] = useState(0);
    const [userLongitude, setUserLongitude] = useState(0);

    useEffect(() => {
        fetchLocations();
        getUserLocation();
    }
    , []);
    const fetchLocations = async () => {
        try {
            const response = await axios.get('http://localhost:8000/ecopoints/');
            setLocations(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const getUserLocation = async () => {
        try {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const { userLatitude, userLongitude } = position.coords;
                    setUserLatitude(userLatitude);
                    setUserLongitude(userLongitude);
                    console.log(userLatitude, userLongitude);
                }, (error) => {
                    console.error(error);
                });
            } else {
                console.error("Geolocation is not supported by this browser.");
            }
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <LocationContext.Provider value={{ }}>
            {children}
        </LocationContext.Provider>
    );
};