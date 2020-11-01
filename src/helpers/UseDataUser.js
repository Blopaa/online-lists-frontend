import { GetDataUser } from "../services/auth.services";

export const useDataUser = async (setLists) => {
  const data = await GetDataUser();
  setLists(data);
  return data;
};
