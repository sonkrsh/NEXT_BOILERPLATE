import { all } from "redux-saga/effects";
import page1Saga from "pages/page1/saga";
import page2Saga from "pages/page2/saga";
// SAGA_IMPORT

function* rootSaga() {
  yield all([
    page1Saga(),
    page2Saga(),
    // ADD_SAGA
  ]);
}

export default rootSaga;
