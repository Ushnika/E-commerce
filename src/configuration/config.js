import axios from "axios";
import { domainURL } from "./domainURL";

const baseURL = axios.create({
  baseURL: domainURL + "api/v1/site",
});

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      if (error.response.status === 401) {
        window.location.href = "/login";
      }

      if (error.response.status === 404) {
        // toast.error(error.response)
        // router.push({ name: "NotFound" });
      }
      if (error.response.status === 403) {
        // router.push({ name: "not_authorize" });
      }

      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);
export default baseURL;
