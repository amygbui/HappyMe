import * as MapApiUtil from '../util/map_api_util';

export const RECEIVE_BOUNDS = 'RECEIVE_BOUNDS';

export const receiveBounds = bounds => ({
  type: RECEIVE_BOUNDS,
  bounds
});

export const fetchBounds = address => dispatch => (
  MapApiUtil.fetchBounds(address)
    .then(cityData => {
      dispatch(receiveBounds(cityData[0].geometry.bounds))
    });
)
