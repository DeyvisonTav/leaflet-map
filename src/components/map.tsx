"use client";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
export function LeafletMap() {
  const position: any = [-7.868834, -35.439212];

  const color: any = { color: "red" };
  return (
    <div>
      <MapContainer
        className="w-full h-[61rem]"
        center={position}
        zoom={15}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            skytrain. <br /> waterfrom.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
