import {TRACKERS_START_TRACKER, TRACKERS_PAUSE_TRACKER, TRACKERS_DELETE_TRACKER} from '../actions/types';
import {fromJS} from 'immutable';

const initialState = fromJS({
   trackers: [],
});

export default (state = initialState, action) => {
    switch (action.type) {
        case  "TRACKERS_START_TRACKER":
            return state.updateIn('trackers', tracker => tracker.push(fromJS(action.payload)));
        default:
            return state;
    }
}