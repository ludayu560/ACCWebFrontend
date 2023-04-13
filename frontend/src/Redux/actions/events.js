import axios from 'axios';
import {
    CREATE_EVENT_ATTENDING_SUCCESS,
    CREATE_EVENT_ATTENDING_FAIL,
    GET_EVENTS_ATTENDING_SUCCESS,
    GET_EVENTS_ATTENDING_FAIL,
    CREATE_EVENT_INTERESTED_SUCCESS,
    CREATE_EVENT_INTERESTED_FAIL,
    GET_EVENTS_INTERESTED_SUCCESS,
    GET_EVENTS_INTERESTED_FAIL,
} from './types';


export const create_event_interested = (event_id, listing_account) => async dispatch => {
    const access = localStorage.getItem('access');
    if (access) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            };
            const body = JSON.stringify({ event_id, listing_account });
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/EventInterested/`, body, config);
            dispatch({
                type: CREATE_EVENT_INTERESTED_SUCCESS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: CREATE_EVENT_INTERESTED_FAIL
            });
        }
    } else {
        dispatch({
            type: CREATE_EVENT_INTERESTED_FAIL
        });
    }
};

// export const get_events_number_interested = (id) => async dispatch => {
//     const access = localStorage.getItem('access');
//     if (access) {
//         try {
//             const config = {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json',
//                 }
//             };
//             const res = await axios.get(`${process.env.REACT_APP_API_URL}/EventInterestedNumber/${id}/`, config);
//             dispatch({
//                 type: GET_EVENTS_INTERESTED_NUMBER_SUCCESS,
//                 payload: res.data
//             });
//         } catch (err) {
//             dispatch({
//                 type: GET_EVENTS_INTERESTED_NUMBER_FAIL
//             });
//         }
//     } else {
//         dispatch({
//             type: GET_EVENTS_INTERESTED_NUMBER_FAIL
//         });
//     }
// };

export const get_events_interested = (id) => async dispatch => {
    const access = localStorage.getItem('access');
    if (access) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            };
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/EventInterestedGet/${id}/`, config);
            dispatch({
                type: GET_EVENTS_INTERESTED_SUCCESS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: GET_EVENTS_INTERESTED_FAIL
            });
        }
    } else {
        dispatch({
            type: GET_EVENTS_INTERESTED_FAIL
        });
    }
};
// 
// Event attending
//

export const get_events_attending = (id) => async dispatch => {
    if (localStorage.getItem('access')) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            };
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/EventAttendingGet/${id}/`, config);
            dispatch({
                type: GET_EVENTS_ATTENDING_SUCCESS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: GET_EVENTS_ATTENDING_FAIL
            });
        }
    } else {
        dispatch({
            type: GET_EVENTS_ATTENDING_FAIL
        });
    }
};


export const create_event_attending = (event_id, listing_account) => async dispatch => {
    if (localStorage.getItem('access')) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const body = JSON.stringify({ event_id, listing_account });
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/EventAttending/`, body, config);
            dispatch({
                type: CREATE_EVENT_ATTENDING_SUCCESS,
                payload: res.data
            });
        } catch (err) {
            console.log(err);
            dispatch({
                type: CREATE_EVENT_ATTENDING_SUCCESS
            });
        }
    } else {
        dispatch({
            type: CREATE_EVENT_ATTENDING_FAIL
        });
    }
};
