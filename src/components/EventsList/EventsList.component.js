import React from 'react';
import eventData from '../../eventlist';
import boardGames from '../../../src/assets/board-games.jpg';

const EventList = () => {

    const eventCardStyle = {
        display: 'flex',
        flexDirection: 'column',
        border: 'solid 1px black',
        height: '290px',
        width: '800px',
        padding: '20px',
        borderRadius: '5px',
        margin: '20px auto',
        flexDirection: 'row'
    }

    const bannerImageStyle = {
        width: '180px',
        height: '270px',
    }

  return (
    <div>
      {eventData.events.map(event => (
        <div key={event.eventId} style={eventCardStyle}>
            <div>
                <h2>{event.eventName}</h2>
                <p>{event.eventDescription}</p>
                <p>Start: {new Date(event.eventStartTime).toLocaleString()}</p>
                <p>Fee: ${event.registrationFee}</p>
            </div>
            <div>
                <img src={boardGames} style={bannerImageStyle}/>
            </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;