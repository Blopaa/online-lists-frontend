import axios from "axios";

export const deleteList = async (id) => {
  const header = document.cookie.split("=");
  await axios.delete(`http://localhost:4000/api/lists/${id}`, {
    headers: { "auth-token": header[1] },
  });
};

export const addUserList = async (userEmail, listId) => {
  const header = document.cookie.split("=");
  let res;
  try {
    await axios.put(
      `http://localhost:4000/api/lists/${userEmail}/${listId}`,
      undefined,
      { headers: { "auth-token": header[1] } }
    );
    res = "added"
  } catch (err) {
    const { status } = err.response;
    const { message } = err.response.data;
    console.log(message);
    res = { status, message };
  } finally {
    console.log(res);
    return res;
  }
};
