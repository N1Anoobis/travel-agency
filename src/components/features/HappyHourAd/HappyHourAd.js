import React, { Component } from 'react';
import ProtoTypes from 'prop-types';
import styles from './HappyHourAd.scss';

class HappyHourAd extends Component {
  constructor(props) {
    super(props);

    setInterval(()=>{ 
      this.forceUpdate(); }, 1000);

    this.state = {
    };
  }

  static propTypes = {
    title: ProtoTypes.string,
    description: ProtoTypes.string,
  }

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
  
    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }
  
    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  render() {
    const countTime = this.getCountdownTime();
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3> 
        <div className='promoDescription'>{countTime > 23 * 60 * 60 ?  this.props.description : countTime}</div>  
      </div>
    );
  }
}

export default HappyHourAd;