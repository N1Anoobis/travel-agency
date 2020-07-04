import React, { Component } from 'react';
import styles from './DaysToSummer.scss';
import moment from 'moment';

class DaysToSummer extends Component {

  constructor(props) {
    super(props);
  }

  getCountdownTime(){
    let eventdate = moment(`${moment().year()}-06-22`);
    const todaysdate = moment();
    
    if(todaysdate > (eventdate)){
      eventdate = moment(`${moment().year()+1}-06-22`);
    }

    if(todaysdate <= moment(`${moment().year()}-09-24`) && todaysdate >= moment(`${moment().year()}-06-21`)){
      return null;
    } else {
      return eventdate.diff(todaysdate, 'days');
    }
  }

  render() {
    const daysNumber = this.getCountdownTime();
    return (
      <div>
        <h3 className={styles.countDown}>{daysNumber}{daysNumber ? <span className={styles.count}> {daysNumber == 1 ? 'Day to summer' : 'Days to summer'}</span> : null}</h3> 
      </div>
    );
  } 
}

export default DaysToSummer;