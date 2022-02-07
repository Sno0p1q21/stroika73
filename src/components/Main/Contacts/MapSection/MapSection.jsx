import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const mapData = {
  center: [54.261841, 48.315241],
  zoom: 15,
};

const coordinates = [
  [54.261841, 48.315241],
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
