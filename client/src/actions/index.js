import axios from "axios";
import { FETCH_USER } from "fetch_user";
import { useDispatch } from "react-redux";

export const fetchUser = () => async;
async (dispatch) => {
  const res = await axios.get("api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/surveys", values);

  history.push("./surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};
