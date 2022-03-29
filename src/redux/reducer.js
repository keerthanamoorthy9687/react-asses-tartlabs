import * as types from "./actionType";

const initialstate = { posts: [], post: {}, loading: false };

const userReducers = (state = initialstate, action) => {
  switch (action.type) {
    case types.SHOW_LOADER:
    case types.HIDE_LOADER:
      return { ...state, loading: action.payload.loader };
    case types.GET_POSTS:
      return { ...state, posts: action.payload, loading: false };
    case types.DELETE_POSTS:
    case types.ADD_POSTS:
      return { ...state, loading: false };
    case types.EDIT_POSTS:
      return { ...state, posts: action.payload, loading: false };
    case types.COMMENT_POSTS:
      return { ...state, posts: action.payload, loading: false };
    case types.FILTER_POSTS:
      return { ...state, posts: action.payload, loading: false };

    default:
      return state;
  }
};
export default userReducers;
