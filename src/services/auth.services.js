import axios from 'axios'
export const SignUpUser = async (posted) => {
    const {data} = await axios.post('http://localhost:4000/api/users/signup', posted)
    document.cookie = `auth-token=${data.token}`
    return data
}

export const SignInUser = async (posted) => {
    let res; 
   try {
    const {data} = await axios.post('http://localhost:4000/api/users/signIn', posted)
    document.cookie = `auth-token=${data.token}`
    res = data.token
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
    const {data} = await axios.get(`http://localhost:4000/api/users`, {headers:{"auth-token":header[1]}})
    return data
}
