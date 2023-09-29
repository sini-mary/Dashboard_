import {  loginUser } from "../Utilities/utils";
import { useState } from "react";

interface LoginData {
  username: string;
  password: string;
  
}

const useLoginUser = (userData:LoginData) => {
  const [user, setUser] = useState<LoginData>(userData);
 const handleLogin = async() =>{
      const response = await loginUser(userData)
      setUser(response)  
}
return { handleLogin, user };
};
export default useLoginUser;