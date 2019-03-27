import { put, takeEvery, delay, all, fork } from 'redux-saga/effects';
import JSONresults from '../api/citiesData'

function hello() {
    console.log('hello')
}
// function* actionWatcher() {
//     console.log('here')
    // const action = yield take('GET_CITY', fetchCity)
// }

function* fetchCity(action) {
    yield delay(1000)
    let name = action.payload
const json = yield JSONresults.filter(
    city => {
      return city.title.toLowerCase().startsWith(name.toLowerCase())
    }
  )
  yield put({
      type: "FETCH_SUCCESS",
      payload: json
  });
}

export default function* rootSaga() {
    console.log('root saga')
    // yield all([
        yield takeEvery('GET_CITY', fetchCity)
        // hello()
    // ])
}