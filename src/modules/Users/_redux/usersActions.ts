import { user } from "../../../data/user";
import * as requestFromServer from "./usersCrud";
import { userSlice } from "./usersSlice";

const { actions } = userSlice;

export const createUser = (user: any) => () => {
    user = getUserStructure(user);
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
                return item.user?.name?.first?.toLowerCase().indexOf(key) > -1;
               });
        }        
        dispatch(actions.getUserList(filteredUser));
  };
  
  const getUserStructure = (user: any)=>{
    let data =  {
      "gender": user.gender,
      "name": {
        "title":  user.title,
        "first": user.firstname,
        "last": user.lastname
      },
      "location": {
        "street": "2989 keistraat",
        "city": "castricum",
        "state": "friesland",
        "zip": 42366
      },
      "email": user.email,
      "username": user.username,
      "password": user.password,
      "salt": "60AYD76x",
      "md5": "7ce5593c3ff3da5a4a87c8384c444809",
      "sha1": "be29c483a39cf7c635d09b800ef2acb196812c6e",
      "sha256": "0dcb04303409c3043fa493c3f1f6f1798fecb61009bd64e373c5ccfe8db00a63",
      "registered": 1110588771,
      "dob": user.dob,
      "phone": user.phone,
      "cell": "(364)-503-5528",
      "BSN": "65048540",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/74.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/74.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/74.jpg"
      }
    }
    return data;
  }

 