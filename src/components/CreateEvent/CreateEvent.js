import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';


const CreateEvent = () => {
    const [eventName, setEventName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [city, setCity] = useState('');
    const [eventStartDate, setEventStartDate] = useState(null);
    const [eventEndDate, setEventEndDate] = useState(null);
    const [eventBannerImage, setEventBannerImage] = useState(null);
    const [eventImagePreview, setEventImagePreview] = useState(null);
    const [eventTotalCapacity, setEventTotalCapacity] = useState(0);

    const createEventStyle = {
        
    } 

    const createEventFormStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        //width: '600px'
    }

    const formFieldStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '600px'
    }



    const onCreateEvent = (e) => {
        e.preventDefault();
    if (eventStartDate && eventEndDate) {
      console.log("Event Start:", format(eventStartDate, 'yyyy-MM-dd HH:mm'));
      console.log("Event End:", format(eventEndDate, 'yyyy-MM-dd HH:mm'));
    } else {
      console.log("Please select both start and end times");
    }
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setEventBannerImage(file);
            setEventImagePreview(URL.createObjectURL(file)); // Preview the selected image
        }
      };

    return (
        <div style={createEventStyle}>
            Create Event
            <form onSubmit={onCreateEvent} style={createEventFormStyle}>
                <div style={formFieldStyle}>
                    <label>Event Name:</label>
                    <input
                        type="text"
                        value={eventName}
                        placeholder="Event Name"
                        onChange={(e) => setEventName(e.target.value)}
                    />
                </div>
                <div style={formFieldStyle}>
                    <label>Event Description:</label>
                    <input
                        type="text"
                        value={eventDescription}
                        placeholder="Event Event Description"
                        onChange={(e) => setEventDescription(e.target.value)}
                    />
                </div>
                <div style={formFieldStyle}>
                    <label>City of the event:</label>
                    <input
                        type="text"
                        value={city}
                        placeholder="Event the city of the Event"
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div style={formFieldStyle}>
                    <label>Total Capacity:</label>
                    <input
                        type="text"
                        value={eventTotalCapacity}
                        placeholder="Event Total Capacity"
                        onChange={(e) => setEventTotalCapacity(e.target.value)}
                    />
                </div>
                
                <div>
                    <label>Start Time:</label>
                    <DatePicker
                    selected={eventStartDate}
                    onChange={(date) => setEventStartDate(date)}
                    showTimeSelect
                    dateFormat="Pp"
                    placeholderText="Select start time"
                    />
                </div>

                <div>
                    <label>End Time:</label>
                    <DatePicker
                    selected={eventEndDate}
                    onChange={(date) => setEventEndDate(date)}
                    showTimeSelect
                    dateFormat="Pp"
                    placeholderText="Select end time"
                    />
                </div>
                <div>
                    <label>Banner Image:</label>
                    <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange} 
                    />
                </div>

                {eventImagePreview && (
                    <div>
                    <img src={eventImagePreview} alt="Image Preview" style={{ width: '300px', marginTop: '10px' }} />
                    </div>
                )}

                <button type="submit">Add Event</button>
                        </form>
                </div>
    )
}

export default CreateEvent;