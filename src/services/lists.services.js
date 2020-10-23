import axios from 'axios'
export const createNewList = async (posted) => {
    const header = document.cookie.split("=")
    await axios.post(`https://online-lists.herokuapp.com/api/lists`, posted, {headers:{"auth-token":header[1]}})
}

export const deleteList = async (id) => {
    const header = document.cookie.split("=")
    await axios.delete(`https://online-lists.herokuapp.com/api/lists/${id}`, {headers:{"auth-token":header[1]}})
}

export const addProduct = async (id, posted) => {
    const header = document.cookie.split("=")
    await axios.put(`https://online-lists.herokuapp.com/api/lists/addproduct/${id}`, posted , {headers:{"auth-token":header[1]}})
}

export const getList = async (id) => {
    const header = document.cookie.split("=")
    const {data} = await axios.get(`https://online-lists.herokuapp.com/api/lists/${id}`, {headers:{"auth-token":header[1]}})
    return data
}

export const deleteProduct = async (id, posted) => {
    const header = document.cookie.split("=")
    const {data} = await axios.put(`https://online-lists.herokuapp.com/api/lists/product/${id}`, posted, {headers:{"auth-token":header[1]}})
    return data
}