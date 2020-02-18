import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import PrayerTimes from '../build/index.js';

function App(){
    return <PrayerTimes 
        fajr='6:00 AM'
        dhuhr='12:30 PM'
        asr='3:30 PM'
        maghrib='5:37 PM'
        isha='8:00 PM'
        jumuah='1:20 PM'
    />

}

ReactDOM.render(<App />, document.getElementById('app'));
