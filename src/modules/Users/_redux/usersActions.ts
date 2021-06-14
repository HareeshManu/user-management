import { readFile } from "fs";
import * as requestFromServer from "./usersCrud";
import { userSlice } from "./usersSlice";

const { actions } = userSlice;

export const createUser = (user: any) => () => {
  debugger
    console.log('data', user);
    let response =  localStorage.getItem('userList');
    let users = [];
  if(response){
    users = JSON.parse(response);
    users.push({user: user})
  }
  localStorage.setItem('userList', JSON.stringify(users));
    return new Promise((resolve: any) =>
    setTimeout(() => resolve({ data: "success" }), 500)
  );
};

export const getAllUsers = () => (dispatch: any) => {
    const response = localStorage.getItem('userList');
        if(response)
        dispatch(actions.getUserList(JSON.parse(response)));
  };
  
  export const searchUser = (key:any) => (dispatch: any) => {
    const response = localStorage.getItem('userList');
    var filteredUser = [];
        if(response){
            filteredUser = JSON.parse(response).filter(function(item: any){
                return item.user?.name?.first.indexOf(key) > -1;
               });
        }
        console.log('filteredUser', filteredUser);
        
        dispatch(actions.getUserList(filteredUser));
  };
  