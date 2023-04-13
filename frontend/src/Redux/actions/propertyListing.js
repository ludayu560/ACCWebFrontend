import axios from 'axios';
import {
    PROPERTYLISTING_LOAD_SUCCESS,
    PROPERTYLISTING_LOAD_FAIL,
    PROPERTYLISTING_CREATE_SUCCESS,
    PROPERTYLISTING_CREATE_FAIL,
    PROPERTYLISTING_UPDATE_SUCCESS,
    PROPERTYLISTING_UPDATE_FAIL,
    PROPERTYLISTING_CREATED_LOAD_SUCCESS,
    PROPERTYLISTING_CREATED_LOAD_FAIL,
    PROPERTYLISTING_LOAD_CURRENT_SUCCESS,
    PROPERTYLISTING_LOAD_CURRENT_FAIL,
} from './types';


//
// property listing
//

export const create_property_listing = (propertyListing) => async dispatch => {
    if (localStorage.getItem('access')) {
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
            if (propertyListing.listing_image_five) {
                formData.append('listing_image_five', propertyListing.listing_image_five);
            }
            if (propertyListing.listing_image_six) {
                formData.append('listing_image_six', propertyListing.listing_image_six);
            }
            if (propertyListing.listing_image_seven) {
                formData.append('listing_image_seven', propertyListing.listing_image_seven);
            }
            if (propertyListing.listing_image_eight) {
                formData.append('listing_image_eight', propertyListing.listing_image_eight);
            }
            if (propertyListing.listing_image_nine) {
                formData.append('listing_image_nine', propertyListing.listing_image_nine);
            }
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/PropertyListing/`, formData, config);
            const utilityformData = new FormData();
            utilityformData.append('listing_utility', null);
            utilityformData.append('property_listing_fk', res.data.id);
            // Loop through the utilities list and append each one to the form data with the key 'listing_utility'
            if (propertyListing.listing_utilities) {
                for (let i = 0; i < propertyListing.listing_utilities.length; i++) {
                    utilityformData.utilityformData('listing_utility', propertyListing.listing_utilities[i]);
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
    } else {
        dispatch({
            type: PROPERTYLISTING_CREATE_FAIL
        });
    }
};


export const update_property_listing = (propertyListing) => async dispatch => {
    if (localStorage.getItem('access')) {
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
            if (propertyListing.listing_image_five) {
                formData.append('listing_image_five', propertyListing.listing_image_five);
            }
            if (propertyListing.listing_image_six) {
                formData.append('listing_image_six', propertyListing.listing_image_six);
            }
            if (propertyListing.listing_image_seven) {
                formData.append('listing_image_seven', propertyListing.listing_image_seven);
            }
            if (propertyListing.listing_image_eight) {
                formData.append('listing_image_eight', propertyListing.listing_image_eight);
            }
            if (propertyListing.listing_image_nine) {
                formData.append('listing_image_nine', propertyListing.listing_image_nine);
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
                    utilityformData.set('listing_utility', propertyListing.listing_utilities[i]);
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
    } else {
        dispatch({
            type: PROPERTYLISTING_UPDATE_FAIL
        });
    }

};


export const load_property_listing = (id) => async dispatch => {
    if (localStorage.getItem('access')) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            };

            // Make GET request to fetch the property listing by ID
            // const res = await axios.get(`${process.env.REACT_APP_API_URL}/PropertyListing/get/${id}/`, config);
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/PropertyListing/${id}/`, config);

            const propertyListing = res.data;

            // Make GET request to fetch the utilities for the property listing
            // const utilitiesRes = await axios.get(`${process.env.REACT_APP_API_URL}/PropertyUtilities/get/${id}/`, config);
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
    } else {
        dispatch({
            type: PROPERTYLISTING_LOAD_FAIL
        });
    }
};


export const load_property_listing_current = (id) => async dispatch => {
    if (localStorage.getItem('access')) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            };

            // Make GET request to fetch the property listing by ID
            // const res = await axios.get(`${process.env.REACT_APP_API_URL}/PropertyListing/get/${id}/`, config);
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/PropertyListing/${id}/`, config);

            const propertyListing = res.data;

            // Make GET request to fetch the utilities for the property listing
            const utilitiesRes = await axios.get(`${process.env.REACT_APP_API_URL}/PropertyUtilities/get/${id}/`, config);
            const utilities = utilitiesRes.data;
            propertyListing.listing_utilities = utilities;

            dispatch({
                type: PROPERTYLISTING_LOAD_CURRENT_SUCCESS,
                payload: propertyListing
            });
        } catch (err) {
            console.log(err);
            dispatch({
                type: PROPERTYLISTING_LOAD_CURRENT_FAIL
            });
        }
    } else {
        dispatch({
            type: PROPERTYLISTING_LOAD_CURRENT_FAIL
        });
    }
};

export const load_propertylistings_created = (id) => async dispatch => {
    if (localStorage.getItem('access')) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            };

            const res = await axios.get(`${process.env.REACT_APP_API_URL}/CreatorProperty/get/${id}/`, config);
            const propertyCreated = res.data;
            dispatch({
                type: PROPERTYLISTING_CREATED_LOAD_SUCCESS,
                payload: propertyCreated
            });
        } catch (err) {
            console.log(err)
            dispatch({
                type: PROPERTYLISTING_CREATED_LOAD_FAIL
            });
        }
    } else {
        dispatch({
            type: PROPERTYLISTING_CREATED_LOAD_FAIL
        });
    }
};
