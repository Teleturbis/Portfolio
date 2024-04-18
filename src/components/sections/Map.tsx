'use client';

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import clsx from 'clsx';

import type { MapType } from '@/locales/types';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 49.771229,
  lng: 9.31763,
};

type MarkerData = {
  position: google.maps.LatLngLiteral;
  title: string;
  content: string;
};

export default function Map({ lang }: { lang: MapType }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_MAPS_API_KEY}`,
  });

  const markers: MarkerData[] = [
    {
      position: { lat: 49.771229, lng: 9.31763 },
      title: 'My Location',
      content: 'I am here!',
    },
  ];

  return (
    <div className='py-12 sm:py-24 bg-brand-dark' id='Location'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='pb-8'>
          <h2 className='text-xl sm:text-4xl font-semibold text-white'>
            {lang.title}
          </h2>
          <p className='text-gray-300 text-xs sm:text-sm'>{lang.subTitle}</p>
        </div>

        <div
          className={clsx(
            'overflow-hidden sm:mx-0 rounded-2xl w-full h-64 sm:h-96 bg-white',
            {
              // 'animate-pulse': !isLoaded,
            }
          )}
        >
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={9}
            >
              {markers.map((marker, index) => (
                <Marker key={index} position={marker.position} />
              ))}
            </GoogleMap>
          ) : (
            <div className='bg-gray-300 w-full h-full animate-pulse' />
          )}
        </div>
      </div>
    </div>
  );
}
