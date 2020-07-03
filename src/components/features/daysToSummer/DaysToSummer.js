import React, { Component } from 'react';
import styles from './DaysToSummer.scss';
import moment from 'moment';

class DaysToSummer extends Component {

  constructor(props) {
    super(props);
    this.displayed;
  }

  getCountdownTime(){
    let eventdate = moment(`${moment().year()}-06-22`);
    const todaysdate = moment();
    
    if(todaysdate > (eventdate)){
      eventdate = moment(`${moment().year()+1}-06-22`);
    }

    if (todaysdate == moment(`${moment().year()}-06-21`)) {
      return null; 
    } 

    if(todaysdate <= moment(`${moment().year()}-09-24`) && todaysdate >= moment(`${moment().year()}-06-22`)){
      return null;
    }

    else {
      return eventdate.diff(todaysdate, 'days');
    }
  }

  render() {
  
    return (
      <div>
        {this.getCountdownTime() ? <h3 className={styles.countDown}>{this.getCountdownTime()>0?this.getCountdownTime() : null } <span className={styles.count}>{this.getCountdownTime() == 1 ? 'Day to summer': 'Days to summer'}</span></h3> : <h3 className={styles.countDown}></h3>}
      </div>
    );
  } 
}

export default DaysToSummer;