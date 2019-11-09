import axios from "axios";

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common.Authorization = token;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
  return token;
};

export default setAuthToken;
