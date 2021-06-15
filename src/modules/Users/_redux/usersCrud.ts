import axios from "axios";
const endpoint = "https://randomuser.me/api/0.8/?results=20";



export function fetchAllUsers() {
  const userList = localStorage.getItem('userList');
  if(userList != null && userList != undefined){
    return userList;
  }
  else return "";
}
