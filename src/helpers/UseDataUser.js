import { GetDataUser } from "../services/auth.services";

export const useDataUser = (setLists) => {
  const setData = async () => {
    const data = await GetDataUser();
    setLists(data);
  };
  setData();
};
