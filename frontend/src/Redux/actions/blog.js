import axios from 'axios';
import {
    BLOG_CREATE_FAIL,
    BLOG_CREATE_SUCCESS,
} from './types';


//
// listing account
//

export const create_blog = (blog) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        };
        const formData = new FormData();
        formData.append('category_type', blog.category_type);
        formData.append('markdown_content', blog.markdown_content);
        formData.append('created', blog.created);
        formData.append('author', blog.author); // listing account id
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/Blogs/`, formData, config);

        // console.log(blog.traits)
        const TagsformData = new FormData();
        TagsformData.append('blog_fk', res.data.id);
        for (let i = 0; i < blog.tags.length; i++) {
            TagsformData.set('blog_tag', blog.tags[i]);
            const res = axios.post(`${process.env.REACT_APP_API_URL}/BlogTags/`, TagsformData, config);
        }
        dispatch({
            type: BLOG_CREATE_SUCCESS
        });
    } catch (err) {
        console.log(err)
        dispatch({
            type: BLOG_CREATE_FAIL
        });
    }
};


export const update_blog = (blog) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        };
        const formData = new FormData();
        formData.append('category_type', blog.category_type);
        formData.append('markdown_content', blog.markdown_content);
        formData.append('created', blog.created);
        formData.append('author', blog.author); // listing account id
        const res = await axios.udpate(`${process.env.REACT_APP_API_URL}/Blogs/${blog.id}`, formData, config);

        // console.log(blog.traits)
        const TagsformData = new FormData();
        TagsformData.append('blog_fk', res.data.id);
        for (let i = 0; i < blog.tags.length; i++) {
            TagsformData.set('blog_tag', blog.tags[i]);
            const res = axios.post(`${process.env.REACT_APP_API_URL}/BlogTags/`, TagsformData, config);
        }
        dispatch({
            type: BLOG_CREATE_SUCCESS
        });
    } catch (err) {
        console.log(err)
        dispatch({
            type: BLOG_CREATE_FAIL
        });
    }
};




export const load_blog_current = (id) => async dispatch => {
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
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/Blogs/${id}/`, config);

            const blog = res.data;

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