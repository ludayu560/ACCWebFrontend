import axios from 'axios';
import {get_events_attending, get_events_interested} from './events'
import {get_favorites} from './favorites'
import {load_events_created} from './event'
import {load_propertylistings_created} from './propertyListing'
import {
    LISTINGACCOUNT_LOAD_SUCCESS,
    LISTINGACCOUNT_LOAD_FAIL,
    LISTINGACCOUNT_CREATE_SUCCESS,
    LISTINGACCOUNT_CREATE_FAIL,
    LISTINGACCOUNT_UPDATE_SUCCESS,
    LISTINGACCOUNT_UPDATE_FAIL,
    LISTINGACCOUNT_LOAD_CURRENT_SUCCESS,
    LISTINGACCOUNT_LOAD_CURRENT_FAIL,
} from './types';


//
// listing account
//

export const create_listing_account = (listingAccount) => async dispatch => {
    console.log(listingAccount)
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        };
        const formData = new FormData();
        formData.append('username', listingAccount.username);
        formData.append('account_type', listingAccount.account_type);
        formData.append('first_name', listingAccount.first_name);
        formData.append('last_name', listingAccount.last_name);
        formData.append('email', listingAccount.email);
        formData.append('phone_number', listingAccount.phone_number);
        formData.append('date_of_birth', listingAccount.date_of_birth);
        formData.append('location', listingAccount.location);
        formData.append('age_range', listingAccount.age_range);
        formData.append('occupation', listingAccount.occupation);
        formData.append('news_consent', listingAccount.news_consent);
        formData.append('tell_us_about_yourself', listingAccount.tell_us_about_yourself);
        if (listingAccount.profile_picture) {
            formData.append('profile_picture', listingAccount.profile_picture);
        }
        if (listingAccount.banner_picture) {
            formData.append('banner_picture', listingAccount.banner_picture);
        }
        if (listingAccount.display_picture) {
            formData.append('display_picture', listingAccount.display_picture);
        }
        formData.append('preferences', listingAccount.preferences);
        formData.append('price_range_max', listingAccount.price_range_max);
        formData.append('price_range_min', listingAccount.price_range_max);
        formData.append('user', listingAccount.user);
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/ListingAccount/`, formData, config);


        // console.log(listingAccount.traits)
        const PersonalTraitsformData = new FormData();
        PersonalTraitsformData.append('trait', null);
        PersonalTraitsformData.append('listing_account', res.data.id)
        for (let i = 0; i < listingAccount.traits.length; i++) {
            PersonalTraitsformData.set('trait', listingAccount.traits[i]);
            const res = axios.post(`${process.env.REACT_APP_API_URL}/PersonalTraits/`, PersonalTraitsformData, config);
        }
        const interestformData = new FormData();
        interestformData.append('interest', null);
        interestformData.append('listing_account', res.data.id);
        for (let i = 0; i < listingAccount.interests.length; i++) {
            interestformData.set('interest', listingAccount.interests[i]);
            const res = axios.post(`${process.env.REACT_APP_API_URL}/Interests/`, interestformData, config);
        }

        dispatch({
            type: LISTINGACCOUNT_CREATE_SUCCESS
        });
    } catch (err) {
        console.log(err)
        dispatch({
            type: LISTINGACCOUNT_CREATE_FAIL
        });
    }
};


export const update_listing_account = (listingAccount) => async dispatch => {
    if (localStorage.getItem('access')) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            };
            const formData = new FormData();
            formData.append('username', listingAccount.username);
            formData.append('account_type', listingAccount.account_type);
            formData.append('first_name', listingAccount.first_name);
            formData.append('last_name', listingAccount.last_name);
            formData.append('email', listingAccount.email);
            formData.append('phone_number', listingAccount.phone_number);
            formData.append('date_of_birth', listingAccount.date_of_birth);
            formData.append('location', listingAccount.location);
            formData.append('age_range', listingAccount.age_range);
            formData.append('occupation', listingAccount.occupation);
            formData.append('news_consent', listingAccount.news_consent);
            formData.append('tell_us_about_yourself', listingAccount.tell_us_about_yourself);

            // we ignore the profile picture if it is a string as it is a url and not a file
            // this happens when we are updating the listing account and the profile picture is not changed
            // the backend returns the url of the profile picture and we don't want to send that back to the backend
            if (listingAccount.profile_picture && typeof listingAccount.profile_picture !== 'string') {
                formData.append('profile_picture', listingAccount.profile_picture);
            }
            if (listingAccount.banner_picture && typeof listingAccount.banner_picture !== 'string') {
                formData.append('banner_picture', listingAccount.banner_picture);
            }
            if (listingAccount.display_picture && typeof listingAccount.display_picture !== 'string') {
                formData.append('display_picture', listingAccount.display_picture);
            }
            formData.append('preferences', listingAccount.preferences);
            formData.append('price_range_max', listingAccount.price_range_max);
            formData.append('price_range_min', listingAccount.price_range_min);
            formData.append('user', listingAccount.user);
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/ListingAccount/${listingAccount.user}/`, formData, config);
            const PTDeleteRES = await axios.delete(`${process.env.REACT_APP_API_URL}/ListingAccount/PersonalTrait/${listingAccount.user}/`, config);
            const IDeleteRes = await axios.delete(`${process.env.REACT_APP_API_URL}/ListingAccount/Interest/${listingAccount.user}/`, config);

            console.log(listingAccount.personalityTraits)
            const PersonalTraitsformData = new FormData();
            PersonalTraitsformData.append('trait', null);
            PersonalTraitsformData.append('listing_account', listingAccount.user)
            for (let i = 0; i < listingAccount.personalityTraits.length; i++) {
                PersonalTraitsformData.set('trait', listingAccount.personalityTraits[i]);
                const res = axios.post(`${process.env.REACT_APP_API_URL}/PersonalTraits/`, PersonalTraitsformData, config);
            }
            console.log(listingAccount.interests)
            const interestformData = new FormData();
            interestformData.append('interest', null);
            interestformData.append('listing_account', listingAccount.user);
            for (let i = 0; i < listingAccount.interests.length; i++) {
                interestformData.set('interest', listingAccount.interests[i]);
                const res = axios.post(`${process.env.REACT_APP_API_URL}/Interests/`, interestformData, config);
            }
            dispatch({
                type: LISTINGACCOUNT_UPDATE_SUCCESS,
                payload: listingAccount
            });
        } catch (err) {
            console.log(err)
            dispatch({
                type: LISTINGACCOUNT_UPDATE_FAIL
            });
        }
    } else {
        dispatch({
            type: LISTINGACCOUNT_UPDATE_FAIL
        });
    }
};


export const load_listing_current = (id) => async dispatch => {
    if (localStorage.getItem('access')) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            };
            var res = await axios.get(`${process.env.REACT_APP_API_URL}/ListingAccount/${id}/`, config);
            var listingAccount = res.data;
            const interests = await axios.get(`${process.env.REACT_APP_API_URL}/ListingAccount/Interest/${listingAccount.id}/`, config);
            const traits = await axios.get(`${process.env.REACT_APP_API_URL}/ListingAccount/PersonalTrait/${listingAccount.id}/`, config);
            listingAccount.traits = traits.data;
            listingAccount.interests = interests.data;

            dispatch({
                type: LISTINGACCOUNT_LOAD_CURRENT_SUCCESS,
                payload: listingAccount
            });
        } catch (err) {
            console.log(err)
            dispatch({
                type: LISTINGACCOUNT_LOAD_CURRENT_FAIL
            });
        }
    } else {
        dispatch({
            type: LISTINGACCOUNT_LOAD_CURRENT_FAIL
        });
    }
};

export const load_listing = (id) => async dispatch => {
    if (localStorage.getItem('access')) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            };

            // const body = JSON.stringify({ id });
            // console.log(`id is ${id}`)
            var res = await axios.get(`${process.env.REACT_APP_API_URL}/ListingAccount/accountList/${id}/`, config);
            var listingAccount = res.data[0];
            const interests = await axios.get(`${process.env.REACT_APP_API_URL}/ListingAccount/Interest/${listingAccount.user}/`, config);
            const traits = await axios.get(`${process.env.REACT_APP_API_URL}/ListingAccount/PersonalTrait/${listingAccount.user}/`, config);
            listingAccount.traits = traits.data;
            listingAccount.interests = interests.data;
            dispatch({
                type: LISTINGACCOUNT_LOAD_SUCCESS,
                payload: listingAccount
            });
            console.log(`listing account id: ${listingAccount.id}`);
            console.log(`listing account user: ${listingAccount.user}`);

            dispatch(load_propertylistings_created(listingAccount.id));
            dispatch(load_events_created(listingAccount.id));
            dispatch(get_events_attending(listingAccount.id));
            dispatch(get_events_interested(listingAccount.id));
            dispatch(get_favorites(listingAccount.id));
        } catch (err) {
            console.log(err)
            dispatch({
                type: LISTINGACCOUNT_LOAD_FAIL
            });
        }
    } else {
        dispatch({
            type: LISTINGACCOUNT_LOAD_FAIL
        });
    }
};