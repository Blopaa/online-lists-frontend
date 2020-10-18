import axios from 'axios'
export const createNewList = async (posted) => {
    const header = document.cookie.split("=")
    await axios.post('http://localhost:4000/api/lists', posted, {headers:{"auth-token":header[1]}})
}