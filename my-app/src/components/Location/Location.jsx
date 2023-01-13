import React from 'react';
import './location.css'

export default function Location(props) {
    return (
        <div className='location'>
            <img src={props.imageUrl} alt="" />
            <img src={props.mapsIcon} alt="" />
            <h3>{props.location}</h3>
            <a href={props.mapsUrl}>View on Google Maps</a>
            <h1>{props.title}</h1>
            <h2>{`${props.startDate} - ${props.endDate}`}</h2>
            <p>{props.desc}</p>
        </div>
    )
}