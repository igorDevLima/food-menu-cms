import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import marker from "./map-marker.png";

const myIcon = L.icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  popupAnchor: [-0, -0],
  iconSize: [30, 30],
});

const Map = ({ center, zoom, adress }) => {
  return (
    <MapContainer
      style={{ height: "350px", width: "350px", borderRadius: "5px" }}
      center={[center[0], center[1]]}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution={`&copy; lat:${center[0]} lon:${center[1]}`}
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[center[0], center[1]]} icon={myIcon}>
        <Popup>{adress}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
