import axios from 'axios'

export const deleteList = async (id) => {
    const header = document.cookie.split("=")
    await axios.delete(`http://localhost:4000/api/lists/${id}`, {headers:{"auth-token":header[1]}})
}

export const addUserList = async (userEmail, listId) => {
    const header = document.cookie.split("=")
    await axios.put(`http://localhost:4000/api/lists/${userEmail}/${listId}`,undefined, {headers:{"auth-token":header[1]}})
}