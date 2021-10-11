import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const mapData = {
  center: [54.751574, 47.573856],
  zoom: 6,
};

const coordinates = [
  [54.289493, 48.369786],
];

const MapSection = () => (
  <>
    <YMaps>
      <Map defaultState={mapData} width="750px" height="350px">
        {coordinates.map((coordinate) => <Placemark geometry={coordinate} />)}
      </Map>
    </YMaps>
  </>
);

export default MapSection;
