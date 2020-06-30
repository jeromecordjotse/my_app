import {
  RESET_ALL,
  INCREASE_COUNTER,
  ADD_COUNTER,
  RESET_COUNTER,
  DELETE_COUNTER,
} from "./counterType";

const initialState = {
  counters: [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ],
};

const counterReducer = (state = initialState, action) => {
  const counters = [...state.counters];
  const index = counters.indexOf(action.payload);
  switch (action.type) {
    case INCREASE_COUNTER:
      counters[index] = { ...action.payload };
      counters[index].value++;
      return {
        ...state,
        counters: counters,
      };
    case RESET_COUNTER:
      counters[index] = { ...action.payload };
      counters[index].value = 0;
      return {
        ...state,
        counters: counters,
      };
    case DELETE_COUNTER:
      const newDeletedCounters = state.counters.filter(
        (c) => c.id !== action.payload
      );
      return {
        ...state,
        counters: newDeletedCounters,
      };
    case RESET_ALL:
      console.log("Reset All");
      const newResetCounters = state.counters.map((c) => {
        c.value = 0;
        return c;
      });
      return {
        ...state,
        counters: newResetCounters,
      };
    case ADD_COUNTER:
      console.log("Reset All");
      const ids = state.counters.map((c) => {
        return c.id;
      });
      const newId = rnorm(ids, 100);
      const newAddedCounters = state.counters.concat({ id: newId, value: 0 }); //.push({ id: newId, value: 0 });
      return {
        ...state,
        counters: newAddedCounters,
      };
    default:
      return state;
  }
};

function rnorm(arr, size) {
  //create a function that generates a randorm number between 1 and size excluding values in arr
  return 0;
}
export default counterReducer;
