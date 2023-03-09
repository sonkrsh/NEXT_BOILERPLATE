import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the page1 state domain
 */

const selectPage1Domain = (state) => state.page1 || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Page1
 */

const makeSelectPage1 = () =>
  createSelector(selectPage1Domain, (substate) => substate);

export default makeSelectPage1;
export { selectPage1Domain };
