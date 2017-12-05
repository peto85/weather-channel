import { Actions } from '../Actions/Actions';

const initialState = {
  locations: [],
  error: null,
  loading: false,
}

const reducer = (state = initialState, action) => {

  // shallow copy of previous state
  const newState = {...state};

  switch (action.type) {
    case Actions.FETCH_WEATHER:
      newState.loading = true;
      newState.error = null;
      break;

    case Actions.FETCH_WEATHER_SUCCESS:
      const newLocations = action.payload.locations;

      if (state.locations.length) {
        // if we have previous data, we need to add current entry to history
        const timestamp = new Date().toLocaleTimeString();

        // update history
        newLocations.forEach((item, key) => {
          const historyData = {
            temperature: state.locations[key].temperature,
            time: timestamp
          };
          // we will keep only 5 last temperatures in history, for simplicity
          item.history = state.locations[key].history.length >= 5?
            [...state.locations[key].history.slice(1), historyData]:
            [...state.locations[key].history, historyData]
        });
      } else {
        // if we don't, just create an empty history property
        newLocations.forEach(item => item.history = []);
      }

      newState.locations = newLocations;
      newState.loading = false;
      newState.error = null;
      break;

    case Actions.FETCH_WEATHER_ERROR:
      newState.loading = false;
      newState.error = action.payload.error;
      break;
  }

  return newState;
}

export default reducer;
