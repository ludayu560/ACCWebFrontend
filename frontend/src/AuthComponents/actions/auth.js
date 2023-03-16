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
    LOGOUT
} from './types';

export const create_listing_account = (listingAccount) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'multipart/form-data'
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
        formData.append('profile_picture', listingAccount.profile_picture);
        formData.append('banner_picture', listingAccount.banner_picture);
        formData.append('display_picture_one', listingAccount.display_picture_one);
        formData.append('display_picture_two', listingAccount.display_picture_two);
        formData.append('display_picture_three', listingAccount.display_picture_three);
        formData.append('display_picture_four', listingAccount.display_picture_four);
        formData.append('user', listingAccount.user);
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/ListingAccount/`, formData, config);
        const PersonalTraitsformData = new FormData();
        PersonalTraitsformData.append('trait', null);
        PersonalTraitsformData.append('listing_account', listingAccount.id);
        for (let i = 0; i < listingAccount.traits.length(); i++) {
            PersonalTraitsformData.set('interest', listingAccount.traits[i]);
            const res = axios.post(`${process.env.REACT_APP_API_URL}/PersonalTraits/`, PersonalTraitsformData, config);
        }
        const interestformData = new FormData();
        interestformData.append('interest', null);
        interestformData.append('listing_account', listingAccount.id);
        for (let i = 0; i < listingAccount.interests.length(); i++) {
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
                'Accept': 'multipart/form-data'
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
        formData.append('profile_picture', listingAccount.profile_picture);
        formData.append('banner_picture', listingAccount.banner_picture);
        formData.append('display_picture_one', listingAccount.display_picture_one);
        formData.append('display_picture_two', listingAccount.display_picture_two);
        formData.append('display_picture_three', listingAccount.display_picture_three);
        formData.append('display_picture_four', listingAccount.display_picture_four);
        formData.append('user', listingAccount.user);
        const res = await axios.put(`${process.env.REACT_APP_API_URL}/ListingAccount/${listingAccount.id}`, formData, config);
        const PTDeleteRES = await axios.delete(`${process.env.REACT_APP_API_URL}/PersonalTrait/${listingAccount.id}`, config);
        const IDeleteRes = await axios.delete(`${process.env.REACT_APP_API_URL}/Interest/${listingAccount.id}`, config);
        
        const PersonalTraitsformData = new FormData();
        PersonalTraitsformData.append('trait', null);
        PersonalTraitsformData.append('listing_account', listingAccount.id);
        for (let i = 0; i < listingAccount.traits.length(); i++) {
            PersonalTraitsformData.set('interest', listingAccount.traits[i]);
            const res = axios.post(`${process.env.REACT_APP_API_URL}/PersonalTraits/`, PersonalTraitsformData, config);
        }
        
        const interestformData = new FormData();
        interestformData.append('interest', null);
        interestformData.append('listing_account', listingAccount.id);
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
                    'Accept': 'multipart/form-data'
                }
            };

            // const body = JSON.stringify({ id });
            // console.log(`id is ${id}`)
            var res = await axios.get(`${process.env.REACT_APP_API_URL}/ListingAccount/accountList/${id}/`, config);
            var listingAccount = res.data[0];
            const interests = await axios.get(`${process.env.REACT_APP_API_URL}/ListingAccount/Interest/${listingAccount.id}/`, config);
            const traits = await axios.get(`${process.env.REACT_APP_API_URL}/ListingAccount/PersonalTrait/${listingAccount.id}/`, config);
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