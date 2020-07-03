import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  countDown: '.countDown',
};
  
const mockProps = {
  // title: 'abc',
  description: 'Lorem',
};

describe('Component daysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer  />);
    expect(component).toBeTruthy();
  });
  it('should render heading', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists(select.countDown)).toEqual(true);
  });
  // it('should render heading with prop of set value', () => {
  //   const component = shallow(<DaysToSummer {...mockProps} />);
  //   const renderedTitle = component.find('.countDown').text();
  //   expect(renderedTitle).toEqual(mockProps.description);
  // });
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`${time}T11:57:58.135Z`);
  
    const component = shallow(<DaysToSummer {...mockProps} />);
    const renderedTime = component.find(select.countDown).text();
    expect(renderedTime).toEqual(expectedDescription);
  
    global.Date = trueDate;
  });
};
  
// const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
//   it(`should show correct value ${delaySeconds} seconds after ${time}`, () => {
//     jest.useFakeTimers();
//     global.Date = mockDate(`2019-05-14T${time}.135Z`);
    
//     const component = shallow(<DaysToSummer {...mockProps} />);
//     const newTime = new Date();
//     newTime.setSeconds(newTime.getSeconds() + delaySeconds);
//     global.Date = mockDate(newTime.getTime());
    
//     jest.advanceTimersByTime(delaySeconds * 1000);
//     const renderedTime = component.find(select.description).text();
//     expect(renderedTime).toEqual(expectedDescription);
    
//     global.Date = trueDate;
//     jest.useRealTimers();
//   });
// };

describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('2020-06-19', '1');
  checkDescriptionAtTime('2020-08-20', '304');
  // checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
});

// describe('Component HappyHourAd with mocked Date and delay', () => {
//   checkDescriptionAfterTime('11:57:58', 2, '120');
//   checkDescriptionAfterTime('11:59:58', 1, '1');
//   checkDescriptionAfterTime('13:00:00', 60 * 60, 22 * 60 * 60 + '');
// });

// describe('Component HappyHourAd with mocked Date show info about promotion', () => {
//   checkDescriptionAtTime('12:00:00', mockProps.description);
//   checkDescriptionAtTime('12:29:59', mockProps.description);
//   checkDescriptionAtTime('12:59:59', mockProps.description);
// });

// describe('Component HappyHourAd with mocked Date and delay', () => {
//   checkDescriptionAfterTime('11:57:58', 2,'120');
//   checkDescriptionAfterTime('12:00:00', 1, mockProps.description);
//   checkDescriptionAfterTime('11:59:45', 15, mockProps.description);
// });