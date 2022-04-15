import React from "react";
import axios from "axios";
import { address } from "./server";

export const addPost = (user_id, post) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    post,
    user_id,
    comments: "",
    liker_id: "",
  });
  return (dispatch) => {
    axios.post(`${address}/posts`, body, config).then((response) => {
      dispatch({
        type: "ADD_POST",
        payload: response.data,
      });
    });
  };
};

export const deletePost = (author_id, post_id) => {
  const request =
    address + "/posts?" + "postAuthor=" + author_id + "&post=" + post_id;
  return (dispatch) => {
    axios.delete(request).then((response) => {
      dispatch({
        type: "DELETE_POST",
        payload: response.data,
      });
    });
  };
};
// post, comment, likes everything will be in it
export const getAllPosts = () => {
  const request = address + "/posts?id=all";
  return (dispatch) => {
    axios.get(request).then((response) => {
      dispatch({
        type: "GET_ALL_POSTS",
        payload: response.data,
      });
    });
  };
};
export const likePost = (user_id, post_id, post_owner) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    liker_id: user_id,
  });
  return (dispatch) => {
    axios
      .put(
        `${address}/posts?action=like&postuser=${post_owner}&postid=${post_id}`,
        body,
        config
      )
      .then((response) => {
        dispatch({
          type: "LIKE_POST",
          payload: response.data,
        });
      });
  };
};
export const unlikePost = (user_id, post_id, post_owner) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    liker_id: user_id,
  });
  return (dispatch) => {
    axios
      .put(
        `${address}/posts?action=unlike&postuser=${post_owner}&postid=${post_id}`,
        body,
        config
      )
      .then((response) => {
        dispatch({
          type: "UNLIKE_POST",
          payload: response.data,
        });
      });
  };
};
export const commentPost = (
  post_owner,
  post_id,
  comment_toadd,
  commenter_id,
  commenter_name
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    comment: commenter_name + ": " + comment_toadd,
    commenter: commenter_id,
  });
  return (dispatch) => {
    axios
      .put(
        `${address}/posts?action=comment&postuser=${post_owner}&postid=${post_id}`,
        body,
        config
      )
      .then((response) => {
        dispatch({
          type: "COMMENT_POST",
          payload: response.data,
        });
      });
  };
};
export const deleteComment = (post_owner, post_id, comment_todelete) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    comment: comment_todelete,
  });
  return (dispatch) => {
    axios
      .put(
        `${address}/posts?action=deletecomment&postuser=${post_owner}&postid=${post_id}`,
        body,
        config
      )
      .then((response) => {
        dispatch({
          type: "DELETE_COMMENT",
          payload: response.data,
        });
      });
  };
};
