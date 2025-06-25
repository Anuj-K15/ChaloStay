"use client";

import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

// Remove direct imports from leaflet package
// Instead, we'll use public URLs

//@ts-expect-error - Leaflet icon prototype modification is required for proper icon loading
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: "/images/leaflet/marker-icon.png",
  iconRetinaUrl: "/images/leaflet/marker-icon-2x.png",
  shadowUrl: "/images/leaflet/marker-shadow.png",
});

interface MapProps {
  center?: number[];
}

const Map: React.FC<MapProps> = ({ center }) => {
  return (
    <MapContainer
      center={(center as L.LatLngExpression) || [51, -0.09]}
      zoom={center ? 4 : 2}
      scrollWheelZoom={false}
      className="h-[25vh] sm:h-[35vh] rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {center && <Marker position={center as L.LatLngExpression} />}
    </MapContainer>
  );
};

export default Map;
