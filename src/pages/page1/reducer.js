import produce from "immer";
import {
  HANDLE_DEMO_URL,
  HANDLE_DEMO_URL_SUCCESS,
  HANDLE_INCR,
} from "./constants";

export const initialState = {
  demoValue: 0,
  arrayValue: [],
};

/* eslint-disable default-case, no-param-reassign */
const page1Reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case HANDLE_DEMO_URL_SUCCESS:
        draft.arrayValue = action.payload;
        break;
      case HANDLE_INCR:
        draft.demoValue += 1;
        break;
    }
  });

export default page1Reducer;
