import { take, call, put, select, takeLatest } from "redux-saga/effects";
import { HANDLE_DEMO_URL, HANDLE_INCR } from "./constants";
import { handleDemoUrlSuccess } from "./actions";

function* handleDemo({ payload }) {
  try {
    const res = yield fetch("https://jsonplaceholder.typicode.com/users");

    const data = yield res.json();

    yield put(handleDemoUrlSuccess(data));
  } catch (error) {}
}
function* handleIncr({ payload }) {
  try {
    console.log("---call");
  } catch (error) {}
}

export default function* page1Saga() {
  yield takeLatest(HANDLE_DEMO_URL, handleDemo);
  yield takeLatest(HANDLE_INCR, handleIncr);
}
