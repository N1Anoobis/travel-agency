import React, { Component } from 'react';
import styles from './DaysToSummer.scss';
import moment from 'moment';

class DaysToSummer extends Component {

  constructor(props) {
    super(props);
  }

  getCountdownTime(){
    let eventdate = moment(`${moment().year()}-06-21`);
    const todaysdate = moment();
    
    if(todaysdate > (eventdate)){
      eventdate = moment(`${moment().year()+1}-06-21`);
    }
    if (eventdate.diff(todaysdate, 'days') >= 365-93) {
      return null; 
    } 
    else {
      return eventdate.diff(todaysdate, 'days');
    }
  }

  render() {
    return (
      <div>
        <h1 className={styles.count}>Days to summer</h1>  
        <h3 className={styles.countDown}>{this.getCountdownTime()}</h3>   
      </div>
    );
  } 
}

export default DaysToSummer;