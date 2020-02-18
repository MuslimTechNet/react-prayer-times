

import React, {Component} from 'react';
import PropTypes from 'prop-types';

const PrayerTimes = props=>{
  return <table style={{
    border:'1px solid black',
    padding:'4px',
    display:'inline-block'
  }}>
    <tbody>
    {props.fajr && 
      <tr>
        <td>Fajr:</td><td>{props.fajr}</td>
      </tr>
    }
    {props.dhuhr &&
      <tr>
        <td>Dhuhr:</td><td>{props.dhuhr}</td>
      </tr>
    }
    {props.asr &&
      <tr>
        <td>Asr:</td><td>{props.asr}</td>
      </tr>
    }
    {props.maghrib &&
      <tr>
        <td>Maghrib:</td><td>{props.maghrib}</td>
      </tr>
    }
    {props.isha &&
      <tr>
        <td>Isha:</td><td>{props.isha}</td>
      </tr>
    }
    {props.jumuah &&
      <tr>
        <td>Jumuah:</td><td>{props.jumuah}</td>
      </tr>
    }
    </tbody>
  </table>
};

PrayerTimes.defaultProps = {

}


PrayerTimes.propTypes = {
 fajr:PropTypes.string,
 dhuhr:PropTypes.string,
 asr:PropTypes.string,
 maghrib:PropTypes.string,
 isha:PropTypes.string,
 jumuah:PropTypes.string
}

export default PrayerTimes;
