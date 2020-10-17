import axios from 'axios'

export const SignUpUser = async (posted) => {
    const {data} = await axios.post('http://localhost:4000/api/users/signup', posted)
    console.log(data.token)
    document.cookie = `auth-token=${data.token}`
    return data
}

export const SignInUser = async (posted) => {
    const {data} = await axios.post('http://localhost:4000/api/users/signIn', posted)
    console.log(data)
    document.cookie = `auth-token=${data.token}`
    return data
}

export const GetDataUser = async () => {
    const header = document.cookie.split("=")
    const {data} = await axios.get(`http://localhost:4000/api/users`, {headers:{"auth-token":header[1]}})
    console.log(data)
    return data
}