import { v4 as uuidv4 } from 'uuid'
//生成一个随机字符串，每次执行不能发生变化
export const getUUId = () => {
  //先查看本地是否有uuid
  let uuid_token = localStorage.getItem('UUIDTOKEN')
  if (!uuid_token) {
    //如果本地没有，生成一个临时id
    uuid_token = uuidv4()
    //存入本地
    localStorage.setItem('UUIDTOKEN', uuid_token)
  }
  return uuid_token
}
