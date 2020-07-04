import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  countDown: '.countDown',
};
  
const mockProps = {
  description: 'Lorem',
};

describe('Component daysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer  />);
    expect(component).toBeTruthy();
  });
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
    global.Date = mockDate(`${time}T00:00:00.135Z`);
  
    const component = shallow(<DaysToSummer {...mockProps} />);
    const renderedTime = component.find(select.countDown).text();
    expect(renderedTime).toEqual(expectedDescription);
  
    global.Date = trueDate;
  });
  it('should render heading', () => {
    global.Date = mockDate(`${time}T00:00:00.135Z`);
    const component = shallow(<DaysToSummer />);
    expect(component.exists(select.countDown)).toEqual(true);
    global.Date = trueDate;
  });

  it('should render without crashing', () => {
    global.Date = mockDate(`${time}T00:00:00.135Z`);
    const component = shallow(<DaysToSummer  />);
    expect(component).toBeTruthy();
    global.Date = trueDate;
  });
};

const checkDescriptionAtSummer = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`${time}T00:00:00.135Z`);
  
    const component = shallow(<DaysToSummer {...mockProps} />);
    const renderedTime = component.find(select.countDown);
    expect(renderedTime).toEqual(expectedDescription);
  
    global.Date = trueDate;
  });
  it('should render heading', () => {
    global.Date = mockDate(`${time}T00:00:00.135Z`);
    const component = shallow(<DaysToSummer />);
    expect(component.exists(select.countDown)).toEqual(false);
    global.Date = trueDate;
  });

  it('should render without crashing', () => {
    global.Date = mockDate(`${time}T00:00:00.135Z`);
    const component = shallow(<DaysToSummer  />);
    expect(component).toBeTruthy();
    global.Date = trueDate;
  });
};
// all year but not summer 
describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('2020-06-20', '1 Day to summer');
  checkDescriptionAtTime('2020-09-24', '270 Days to summer');
});
// during the summer
describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtSummer('2020-06-21', {});  
  checkDescriptionAtSummer('2020-09-22', {});
  checkDescriptionAtSummer('2020-09-23', {}); 
});