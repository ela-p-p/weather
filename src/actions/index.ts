import * as constants from "../constants";
import JSONresults from "../api/citiesData";

export interface SetName {
    type: constants.SET_NAME;
    payload?: string;
}
export interface GetCity {
    type: constants.GET_CITY;
    payload?: any
}

export type cityAction = SetName | GetCity;

export function setName(name:string): SetName {
  return {
    type: constants.SET_NAME,
    payload: name
  };
};

export function getCity(name:string): GetCity {
  return {
    type: constants.GET_CITY,
    payload: JSONresults.filter(city => {
      return city.title.toLowerCase().startsWith(name.toLowerCase());
    })
  };
};
