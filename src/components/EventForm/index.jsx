import React, { useState } from 'react';
import Link from '../ReactLink';

function zeroPad (num, places) {
    return String(num).padStart(places, '0')
};

function formatMinutes(value) {
    let hours = parseInt(value / 60) + 8,
      minutes = value % 60;

    hours += hours <= 12 ? 0 : -12;

    hours = zeroPad(hours, 2);
    minutes = zeroPad(minutes, 2);

    return `${hours}:${minutes}`;
  }



const EventForm = ({event = null, go, post}) => {
    const [title, setTitle] = useState(!event ? '' : event.title),
        [start, setStart] = useState(!event ? 0 : event.start),
        [duration, setDuration] = useState(!event ? 15 : event.duration),
        onSubmit = () => {
            post({title,start,duration})
                .then(() => go('/'))
                .catch(error => console.error(error));
        },
        handleTitleChange = ({target:{value}}) => setTitle(value),
        handleStartChange = ({target:{value}}) => setStart(value),
        handleDurationChange = ({target:{value}}) => setDuration(value);


    function* time() {
        const start = 0,
            end = 9 * 60;

        for(let i = start; i<= end; i++) {
            yield (
                <option key={i} value={i}>
                    {formatMinutes(i)}
                </option>
                );
        }
    }

    return (
        <form className="login-form">
            <h1>{!event ? 'Add event' : 'Edit event'}</h1>
        <div>
            <input type="text" name="title" placeholder="Title" value={title} onChange={handleTitleChange}/>
        </div>

        <div>
            <select name="start" placeholder="Title" value={start} onChange={handleStartChange}>
                {[...time()]}
            </select>
        </div>

        <div>
            <input type="number" min="0" step="5" max={9 * 60} name="duration" placeholder="Duration" value={duration} onChange={handleDurationChange}/>
        </div>

        <div>
            <button type="button" onClick={onSubmit}>Save</button>
        </div>
        <div>
            <Link href="/" title="Back"  go={go}></Link>
        </div>
        </form>
    );
}

export default EventForm;