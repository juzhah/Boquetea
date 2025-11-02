"use client";
import * as React from "react";
import { Map } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css"; // See notes below

function InnerMap() {
  return (
    <Map
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
      }}
      mapStyle="https://demotiles.maplibre.org/style.json"
    />
  );
}

export function MapContainer() {
  return (
    <div className="w-full h-full">
      <InnerMap />
    </div>
  );
}
