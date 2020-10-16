import axios from 'axios'

export const SignUpUser = async (posted) => {
    const response = await axios.post('http://localhost:4000/api/users/signup', posted)
    const data = response.data
    console.log(data.token)
    document.cookie = `auth-token=${data.token}`
    return data
}