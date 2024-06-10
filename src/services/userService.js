import AsyncStorage from "@react-native-async-storage/async-storage";
import { httpRequest } from "~/utils/httprequest";

const getToken = async () => {
    const res = await AsyncStorage.getItem('currentUser');
    return JSON.parse(res).token;
  };
  
export const login = (data) => {
  try {
    const res = httpRequest.post("user/login", data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const register = (data) => {
  try {
    const res = httpRequest.post("user/register", data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentUser = async () => {
  try {
    const token = await getToken();
    const res = await httpRequest.get("user/current-user", {
      headers: { authorization: "Bearer " + token },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const editUser = async ({ data, id }) => {
  try {
    const token = await getToken();
    const res = await httpRequest.put(`user/edit-user/${id}`, data, {
      headers: { authorization: "Bearer " + token },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
