import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the page2 state domain
 */

const selectPage2Domain = (state) => state.page2 || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Page2
 */

const makeSelectPage2 = () =>
  createSelector(selectPage2Domain, (substate) => substate);

export default makeSelectPage2;
export { selectPage2Domain };
