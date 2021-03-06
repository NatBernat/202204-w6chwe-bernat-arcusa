import axios from "axios";
import { loadRobotsActionCreator } from "../features/robotsSlice";

export const loadRobotsThunk = () => async (dispatch) => {
  const {
    data: { robots },
  } = await axios.get(process.env.REACT_APP_API_PORT, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });

  dispatch(loadRobotsActionCreator(robots));
};
