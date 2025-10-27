"use client";
import * as React from "react";
import Map from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

function MapPage() {
  return (
    <Map
      initialViewState={{
        longitude: -82.4527847326343,
        latitude: 8.781183037483382,
        zoom: 12,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="https://tiles.openfreemap.org/styles/liberty"
    />
  );
}

export default MapPage;
