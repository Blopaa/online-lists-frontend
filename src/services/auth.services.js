import axios from 'axios'
export const SignUpUser = async (posted) => {
     let res; 
   try {
    const {data, status} = await axios.post(`https://online-lists.herokuapp.com/api/users/signup`, posted)
    document.cookie = `auth-token=${data.token}; path=/`
    res = {data, status}
   } catch (err) {
       const {status} = err.response
       const {message} = err.response.data
       console.log(message)
       res = {status, message}
   }finally {
       console.log(res)
       return res
   }
}

export const SignInUser = async (posted) => {
    let res; 
   try {
    const {data, status} = await axios.post(`https://online-lists.herokuapp.com/api/users/signIn`, posted)
    document.cookie = `auth-token=${data.token}; path=/`
    res = {data, status}
   } catch (err) {
       const {status} = err.response
       const {message} = err.response.data
       console.log(message)
       res = {status, message}
   }finally {
       console.log(res)
       return res
   }
}

export const GetDataUser = async () => {
    const header = document.cookie.split("=")
    const {data} = await axios.get(`https://online-lists.herokuapp.com/api/users`, {headers:{"auth-token":header[1]}})
    return data
}
