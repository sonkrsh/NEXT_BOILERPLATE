/**
 *
 * Asynchronously loads the component for Page1
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
