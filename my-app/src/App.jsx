import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Location from './components/Location/Location';
import locationData from './locationData';

export default function App() {
    const data = locationData.map((location) => {
        return <Location 
            key={location.id}
            title={location.title}
            location={location.location}
            mapsUrl={location.googleMapsUrl}
            startDate={location.startDate}
            endDate={location.endDate}
            desc={location.description}
            imageUrl={location.imageUrl}
            mapsIcon={location.mapsIcon}
        />
    })
    return (
        <div>
            <Navbar />
            {data}
        </div>
    )
}