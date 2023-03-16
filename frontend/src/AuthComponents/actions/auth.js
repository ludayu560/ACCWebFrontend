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
    LOGOUT
} from './types';

//
// event
// 

export const create_event = (event) => async dispatch => {
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
};

export const update_event = (event) => async dispatch => {
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
};

export const load_event = (id) => async dispatch => {
    if (localStorage.getItem('access')) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
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

//
// property listing
//

export const create_property_listing = (propertyListing) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        };

        const formData = new FormData();
        formData.append('listing_city', propertyListing.listing_city);
        formData.append('listing_postal', propertyListing.listing_postal);
        formData.append('listing_province', propertyListing.listing_province);
        formData.append('listing_availability_date', propertyListing.listing_availability_date);
        formData.append('listing_type', propertyListing.listing_type);
        formData.append('listing_total_bedrooms', propertyListing.listing_total_bedrooms);
        formData.append('listing_den', propertyListing.listing_den);
        formData.append('listing_rate', propertyListing.listing_rate);
        formData.append('listing_women_homeowner', propertyListing.listing_women_homeowner);
        formData.append('listing_available_bedrooms', propertyListing.listing_available_bedrooms);
        formData.append('listing_bathrooms', propertyListing.listing_bathrooms);
        formData.append('listing_housemates', propertyListing.listing_housemates);
        formData.append('listing_parking', propertyListing.listing_parking);
        formData.append('listing_furnished', propertyListing.listing_furnished);
        formData.append('listing_smoking', propertyListing.listing_smoking);
        formData.append('listing_pets', propertyListing.listing_pets);
        formData.append('listing_ac', propertyListing.listing_ac);
        formData.append('listing_description', propertyListing.listing_description);
        if (propertyListing.listing_image_one) {
            formData.append('listing_image_one', propertyListing.listing_image_one);
        }
        if (propertyListing.listing_image_two) {
            formData.append('listing_image_two', propertyListing.listing_image_two);
        }
        if (propertyListing.listing_image_three) {
            formData.append('listing_image_three', propertyListing.listing_image_three);
        }
        if (propertyListing.listing_image_four) {
            formData.append('listing_image_four', propertyListing.listing_image_four);
        }
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/PropertyListing/`, formData, config);
        const utilityformData = new FormData();
        utilityformData.append('listing_utility', null);
        utilityformData.append('property_listing_fk', res.data);
        // Loop through the utilities list and append each one to the form data with the key 'listing_utility'
        if (propertyListing.listing_utilities) {
            for (let i = 0; i < propertyListing.listing_utilities.length; i++) {
                formData.append('listing_utility', propertyListing.listing_utilities[i]);
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/ListingUtilities/`, utilityformData, config);
            }
        }

        dispatch({
            type: PROPERTYLISTING_CREATE_SUCCESS
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: PROPERTYLISTING_CREATE_FAIL
        });
    }
};


export const update_property_listing = (propertyListing) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        };

        const formData = new FormData();
        formData.append('listing_city', propertyListing.listing_city);
        formData.append('listing_postal', propertyListing.listing_postal);
        formData.append('listing_province', propertyListing.listing_province);
        formData.append('listing_availability_date', propertyListing.listing_availability_date);
        formData.append('listing_type', propertyListing.listing_type);
        formData.append('listing_total_bedrooms', propertyListing.listing_total_bedrooms);
        formData.append('listing_den', propertyListing.listing_den);
        formData.append('listing_rate', propertyListing.listing_rate);
        formData.append('listing_women_homeowner', propertyListing.listing_women_homeowner);
        formData.append('listing_available_bedrooms', propertyListing.listing_available_bedrooms);
        formData.append('listing_bathrooms', propertyListing.listing_bathrooms);
        formData.append('listing_housemates', propertyListing.listing_housemates);
        formData.append('listing_parking', propertyListing.listing_parking);
        formData.append('listing_furnished', propertyListing.listing_furnished);
        formData.append('listing_smoking', propertyListing.listing_smoking);
        formData.append('listing_pets', propertyListing.listing_pets);
        formData.append('listing_ac', propertyListing.listing_ac);
        formData.append('listing_description', propertyListing.listing_description);
        if (propertyListing.listing_image_one) {
            formData.append('listing_image_one', propertyListing.listing_image_one);
        }
        if (propertyListing.listing_image_two) {
            formData.append('listing_image_two', propertyListing.listing_image_two);
        }
        if (propertyListing.listing_image_three) {
            formData.append('listing_image_three', propertyListing.listing_image_three);
        }
        if (propertyListing.listing_image_four) {
            formData.append('listing_image_four', propertyListing.listing_image_four);
        }
        const res = await axios.put(`${process.env.REACT_APP_API_URL}/PropertyListing/${propertyListing.id}/`, formData, config);
        // Delete existing utilities for the property listing
        const deleteUtilitiesRes = await axios.delete(`${process.env.REACT_APP_API_URL}/PropertyListing/${propertyListing.id}/delete_utilities/`, config);
        // Loop through the utilities list and append each one to the form data with the key 'listing_utility'
        const utilityformData = new FormData();
        utilityformData.append('listing_utility', null);
        utilityformData.append('property_listing_fk', propertyListing.id);
        // Loop through the utilities list and append each one to the form data with the key 'listing_utility'
        if (propertyListing.listing_utilities) {
            for (let i = 0; i < propertyListing.listing_utilities.length; i++) {
                formData.append('listing_utility', propertyListing.listing_utilities[i]);
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/ListingUtilities/`, utilityformData, config);
            }
        }


        dispatch({
            type: PROPERTYLISTING_UPDATE_SUCCESS,
            payload: propertyListing
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: PROPERTYLISTING_UPDATE_FAIL
        });
    }
};


export const load_property_listing = (id) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'multipart/form-data'
            }
        };

        // Make GET request to fetch the property listing by ID
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/PropertyListing/get/${id}/`, config);
        const propertyListing = res.data;

        // Make GET request to fetch the utilities for the property listing
        const utilitiesRes = await axios.get(`${process.env.REACT_APP_API_URL}/PropertyUtilities/get/${id}/`, config);
        const utilities = utilitiesRes.data;
        propertyListing.listing_utilities = utilities;

        dispatch({
            type: PROPERTYLISTING_LOAD_SUCCESS,
            payload: propertyListing
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: PROPERTYLISTING_LOAD_FAIL
        });
    }
};


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
        if (listingAccount.display_picture_one) {
            formData.append('display_picture_one', listingAccount.display_picture_one);
        }
        if (listingAccount.display_picture_two) {
            formData.append('display_picture_two', listingAccount.display_picture_two);
        }
        if (listingAccount.display_picture_three) {
            formData.append('display_picture_three', listingAccount.display_picture_three);
        }
        if (listingAccount.display_picture_four) {
            formData.append('display_picture_four', listingAccount.display_picture_four);
        }
        formData.append('user', listingAccount.user);
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/ListingAccount/`, formData, config);
        const PersonalTraitsformData = new FormData();
        PersonalTraitsformData.append('trait', null);
        PersonalTraitsformData.append('listing_account', listingAccount.user);

        console.log(listingAccount.traits)
        for (let i = 0; i < listingAccount.traits.length; i++) {
            PersonalTraitsformData.set('interest', listingAccount.traits[i]);
            const res = axios.post(`${process.env.REACT_APP_API_URL}/PersonalTraits/`, PersonalTraitsformData, config);
        }
        const interestformData = new FormData();
        interestformData.append('interest', null);
        interestformData.append('listing_account', listingAccount.user);
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
        if (listingAccount.display_picture_one) {
            formData.append('display_picture_one', listingAccount.display_picture_one);
        }
        if (listingAccount.display_picture_two) {
            formData.append('display_picture_two', listingAccount.display_picture_two);
        }
        if (listingAccount.display_picture_three) {
            formData.append('display_picture_three', listingAccount.display_picture_three);
        }
        if (listingAccount.display_picture_four) {
            formData.append('display_picture_four', listingAccount.display_picture_four);
        }
        formData.append('user', listingAccount.user);
        const res = await axios.put(`${process.env.REACT_APP_API_URL}/ListingAccount/${listingAccount.user}`, formData, config);
        const PTDeleteRES = await axios.delete(`${process.env.REACT_APP_API_URL}/PersonalTrait/${listingAccount.user}`, config);
        const IDeleteRes = await axios.delete(`${process.env.REACT_APP_API_URL}/Interest/${listingAccount.user}`, config);
        
        const PersonalTraitsformData = new FormData();
        PersonalTraitsformData.append('trait', null);
        PersonalTraitsformData.append('listing_account', listingAccount.user);
        for (let i = 0; i < listingAccount.traits.length(); i++) {
            PersonalTraitsformData.set('interest', listingAccount.traits[i]);
            const res = axios.post(`${process.env.REACT_APP_API_URL}/PersonalTraits/`, PersonalTraitsformData, config);
        }

        const interestformData = new FormData();
        interestformData.append('interest', null);
        interestformData.append('listing_account', listingAccount.user);
        for (let i = 0; i < listingAccount.interests.length(); i++) {
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
};

export const load_listing = (id) => async dispatch => {

    if (localStorage.getItem('access')) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'image/*'
                }
            };

            // const body = JSON.stringify({ id });
            // console.log(`id is ${id}`)
            var res = await axios.get(`${process.env.REACT_APP_API_URL}/ListingAccount/accountList/${id}/`, config);
            var listingAccount = res.data[0];
            const interests = await axios.get(`${process.env.REACT_APP_API_URL}/ListingAccount/Interest/${listingAccount.user}/`, config);
            const traits = await axios.get(`${process.env.REACT_APP_API_URL}/ListingAccount/PersonalTrait/${listingAccount.user}/`, config);
            listingAccount.traits = traits;
            listingAccount.interests = interests;
            dispatch({
                type: LISTINGACCOUNT_LOAD_SUCCESS,
                payload: listingAccount
            });
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

// 
// auth for user
//

export const load_user = () => async dispatch => {
    console.log("load user called")
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/users/me/`, config);
            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data
            });

            console.log(`id: ${res.data.id}`);
            // console.log(`data: ${res.data}`);
            dispatch(load_listing(res.data.id));
        } catch (err) {
            dispatch({
                type: USER_LOADED_FAIL
            });
        }
    } else {
        dispatch({
            type: USER_LOADED_FAIL
        });
    }
};

export const checkAuthenticated = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ token: localStorage.getItem('access') });

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/verify/`, body, config)

            if (res.data.code !== 'token_not_valid') {
                dispatch({
                    type: AUTHENTICATED_SUCCESS
                });
            } else {
                dispatch({
                    type: AUTHENTICATED_FAIL
                });
            }
        } catch (err) {
            dispatch({
                type: AUTHENTICATED_FAIL
            });
        }

    } else {
        dispatch({
            type: AUTHENTICATED_FAIL
        });
    }
};


export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create/`, body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(load_user());
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        })
    }
};

// export const googleAuthenticate = (state, code) => async dispatch => {
//     if (state && code && !localStorage.getItem('access')) {
//         const config = {
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         };

//         const details = {
//             'state': state,
//             'code': code
//         };

//         const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');

//         try {
//             const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?${formBody}`, config);

//             dispatch({
//                 type: GOOGLE_AUTH_SUCCESS,
//                 payload: res.data
//             });

//             dispatch(load_user());
//         } catch (err) {
//             dispatch({
//                 type: GOOGLE_AUTH_FAIL
//             });
//         }
//     }
// };

// export const facebookAuthenticate = (state, code) => async dispatch => {
//     if (state && code && !localStorage.getItem('access')) {
//         const config = {
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         };

//         const details = {
//             'state': state,
//             'code': code
//         };

//         const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');

//         try {
//             const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/o/facebook/?${formBody}`, config);

//             dispatch({
//                 type: FACEBOOK_AUTH_SUCCESS,
//                 payload: res.data
//             });

//             dispatch(load_user());
//         } catch (err) {
//             dispatch({
//                 type: FACEBOOK_AUTH_FAIL
//             });
//         }
//     }
// };


export const signup = (name, email, password, re_password) => async dispatch => {
    console.log('signup running')
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, name, password, re_password });
    console.log(body)
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/`, body, config);

        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });
        console.log('signup try')
    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL
        })
        console.log('signup err')
    }
};

export const verify = (uid, token) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ uid, token });

    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/activation/`, body, config);

        dispatch({
            type: ACTIVATION_SUCCESS,
        });
    } catch (err) {
        dispatch({
            type: ACTIVATION_FAIL
        })
    }
};

export const reset_password = (email) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email });

    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/reset_password/`, body, config);

        dispatch({
            type: PASSWORD_RESET_SUCCESS
        });
    } catch (err) {
        dispatch({
            type: PASSWORD_RESET_FAIL
        });
    }
};

export const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ uid, token, new_password, re_new_password });

    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/reset_password_confirm/`, body, config);

        dispatch({
            type: PASSWORD_RESET_CONFIRM_SUCCESS
        });
    } catch (err) {
        dispatch({
            type: PASSWORD_RESET_CONFIRM_FAIL
        });
    }
};

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
};