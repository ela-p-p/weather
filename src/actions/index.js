import * as constants from "../constants";
import JSONresults from "../api/citiesData";

// interface SetName {
//     type: constants.SET_NAME
// }
// interface GetCity {
//     type: constants.GET_CITY
// }

//export type cityAction = setName | getCity

export const setName = name => {
  return {
    type: constants.SET_NAME,
    payload: name
  };
};

export const getCity = name => {
  return {
    type: constants.GET_CITY,
    payload: JSONresults.filter(city => {
      return city.title.toLowerCase().startsWith(name.toLowerCase());
    })
  };
};
