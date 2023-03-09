import {
  HANDLE_DEMO_URL,
  HANDLE_DEMO_URL_SUCCESS,
  HANDLE_INCR,
} from "./constants";

export function handleDemoUrl(payload) {
  return {
    type: HANDLE_DEMO_URL,
    payload,
  };
}

export function handleDemoUrlSuccess(payload) {
  return {
    type: HANDLE_DEMO_URL_SUCCESS,
    payload,
  };
}

export function handleIncr(payload) {
  return {
    type: HANDLE_INCR,
    payload,
  };
}
