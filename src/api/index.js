//包含应用中所有接口函数的模块
import ajax from './ajax'
// export function reqLogin(){
//     return   ajax('/login',{username,password},'post')
// }
const base=''
export const reqLogin=(username,password)=>ajax(base+'/login',{username,password},'post')
export const reqAddUser=(user)=>ajax('/manage/user/add',user,'post')