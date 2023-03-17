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
    EVENT_LOAD_SUCCESS,
    EVENT_LOAD_FAIL,
    EVENT_CREATE_SUCCESS,
    EVENT_CREATE_FAIL,
    EVENT_UPDATE_SUCCESS,
    EVENT_UPDATE_FAIL,
    EVENTS_CREATED_LOAD_SUCCESS,
    EVENTS_CREATED_LOAD_FAIL,
    FAVORITE_CREATE_SUCCESS,
    FAVORITE_CREATE_FAIL,
    GET_FAVORITES_SUCCESS,
    GET_FAVORITES_FAIL,
    CREATE_EVENT_ATTENDING_SUCCESS,
    CREATE_EVENT_ATTENDING_FAIL,
    GET_EVENTS_ATTENDING_SUCCESS,
    GET_EVENTS_ATTENDING_FAIL,
    CREATE_EVENT_INTERESTED_SUCCESS,
    CREATE_EVENT_INTERESTED_FAIL,
    GET_EVENTS_INTERESTED_SUCCESS,
    GET_EVENTS_INTERESTED_FAIL,
    // GET_EVENTS_INTERESTED_NUMBER_SUCCESS,
    // GET_EVENTS_INTERESTED_NUMBER_FAIL,
    LOGOUT
} from '../actions/types';

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null,
    listingAccount: null,
    signedup: null,
    currentPropertyListing: null,
    eventsCreated: null,
    attending_events: null,
    interested_events: null,
    favorites: null,
};

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_EVENTS_INTERESTED_SUCCESS:
            return {
                ...state,
                interested_events: payload
            };
        case GET_EVENTS_ATTENDING_SUCCESS:
            return {
                ...state,
                attending_events: payload,
            }
        case GET_FAVORITES_SUCCESS:
            return {
                ...state,
                favorites: payload
            };
        case EVENTS_CREATED_LOAD_SUCCESS:
            return {
                ...state,
                eventsCreated: payload
            }
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
                currentPropertyListing: null,
                eventsCreated: null,
                attending_events: null,
                interested_events: null,
                favorites: null
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
        case EVENTS_CREATED_LOAD_FAIL:
        case FAVORITE_CREATE_SUCCESS:
        case FAVORITE_CREATE_FAIL:
        case GET_FAVORITES_FAIL:
        case CREATE_EVENT_ATTENDING_SUCCESS:
        case CREATE_EVENT_ATTENDING_FAIL:
        case GET_EVENTS_ATTENDING_FAIL:
        case CREATE_EVENT_INTERESTED_SUCCESS:
        case CREATE_EVENT_INTERESTED_FAIL:
        case GET_EVENTS_INTERESTED_FAIL:
        case ACTIVATION_FAIL:
            return {
                ...state
            }
        default:
            return state
    }
}