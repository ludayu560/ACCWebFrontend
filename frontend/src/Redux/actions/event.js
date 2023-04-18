import axios from 'axios';
import {
    EVENT_LOAD_SUCCESS,
    EVENT_LOAD_FAIL,
    EVENT_CREATE_SUCCESS,
    EVENT_CREATE_FAIL,
    EVENT_UPDATE_SUCCESS,
    EVENT_UPDATE_FAIL,
    EVENTS_CREATED_LOAD_SUCCESS,
    EVENTS_CREATED_LOAD_FAIL,
    EVENTS_UPCOMING_LOAD_SUCCESS,
    EVENTS_UPCOMING_LOAD_FAIL,
} from './types';



//
// event
// 

export const load_events_created = (id) => async dispatch => {
    if (localStorage.getItem('access')) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            };

            const res = await axios.get(`${process.env.REACT_APP_API_URL}/EventCreatedGet/${id}/`, config);
            const eventsCreated = res.data;
            dispatch({
                type: EVENTS_CREATED_LOAD_SUCCESS,
                payload: eventsCreated
            });
        } catch (err) {
            console.log(err)
            dispatch({
                type: EVENTS_CREATED_LOAD_FAIL
            });
        }
    } else {
        dispatch({
            type: EVENTS_CREATED_LOAD_FAIL
        });
    }
};


export const create_event = (event) => async dispatch => {
    if (localStorage.getItem('access')) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            };
            const formData = new FormData();
            formData.append('event_name', event.event_name);
            formData.append('event_date_time', event.event_date_time);
            formData.append('event_location', event.event_location);
            formData.append('event_description', event.event_description);
            if (event.event_image) {
                formData.append('event_image', event.event_image);
            }
            console.log(event.create_listing_account)
            formData.append('creator_listing_account', event.create_listing_account);
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/Events/`, formData, config);

            dispatch({
                type: EVENT_CREATE_SUCCESS
            });
        } catch (err) {
            console.log(err)
            dispatch({
                type: EVENT_CREATE_FAIL
            });
        }
    } else {
        dispatch({
            type: EVENT_CREATE_FAIL
        });
    }
};

export const update_event = (event) => async dispatch => {
    if (localStorage.getItem('access')) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            };
            const formData = new FormData();
            formData.append('event_name', event.event_name);
            formData.append('event_date_time', event.event_date_time);
            formData.append('event_location', event.event_location);
            formData.append('event_description', event.event_description);
            if (event.event_image) {
                formData.append('event_image', event.event_image);
            }
            formData.append('create_listing_account', event.create_listing_account);
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/Events/${event.id}/`, formData, config);

            dispatch({
                type: EVENT_UPDATE_SUCCESS,
                payload: event
            });
        } catch (err) {
            console.log(err)
            dispatch({
                type: EVENT_UPDATE_FAIL
            });
        }
    } else {
        dispatch({
            type: EVENT_UPDATE_FAIL
        });
    }
};

export const load_event = (id) => async dispatch => {
    if (localStorage.getItem('access')) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            };

            const res = await axios.get(`${process.env.REACT_APP_API_URL}/Events/${id}/`, config);
            const event = res.data;
            dispatch({
                type: EVENT_LOAD_SUCCESS,
                payload: event
            });
        } catch (err) {
            console.log(err)
            dispatch({
                type: EVENT_LOAD_FAIL
            });
        }
    } else {
        dispatch({
            type: EVENT_LOAD_FAIL
        });
    }
};

export const load_events_upcoming = () => async dispatch => {
    if (localStorage.getItem('access')) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            };

            const res = await axios.get(`${process.env.REACT_APP_API_URL}/Events/upcoming/`, config);
            const eventUpcoming = res.data;
            dispatch({
                type: EVENTS_UPCOMING_LOAD_SUCCESS,
                payload: eventUpcoming
            });
        } catch (err) {
            console.log(err)
            dispatch({
                type: EVENTS_UPCOMING_LOAD_FAIL
            });
        }
    } else {
        dispatch({
            type: EVENTS_UPCOMING_LOAD_FAIL
        });
    }
};