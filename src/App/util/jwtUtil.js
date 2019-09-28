import jwtDecode from "jwt-decode";

const getCurrentUserName = token => {
  const decoded = jwtDecode(token);
  return decoded.username;
};

export default getCurrentUserName;
