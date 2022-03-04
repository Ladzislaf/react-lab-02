import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';
import Jobs from './Jobs';

function tick() {
    const APP =
        <div>
            <Clock format='24' timezone='+03:00'/>
            <Jobs/>
        </div>

    ReactDOM.render(APP, document.getElementById('root'));
}

setInterval(tick, 1000);
