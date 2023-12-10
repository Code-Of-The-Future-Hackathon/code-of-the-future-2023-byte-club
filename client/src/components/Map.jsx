import React, { useEffect, useState } from 'react';
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Navbar, Footer } from "./";

const Map = () => {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });

  const hospitals = [
    { name: "МЦ „Света София", lat: 42.49450, lng: 27.47348 },
    { name: "МБАЛ Бургасмед", lat: 42.46331, lng: 27.42073 },
    { name: "Център за кожно-венерически заболявания", lat: 42.50031, lng: 27.47478 },
    { name: "Комплексен онкологичен център", lat: 42.50136, lng:  27.47540},
    { name: "Диагностично консултативен център", lat: 42.50133, lng: 27.47665 },
    { name: "Специализирана болница за лечение на пневмо-фтизиатрични заболявания", lat: 42.50072 , lng: 27.47715 },
    { name: "ДКЦ Ел Масри", lat: 42.50948, lng: 27.46953 },
    { name: "Областен диспансер за психични заболявания Проф. д-p Иван Темков", lat: 42.51413, lng: 27.47414 },
    { name: "УМБАЛ Бургас", lat: 42.51367, lng: 27.46607 },
    { name: "МБАЛ Д-p Маджуров", lat: 42.51846, lng: 27.46553 },
    { name: "Лайф Хоспитал", lat: 42.52751, lng: 27.46806 },
    { name: "МБАЛ Сърце и мозък", lat: 42.52748, lng: 27.44532 }
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
        <div id="map" className="w-3/4 h-2/3 border-2 border-gray-300 rounded-xl mt-56 md:mt-20" />
      </div>
      <Footer />
    </>
  );
};

export default Map;
