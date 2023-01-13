import React from 'react';
import './location.css'

export default function Location(props) {
    return (
        <div className='location'>
            <div className='location-body'>
                <img src={props.imageUrl} alt="imageUrl" className='location-image'/>
                <div className='location-block1'>
                    <img src={props.mapsIcon} alt="mapsIcon" className='location-mapsIcon'/>
                    <h3 className='location-location'>{props.location}</h3>
                    <a href={props.mapsUrl} target='_blank' className='location-mapsUrl'>View on Google Maps</a>
                </div>
                <div className='location-block2'>
                    <h1 className='location-title'>{props.title}</h1>
                    <h2 className='location-date'>{`${props.startDate}`}</h2>
                    <p className='location-desc'>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}