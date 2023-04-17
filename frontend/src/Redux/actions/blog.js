import axios from "axios";
import {
  BLOG_CREATE_FAIL,
  BLOG_CREATE_SUCCESS,
  GET_RECENT_BLOGS_SUCCESS,
  GET_RECENT_BLOGS_FAIL,
  BLOG_UPDATE_SUCCESS,
  BLOG_UPDATE_FAIL,
  BLOG_SET_CURRENT_SUCCESS,
  BLOG_SET_CURRENT_FAIL,
  GET_CATEGORY_BLOGS_SUCCESS,
  GET_CATEGORY_BLOGS_FAIL,
} from "./types";

//
// listing account
//

export const create_blog = (blog) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    };
    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("subtitle", blog.subtitle);
    if (blog.background_image) {
      formData.append("background_image", blog.background_image);
    }
    formData.append("category_type", blog.category_type);
    formData.append("markdown_content", blog.markdown_content);
    formData.append("created", blog.created);
    formData.append("author", blog.author); // listing account id

    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/Blogs/`,
      formData,
      config
    );

    const TagsformData = new FormData();
    TagsformData.append("blog_fk", res.data.id);
    for (let i = 0; i < blog.tags.length; i++) {
      TagsformData.set("blog_tag", blog.tags[i]);
      const res = axios.post(
        `${process.env.REACT_APP_API_URL}/BlogTags/`,
        TagsformData,
        config
      );
    }
    dispatch({
      type: BLOG_CREATE_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: BLOG_CREATE_FAIL,
    });
  }
};

export const update_blog = (blog) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    };
    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("subtitle", blog.subtitle);
    if (blog.background_image) {
        formData.append("background_image", blog.background_image);
      }
    formData.append("category_type", blog.category_type);
    formData.append("markdown_content", blog.markdown_content);
    formData.append("created", blog.created);
    formData.append("author", blog.author); // listing account id
    const res = await axios.udpate(
      `${process.env.REACT_APP_API_URL}/Blogs/${blog.id}`,
      formData,
      config
    );
    const resDelete = await axios.delete(
      `${process.env.REACT_APP_API_URL}/Blogs/BlogTags/${blog.id}`,
      config
    );
    // console.log(blog.traits)
    const TagsformData = new FormData();
    TagsformData.append("blog_fk", blog.id);
    for (let i = 0; i < blog.tags.length; i++) {
      TagsformData.set("blog_tag", blog.tags[i]);
      const res = axios.post(
        `${process.env.REACT_APP_API_URL}/BlogTags/`,
        TagsformData,
        config
      );
    }
    dispatch({
      type: BLOG_UPDATE_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: BLOG_UPDATE_FAIL,
    });
  }
};

export const get_recent_blog = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      // Make GET request to fetch the property listing by ID
      // const res = await axios.get(`${process.env.REACT_APP_API_URL}/PropertyListing/get/${id}/`, config);
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/Blogs/recent/`,
        config
      );
      const blog = res.data;
      dispatch({
        type: GET_RECENT_BLOGS_SUCCESS,
        payload: blog,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: GET_RECENT_BLOGS_FAIL,
      });
    }
  } else {
    dispatch({
      type: GET_RECENT_BLOGS_FAIL,
    });
  }
};

export const get_category_blog = (category_type) => async (dispatch) => {
  if (localStorage.getItem("access")) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      // Make GET request to fetch the property listing by ID
      // const res = await axios.get(`${process.env.REACT_APP_API_URL}/PropertyListing/get/${id}/`, config);
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/Blogs/filter/?category_type=${category_type}`,
        config
      );
      const blogs = res.data;
      dispatch({
        type: GET_CATEGORY_BLOGS_SUCCESS,
        payload: blogs,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: GET_CATEGORY_BLOGS_FAIL,
      });
    }
  } else {
    dispatch({
      type: GET_CATEGORY_BLOGS_FAIL,
    });
  }
};

export const load_blog_current = (id) => async (dispatch) => {
  if (localStorage.getItem("access")) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      // Make GET request to fetch the property listing by ID
      // const res = await axios.get(`${process.env.REACT_APP_API_URL}/PropertyListing/get/${id}/`, config);
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/Blogs/${id}/`,
        config
      );

      var blog = res.data;
      // Make GET request to fetch the utilities for the property listing
      const blogTagRes = await axios.get(
        `${process.env.REACT_APP_API_URL}/Blogs/BlogTags/${id}/`,
        config
      );
      const tags = blogTagRes.data;
      blog.tags = tags;

      dispatch({
        type: BLOG_SET_CURRENT_SUCCESS,
        payload: blog,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: BLOG_SET_CURRENT_FAIL,
      });
    }
  } else {
    dispatch({
      type: BLOG_SET_CURRENT_FAIL,
    });
  }
};
