import axios from 'axios';
import {
    CREATE_HOUSEMATE_SUCCESS,
    CREATE_HOUSEMATE_FAIL,
    GET_HOUSEMATE_SUCCESS,
    GET_HOUSEMATE_FAIL,
} from './types';



export const create_housemate = (property_id, listing_account) => async dispatch => {
    const access = localStorage.getItem('access');
    if (access) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            };
            const body = JSON.stringify({ property_id, listing_account });
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/Housemate/`, body, config);
            dispatch({
                type: CREATE_HOUSEMATE_SUCCESS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: CREATE_HOUSEMATE_FAIL
            });
        }
    } else {
        dispatch({
            type: CREATE_HOUSEMATE_FAIL
        });
    }
};

export const get_housemates = (id) => async dispatch => {
    const access = localStorage.getItem('access');
    if (access) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            };
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/Housemate/get/${id}/`, config);
            dispatch({
                type: GET_HOUSEMATE_SUCCESS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: GET_HOUSEMATE_FAIL,
            });
        }
    } else {
        dispatch({
            type: GET_HOUSEMATE_FAIL,
        });
    }
};
