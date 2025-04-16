"use client";

import { FC } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { destinations } from "@/data/destinations";
import "leaflet/dist/leaflet.css";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

interface Props {
  onSelect: (id: number) => void;
}

const MapView: FC<Props> = ({ onSelect }) => {
  const center: [number, number] = [-8.4095, 115.1889];

  return (
    <MapContainer
      scrollWheelZoom
      center={center}
      zoom={9}
      className="h-80 w-full z-0 border border-neutral-400 rounded-xl"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap"
      />
      {destinations.map((d) => (
        <Marker
          key={d.id}
          position={[d.lat, d.lng]}
          eventHandlers={{ click: () => onSelect(d.id) }}
        >
          <Popup>{d.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
