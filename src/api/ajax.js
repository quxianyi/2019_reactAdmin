// 能发送异步ajax请求的函数模块
import axios from 'axios'
export default function ajax(url,data={},type="GET"){
    if(type="GET"){
        return axios.get(url,{
            params:data
        })
    }else{
        return axios.post(url,data)
    }
}