'use client'

import { useState } from 'react';
import { createUser } from '../Utilities/utils';

interface UsersData {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

const useCreateUsers = (userData: UsersData) => {
  const [user, setUser] = useState<UsersData>(userData);

  const handleRegister = async() =>{
      const response = await createUser(userData)
      setUser(response)
}


  return { handleRegister, user };
};

export default useCreateUsers;