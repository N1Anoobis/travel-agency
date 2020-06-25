import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  
  it('should show if correct value is passed through props to link', () => {
    const idValue = 'abc';
    const component = shallow(<TripSummary id={idValue} tags={['a','b','c']}/>);
    expect(component.find('Link').prop('to')).toEqual(`/trip/${idValue}`);
  });
 
  it('should render correct title and image', () => {
    const expectedSrc = 'src';
    const expectedAlt = 'alt';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} tags={['a','b','c']}/>);
  
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });
  
  it('should render props', () => {
    const expectedName = 'name';
    const expectedCost = 'cost';
    const expactedDays = 1;

    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expactedDays} tags={['a','b','c']}/>);
    // expect(component).toBeTruthy();
    expect(component.find('.title').text()).toEqual(expectedName); 
    expect(component.find('span').at(1).text()).toEqual(`from ${expectedCost}`);
    expect(component.find('span').at(0).text()).toEqual(`${expactedDays} days`); 
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  
  it('should render correct tags', () => {
    const component = shallow(<TripSummary tags={['a','b','c']}/>);
    expect(component.find('.tag').at(0).text()).toEqual('a');
    expect(component.find('.tag').at(1).text()).toEqual('b');
    expect(component.find('.tag').at(2).text()).toEqual('c');
  });
 
  it('should crash if tags are false', () => {
    const component = shallow(<TripSummary tags={[]} />);
    expect(component.find('.tags')).toBeTruthy();
  });
});