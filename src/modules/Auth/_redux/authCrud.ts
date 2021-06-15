import axios from "axios";
 const endpoint = "https://randomuser.me/api/0.8/?results=20";

// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export function fetchAllUsers() {
  return axios.get(`${endpoint}`);
}

export function loginUser() {
    return new Promise((resolve) =>
    setTimeout(() => resolve({ data: "success" }), 500)
  );
  }