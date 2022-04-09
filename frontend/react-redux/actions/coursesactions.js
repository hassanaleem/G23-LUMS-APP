import React from "react";
import axios from "axios";
import { address } from "./server";

export const getGrade = (id) => {
  const request = address + "/grades?" + `id=${id}`;
  return (dispatch) => {
    axios.get(request).then((response) => {
      dispatch({
        type: "GET_GRADE",
        payload: response.data,
      });
    });
  };
};

export const addGrade = (
  courseId,
  name,
  timings,
  instructorId,
  creditHours
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // Request body
  const body = JSON.stringify({
    courseId,
    name,
    timings,
    instructorId,
    creditHours,
  });
  return (dispatch) => {
    axios.post(`${address}/courses`, body, config).then((response) => {
      dispatch({
        type: "ADD_COURSE",
        payload: response.data,
      });
    });
  };
};

export const addCourse = (
  course_id,
  name,
  timings,
  day,
  instructorId,
  creditHours
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    course_id,
    name,
    timings,
    day,
    instructorId,
    creditHours,
  });
  return (dispatch) => {
    axios
      .post(`${address}/courses`, body, config)
      .then((resp) => {
        dispatch({
          type: "ADD_COURSE",
          payload: "Success",
        });
      })
      .catch((err) => {
        dispatch({
          type: "ADD_COURSE_FAILED",
          payload: "Failed",
        });
      });
  };
};

export const getCourse = (courseCode) => {
  const request = address + "/courses?" + `courseCode=${courseCode}`;
  return (dispatch) => {
    axios
      .get(request)
      .then((response) => {
        dispatch({
          type: "GET_COURSE",
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "GET_COURSE_FAILED",
          payload: "Failed",
        });
      });
  };
};

export const clearState = () => {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_STATE",
    });
  };
};

export const enrollCourse = (courseId, studentId) => {
  const request = address + "/coursegrades";
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    courseId,
    studentId,
  });
  return (dispatch) => {
    axios
      .post(request, body, config)
      .then((response) => {
        dispatch({
          type: "ENROLL_COURSE",
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "ENROLL_COURSE_FAILED",
          payload: "Failed",
        });
      });
  };
};

export const getEnrollments = (id) => {
  const request = address + "/coursegrades?" + `id=${id}`;
  console.log(request);
  return (dispatch) => {
    axios
      .get(request)
      .then((response) => {
        dispatch({
          type: "GET_ENROLLMENTS",
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "GET_ENROLLMENTS_FAILED",
          payload: "Failed",
        });
      });
  };
};
