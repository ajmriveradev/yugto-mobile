import axios from "axios";
import { Alert } from "react-native";

const BASE_URL = process.env.EXPO_PUBLIC_BASE_API_URL;

export const signIn = async (form) => {
  try {
    const result = await axios.post(`${BASE_URL}/users/auth`, form);

    console.log("SIGN IN - RESULT: ", result);

    return result;
  } catch (error) {
    console.error(`SignIn: ERROR = ${error}`);
    Alert.alert("Error", error.message);

    throw new Error(error.message);
  }
}

export const signUp = async (form) => {
  try {
    const result = await axios.post(`${BASE_URL}/users`, form);

    console.log("SIGN UP - RESULT: ", result);

    return result;
  } catch (error) {
    console.error(`SignIn: ERROR = ${error}`);
    Alert.alert("Error", error.message);

    throw new Error(error.message);
  }
}