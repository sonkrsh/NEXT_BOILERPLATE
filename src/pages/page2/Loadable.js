/**
 *
 * Asynchronously loads the component for Page2
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
