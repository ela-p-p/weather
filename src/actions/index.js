import * as constants from '../constants';
import JSONresults from '../api/citiesData';

////for typescript implementation

// export interface SetName {
//     type: constants.SET_NAME
// }

// export interface GetCity {
//     type: constants.GET_CITY
// }

// export type CityAction = SetName | GetCity

export function setName(name) {
    return {
        type: constants.SET_NAME,
        payload: name
    }
}

export function getCity(name) {
    return {
        type: constants.GET_CITY,
        payload: JSONresults.filter(
            city => {
                return city.title.toLowerCase().startsWith(name.toLowerCase())
            }
        )
    }
}

