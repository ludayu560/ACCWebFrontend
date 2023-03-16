import axios from 'axios';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    LISTINGACCOUNT_LOAD_SUCCESS,
    LISTINGACCOUNT_LOAD_FAIL,
    LISTINGACCOUNT_CREATE_SUCCESS,
    LISTINGACCOUNT_CREATE_FAIL,
    LISTINGACCOUNT_UPDATE_SUCCESS,
    LISTINGACCOUNT_UPDATE_FAIL,
    PROPERTYLISTING_LOAD_SUCCESS,
    PROPERTYLISTING_LOAD_FAIL,
    PROPERTYLISTING_CREATE_SUCCESS,
    PROPERTYLISTING_CREATE_FAIL,
    PROPERTYLISTING_UPDATE_SUCCESS,
    PROPERTYLISTING_UPDATE_FAIL,
    LOGOUT
} from '../actions/types';

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null,
    listingAccount: null,
    signedup: null,
    currentPropertyListing: null
};

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case LISTINGACCOUNT_LOAD_SUCCESS:
            return {
                ...state,
                listingAccount: payload
            }
        case LISTINGACCOUNT_UPDATE_SUCCESS:
            return {
                ...state,
                listingAccount: payload
            }
        case PROPERTYLISTING_LOAD_SUCCESS:
            return {
                ...state,
                currentPropertyListing: payload
            }
        case PROPERTYLISTING_UPDATE_SUCCESS:
            return {
                ...state,
                currentPropertyListing: payload
            }
        case EVENT_LOAD_SUCCESS:
            return {
                ...state,
                event: payload
            }
        case EVENT_UPDATE_SUCCESS:
            return {
                ...state,
                event: payload
            }
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
        case SIGNUP_SUCCESS:
            console.log("Signup Successed")
            return {
                ...state,
                isAuthenticated: false,
                user: payload,
                signedup: true
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
        case SIGNUP_FAIL:
        case LOGOUT:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null,
                listingAccount: null,
                signedup: false,
                currentPropertyListing: null
            }
        case PASSWORD_RESET_SUCCESS:
        case PASSWORD_RESET_FAIL:
        case PASSWORD_RESET_CONFIRM_SUCCESS:
        case PASSWORD_RESET_CONFIRM_FAIL:
        case ACTIVATION_SUCCESS:
        case LISTINGACCOUNT_LOAD_FAIL:
        case LISTINGACCOUNT_CREATE_SUCCESS:
        case LISTINGACCOUNT_CREATE_FAIL:
        case LISTINGACCOUNT_UPDATE_FAIL:
        case PROPERTYLISTING_LOAD_FAIL:
        case PROPERTYLISTING_CREATE_SUCCESS:
        case PROPERTYLISTING_CREATE_FAIL:
        case PROPERTYLISTING_UPDATE_FAIL:
        case EVENT_LOAD_FAIL:
        case EVENT_CREATE_SUCCESS:
        case EVENT_CREATE_FAIL:
        case EVENT_UPDATE_FAIL:
        case ACTIVATION_FAIL:
            return {
                ...state
            }
        default:
            return state
    }
}