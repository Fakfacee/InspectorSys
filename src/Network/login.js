import { request } from "./index.js";

export function loginRequest(formData){
    return request({
        url:'login',
        method:'post',
        data:{
            strUser:formData.username,
            strPwd:formData.password
        }
    })
}
