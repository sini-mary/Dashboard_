export const getDevices= async()=>{
    try{
        const response= await fetch(`/mysystem-url`,{
            method:'GET',
        });
        const result= await response.json();
        return result;
    } 
    catch(error){
        return error
    }
}



export const getUsers= async()=>{
    try{
        const response= await fetch(`/myusers-url`,{
            method:'GET',
        });
        const result= await response.json();
        return result;
    } 
    catch(error){
        return error
    }
}