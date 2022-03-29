import axios from "axios";
import * as types from "./actionType";

const getPosts = (posts) => ({ type: types.GET_POSTS, payload: posts });

const postDelete = () => ({ type: types.DELETE_POSTS });

const postAdded = () => ({ type: types.ADD_POSTS });

const editPosts = (post) => ({ type: types.EDIT_POSTS, payload: post });

const postUpdate = (post) => ({ type: types.UPDATE_POSTS, payload: post });

const postComment = (posts) => ({ type: types.COMMENT_POSTS, payload: posts });

const postUser = (posts) => ({ type: types.FILTER_POSTS, payload: posts });

export const loadPosts = () => {
  return function (dispatch) {
    dispatch({ type: types.SHOW_LOADER, payload: { loader: true } });

    axios
      .get(process.env.REACT_APP_GET_POSTS + "?_limit=11")
      .then((res) => {
        console.log(res);
        dispatch({ type: types.HIDE_LOADER, payload: { loader: false } });
        dispatch(getPosts(res.data));
      })
      .catch((err) => {
        dispatch({ type: types.HIDE_LOADER, payload: { loader: false } });
        console.log(err);
      });
  };
};

export const deletePosts = (id) => (dispatch) => {
  dispatch({ type: types.SHOW_LOADER, payload: { loader: true } });

  return axios
    .delete(process.env.REACT_APP_GET_POSTS + "/" + id)
    .then((res) => {
      dispatch({ type: types.HIDE_LOADER, payload: { loader: false } });
      dispatch(postDelete(id));
      dispatch(loadPosts());
    })
    .catch((err) => console.log(err));
};

export const addPosts = (post) => (dispatch) => {
  dispatch({ type: types.SHOW_LOADER, payload: { loader: true } });

  return axios.post(process.env.REACT_APP_GET_POSTS, post).then((res) => {
    dispatch({ type: types.HIDE_LOADER, payload: { loader: false } });
    dispatch(postAdded());
  });
};

export const getSinglePosts = (id) => {
  return (dispatch) => {
    axios
      .get(process.env.REACT_APP_GET_POSTS + "/" + id)
      .then((res) => {
        dispatch(editPosts(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const updatePosts = (posts) => (dispatch) => {
  return axios.put(process.env.REACT_APP_GET_POSTS, posts).then((res) => {
    console.log(res);
    dispatch(postUpdate());
  });
};

export const commentPosts = () => {
  return function (dispatch) {
    axios.get(process.env.REACT_APP_GET_POSTS + "/1/comments").then((res) => {
      console.log(res);
      dispatch({ type: types.HIDE_LOADER, payload: { loader: false } });
      dispatch(postComment(res.data));
    });
  };
};

export const userPosts = () => {
  return function (dispatch) {
    axios.get(process.env.REACT_APP_GET_POSTS + "?limit=10").then((res) => {
      console.log(res);
      dispatch({ type: types.HIDE_LOADER, payload: { loader: false } });
      dispatch(postUser(res.data));
    });
  };
};
