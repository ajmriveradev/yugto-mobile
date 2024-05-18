import axios from "axios";
import { Alert } from "react-native";

const BASE_URL = process.env.EXPO_PUBLIC_BASE_API_URL;

export const getAllChildrenByParentId = async (parentId) => {
  try {
    const result = await axios.get(`${BASE_URL}/children/parent/${parentId}`);

    return result.data;
  } catch (error) {
    console.error(`getAllChildrenByParentId: ERROR = ${error}`);
    Alert.alert("Error", error.message);

    throw new Error(error.message);
  }
}

export const getChildById = async (childId) => {
  try {
    const result = await axios.get(`${BASE_URL}/children/${childId}`);

    return result.data;
  } catch (error) {
    console.error(`getChildById: ERROR = ${error}`);
    Alert.alert("Error", error.message);

    throw new Error(error.message);
  }
}