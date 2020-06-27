import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

import Button from './../../common/Button/Button';
import settings from '../../../data/settings';
import  {calculateTotal} from '../../../utils/calculateTotal';
import  {formatPrice} from '../../../utils/formatPrice';

const sendOrder = (options, tripCost, name, country,id) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));
  console.log('country name', country.name);
  console.log('country coe', country.alpha2Code);
  console.log('name', name);
  console.log('id', id);
  const payload = {
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({ options, tripCost, setOrderOption, days, name, country, id }) => (
  
  <Row>
    {pricing.map( option => <Col md={4} key={option.id}>
      <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption}/>
    </Col>)}
    <Col xs={12}>
      <OrderSummary options={options} cost={tripCost} days={days}/>
    </Col>
    <Button onClick={() => sendOrder(options, tripCost, name, country,id)}>Order now!</Button>
  </Row>
);

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
  setOrderOption: PropTypes.func,
  days: PropTypes.number,
  name: PropTypes.string,
  country: PropTypes.object,
  id: PropTypes.string,
};

export default OrderForm;