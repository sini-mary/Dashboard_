
export const getFlowrate = async()=>{
    const url = './api/get-flowrate';

    try{
        const response = await fetch(url);
        const result = await response.json();
        return result
    }
    catch(error:any){
        return error.message
    }

}


export const getUser= async()=>{
    const url = './api/get-users';

    try{
        const response = await fetch(url);
        const result = await response.json();
        return result
    }
    catch(error:any){
        return error.message
    }

}



export const getTemp = async () => {
  try {
    const response = await fetch(`./api/get-temperature`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching temperature:", error);
    return [];
  }


}




interface UsersData {
username: string;
email: string;
password: string;
first_name: string;
last_name: string;
}

export const createUser = async (userData: UsersData) => {
const url = `/api/create-user`;

try {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  const result = await response.json();
  return result;
} catch (error: any) {
  return error.message;
}
};

interface LoginData {
username: string;
password: string;
}

export const loginUser = async (loginData: LoginData) => {
const url = '/api/login-user';

try {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  });

  const result = await response.json();
  return result;
} catch (error: any) {
  return error.message;
}
};


export const getLocations = async () => {
  try {
    const response = await fetch(`/api/get-locations`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching locations:", error);
    return [];
  }
};
export const postLocations = async () => {
  try {
    const response = await fetch(`/api/create-locations`, {
      method: "POST",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching locations:", error);
    return [];
  }
};