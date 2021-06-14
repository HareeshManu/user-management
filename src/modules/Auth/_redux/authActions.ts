import * as requestFromServer from "./authCrud";
import { authSlice } from "./authSlice";
import {user} from "../../../data/user";
const { actions } = authSlice;

export const getAllUsers = () => (dispatch: any) => {
  return requestFromServer
    .fetchAllUsers()
    .then(response => {
      dispatch(actions.getUserList(response?.data));
      return response
    })
    .catch((error: any) => {
      error.clientMessage = "Can't get user details";
    });
};


export const login = (username: any, password: any) => () => {  
        if(user.username === username && user.password === password){
            return new Promise((resolve: any) =>
            setTimeout(() => resolve({ data: "success" }), 500)
          );
        }
        else{
            return new Promise((resolve: any) =>
            setTimeout(() => resolve({ data: "failure" }), 500)
          );
        } 
  };
  
