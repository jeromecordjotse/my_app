import {
  RESET_ALL,
  INCREASE_COUNTER,
  ADD_COUNTER,
  RESET_COUNTER,
  DELETE_COUNTER,
} from "./counterType";

export const increaseCounter = (counter) => {
  return {
    type: INCREASE_COUNTER,
    payload: counter,
  };
};

export const deleteCounter = (counterId) => {
  return {
    type: DELETE_COUNTER,
    payload: counterId,
  };
};

export const resetCounter = (counter) => {
  return {
    type: RESET_COUNTER,
    payload: counter,
  };
};

export const addCounter = () => {
  return {
    type: ADD_COUNTER,
  };
};

export const resetAllCounters = () => {
  return {
    type: RESET_ALL,
  };
};
