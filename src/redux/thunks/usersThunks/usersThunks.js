import axios from "axios";
import jwtDecode from "jwt-decode";
import { logInActionCreator } from "../../features/usersSlice/usersSlice";

const loginThunk = (userData) => async (dispatch) => {
  const url = process.env.REACT_APP_API_LOGIN;

  const { data } = await axios.post(url, userData);

  const tokenDecoded = jwtDecode(data.token);

  localStorage.setItem("token", data.token);
  dispatch(logInActionCreator(tokenDecoded));
};

export default loginThunk;
