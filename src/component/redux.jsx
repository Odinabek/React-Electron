import React from "react";
import { createStore } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
const defaultState = {
  cash: true,
};

const reduser = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cach: state.cash + action.payload };

    case "GET_CASH":
      return { ...state, cach: state.cash - action.payload };

    default:
      return state;
  }
  return state;
};

const store = createStore(reduser);

export default store;
