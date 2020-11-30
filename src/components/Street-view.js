import React, { useEffect, useState } from "react";
import ReactStreetview from "react-streetview";
import Geocode from "react-geocode";

const googleMapsApiKey = "AIzaSyDK_7XM1-phi9-py-amxAJIx4F10PqZ8B8";
Geocode.setApiKey(googleMapsApiKey);

export const StreetView = ({ address }) => {
  const [latLng, setLatLng] = useState();
  useEffect(() => {
    Geocode.fromAddress(address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLatLng({ lat, lng });
      },
      (error) => {
        console.error(error);
      }
    );
  }, [address]);
  if (!latLng) {
    return null;
  }
  const lat = latLng.lat;
  const lng = latLng.lng;
  console.log(latLng);

  const streetViewPanoramaOptions = {
    position: { lat: Number(lat), lng: Number(lng) },
    pov: { heading: 100, pitch: 0 },
    zoom: 1,
  };

  return (
    <div
      style={{
        width: "50%",
        height: "350px",
        backgroundColor: "#eeeeee",
      }}
    >
      <ReactStreetview
        apiKey={googleMapsApiKey}
        streetViewPanoramaOptions={streetViewPanoramaOptions}
      />
    </div>
  );
};
