import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signIn } from "../services/auth";
import { router } from 'expo-router';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  // useEffect( () => {
  //   checkLoggedIn();
  // }, []);

  // const checkLoggedIn = async () => {
  //   try {
  //     let token = await AsyncStorage.getItem("userToken");
  
  //     console.log("USER TOKEN: ", token);
  //     setUserToken(token);
  //     await AsyncStorage.setItem("userToken", token);
  //   } catch (error) {
  //     console.log("checkLoggedIn - ERROR - ", error.message);
  //   }
  // }

  // useEffect( () => {
  //   async function autoSignIn() {
  //     try {
  //       const result = await signIn({ email: "ajmr@test.com", password: "secret" });

  //       setUser(result.data);
  //     } catch (error) {
  //       console.error("autoSignIn - ERROR - ", error.message);
  //     } finally {
  //       setIsLoading(false);
  //       setIsLoggedIn(true);
  //     }
  //   }

  //   autoSignIn();
  // }, []);
  

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isLoading,
        setIsLoading
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider;