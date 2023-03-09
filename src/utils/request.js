/* eslint-disable camelcase */
import axios from "axios";
import { isEmpty, get } from "lodash";

export const axiosInstance = axios.create({
  // baseURL: config.BASEURL,
  responseType: "json",
});

export default function request(options) {
  return axiosInstance(options);
}
