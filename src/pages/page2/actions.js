import { HANDLE_API, HANDLE_API_SUCCESSS } from "./constants";

export function handleApi(payload) {
  return {
    type: HANDLE_API,
    payload,
  };
}

export function handleApiSuccess(payload) {
  return {
    type: HANDLE_API_SUCCESSS,
    payload,
  };
}
