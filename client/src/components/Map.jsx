import React, { useEffect, useState } from 'react';
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Navbar } from "./";

const Map = () => {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });

  const hospitals = [
    { name: "Hospital Baikal", lat: 42.4635694, lng: 27.4201530 },
    { name: "Hospital Lake ", lat: 42.5124648, lng: 27.4668899 }
  ];

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (!map && userLocation.lat !== 0 && userLocation.lng !== 0) {
      const leafletMap = L.map('map', {
        minZoom: 5
      }).setView([userLocation.lat, userLocation.lng], 14);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(leafletMap);

      setMap(leafletMap);
    }
  }, [map, userLocation]);

  useEffect(() => {
    if (map && userLocation.lat !== 0 && userLocation.lng !== 0) {
      // Add marker for user's location
      L.marker([userLocation.lat, userLocation.lng])
        .addTo(map)
        .bindPopup('Your Location');

      // Add hospital markers with red color
      hospitals.forEach(hospital => {
        L.marker([hospital.lat, hospital.lng], {
          icon: L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
          })
        })
          .addTo(map)
          .bindPopup(hospital.name);
      });
    }
  }, [map, userLocation]);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div id="map" className="w-3/4 h-2/3 border-2 border-gray-300 rounded-xl mt-56 md:mt-0" />
      </div>
    </>
  );
};

export default Map;
