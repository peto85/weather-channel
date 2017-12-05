// Actions
export const Actions = {
  FETCH_WEATHER: 'FETCH_WEATHER',
  FETCH_WEATHER_SUCCESS: 'FETCH_WEATHER_SUCCESS',
  FETCH_WEATHER_ERROR: 'FETCH_WEATHER_ERROR',
};

// Action creators
export const ActionCreators = {

  fetchWeather() {
    return {
      type: Actions.FETCH_WEATHER,
      payload: null,
    }
  },

  fetchWeatherSuccess(locations) {
    return {
      type: Actions.FETCH_WEATHER_SUCCESS,
      payload: { locations },
    }
  },

  fetchWeatherError(error) {
    return {
      type: Actions.FETCH_WEATHER_ERROR,
      payload: { error },
    }
  },

}
