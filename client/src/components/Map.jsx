import React, { useEffect, useState } from 'react';
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Navbar } from "./";

const Map = () => {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });

  // Function to get user's location
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
      // Initialize the map with maximum zoom level set to 14
      const leafletMap = L.map('map', {
        minZoom: 5
      }).setView([userLocation.lat, userLocation.lng], 14);

      // Add OpenStreetMap layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(leafletMap);

      // Set the map state
      setMap(leafletMap);
    }
  }, [map, userLocation]);

  useEffect(() => {
    if (map && userLocation.lat !== 0 && userLocation.lng !== 0) {
      // Add marker for user's location
      L.marker([userLocation.lat, userLocation.lng])
        .addTo(map)
        .bindPopup('Your Location');
    }
  }, [map, userLocation]);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div id="map" className="w-2/4 h-2/3 border-2 border-gray-300 rounded-xl" />
      </div>
    </>
  );
};

export default Map;
