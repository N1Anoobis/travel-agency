/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters, countries}) => {
  // console.log(trips);
  // console.log(trips)
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
   
  }

  // TODO - filter by duration
 
  if(filters.duration){
    output = output.filter(trip => trip.days <= filters.duration.to && trip.days >= filters.duration.from);
  }
    
  // TODO - filter by tags
  if(filters.tags){
    filters.tags.forEach(tag => {
      output = output.filter(trip => trip.tags.find(tripTag => tripTag === tag));
    });
  }
  // TODO - sort by cost descending (most expensive goes first)
  // output.sort((pierwszyElement, drugiElement) => {
  //   return decyzja_co_wieksze
  //   })
  if(filters.region){
    const countryArr = [];
    // console.log(countryArr);
    for (let country of Object.keys(countries)) {
      if (countries[country].region == filters.region){
        countryArr.push(country);
      }
    }

    output = output.filter(trip =>
      countryArr.some(countryKeyes => countryKeyes == trip.country.code));
  }
 
  return output;
   
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips.filter(trip=>trip.id == tripId);
  //
  // TODO - filter trips by tripId
  
  // console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips.filter(trip => trip.country.code == countryCode);
  // TODO - filter trips by countryCode


  // console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
