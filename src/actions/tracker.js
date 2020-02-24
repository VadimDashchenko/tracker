import {TRACKERS_START_TRACKER,TRACKERS_PAUSE_TRACKER,TRACKERS_DELETE_TRACKER} from './types';

export const startTracker = payload => ({
    type: TRACKERS_START_TRACKER,
    payload
});

export const pauseTracker = payload => ({
    type: TRACKERS_PAUSE_TRACKER,
    payload
});

export const deleteTracker = payload => ({
    type: TRACKERS_DELETE_TRACKER,
    payload
});