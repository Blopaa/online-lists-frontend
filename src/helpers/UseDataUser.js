import { GetDataUser } from "../services/auth.services";

export const useDataUser = async (setLists) => {
  const data = await GetDataUser();
  console.log(data);
  setLists(data);
  return data;
};
