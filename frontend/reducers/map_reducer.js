import { merge } from 'lodash';
import { RECEIVE_BOUNDS } from '../actions/map_actions';

const nycBounds = { northeast: { lat: 40.9175771, lng: -73.70027209999999 },
                    southwest: { lat: 40.4773991, lng: -74.25908989999999 } }

const MapReducer = (oldState = nycBounds, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_BOUNDS:
      return action.bounds;
    default:
      return oldState;
  }
}

export default MapReducer;
