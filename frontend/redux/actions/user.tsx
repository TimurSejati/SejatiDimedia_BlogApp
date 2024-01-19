import { Dispatch } from "redux";
import { userActions } from "../reducers/userReducers";

export const logout = () => (dispatch: Dispatch) => {
  dispatch(userActions.resetUserInfo());
  localStorage.removeItem("account");
};
