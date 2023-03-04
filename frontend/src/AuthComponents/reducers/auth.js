import { accordionActionsClasses } from '@mui/material';
import axios from 'axios';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    // USER_LOADED_SUCCESS,
    // USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    // PASSWORD_RESET_SUCCESS,
    // PASSWORD_RESET_FAIL,
    // PASSWORD_RESET_CONFIRM_SUCCESS,
    // PASSWORD_RESET_CONFIRM_FAIL,
    // SIGNUP_SUCCESS,
    // SIGNUP_FAIL,
    // ACTIVATION_SUCCESS,
    // ACTIVATION_FAIL,
    // GOOGLE_AUTH_SUCCESS,
    // GOOGLE_AUTH_FAIL,
    // FACEBOOK_AUTH_SUCCESS,
    // FACEBOOK_AUTH_FAIL,
    LOGOUT
} from '../actions/types';

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null
};

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access);
            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh
            }
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user: payload
            }
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated: false
            }
        case USER_LOADED_FAIL:
            return {
                ...state,
                user: null
            }
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated: false
            }
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null
            }
        default:
            return state

    }
}