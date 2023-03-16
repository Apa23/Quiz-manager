import { checkinCredentials, login, loginError } from "./authSlice";
import { users } from "../../data/data";


export const checkinAutentication = (user) => async (dispatch) => {
  await dispatch(checkinCredentials());
  setTimeout(() => {
    if (
      users.some(
        (registerUser) =>
          registerUser.email === user.email &&
          registerUser.password === user.password
      )
    ) {
      dispatch(login(user));
      
    } else {
      dispatch(loginError());
      
    }
  }, 2000);
};
