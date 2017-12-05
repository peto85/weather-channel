import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { Actions, ActionCreators } from '../Actions/Actions';
import { getWeatherForIds } from '../Services/WeatherApi'

// root saga
function* main() {

  // initial fetch
  yield call(fetchWeather);

  // watch for fetch requests
  yield takeLatest(Actions.FETCH_WEATHER, fetchWeather);
}

// fetchWeather saga
function* fetchWeather() {

  // adding a small delay to prevent the loading animation blinking too fast
  // don't do this in production :)
  yield delay(500);

  try {
    const locations = yield call(getWeatherForIds); // yield promise
    yield put(ActionCreators.fetchWeatherSuccess(locations));
  } catch (e) {
    yield put(ActionCreators.fetchWeatherError("An error was encountered. Please try again."));
  }
}


export default main;
