import { BASE_URL } from "./constant";
export const getData = async(url)=>{
    let response = {
        data:{},
        error: false
    }
    try{
        let res = await fetch(`${BASE_URL}/${url}`);
        response.data = await res.json()
    }catch(e){
        response.error = true
    }finally{
        console.log(response)
        return response
    }
}