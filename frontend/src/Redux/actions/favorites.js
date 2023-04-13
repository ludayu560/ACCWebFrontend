import axios from 'axios';
import {
    FAVORITE_CREATE_SUCCESS,
    FAVORITE_CREATE_FAIL,
    GET_FAVORITES_SUCCESS,
    GET_FAVORITES_FAIL,
} from './types';

//
// favorites
// 

export const create_favorite = (property_id, listing_account) => async dispatch => {
    if (localStorage.getItem('access')) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const body = JSON.stringify({ property_id, listing_account });
            await axios.post(`${process.env.REACT_APP_API_URL}/Favorites/`, body, config);

            dispatch({
                type: FAVORITE_CREATE_SUCCESS
            });
        } catch (err) {
            console.log(err)
            dispatch({
                type: FAVORITE_CREATE_FAIL
            });
        }
    } else {
        dispatch({
            type: FAVORITE_CREATE_FAIL
        });
    }
};

export const get_favorites = (user) => async dispatch => {
    if (localStorage.getItem('access')) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            };
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/Favorites/propertyGet/${user}/`, config);
            dispatch({
                type: GET_FAVORITES_SUCCESS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: GET_FAVORITES_FAIL
            });
        }
    } else {
        dispatch({
            type: GET_FAVORITES_FAIL
        });
    }
};