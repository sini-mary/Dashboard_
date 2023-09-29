
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


export const getTemp= async()=>{
    const url = './api/get-temp';

    try{
        const response = await fetch (url);
        const result = await response.json();
        return result
    }
    catch(error:any){
        return error.message

    }

}

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
