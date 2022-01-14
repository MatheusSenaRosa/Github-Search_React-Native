import api from "../config";

const getReposConfig = async (login: string) => {
  try {
    const { data } = await api.get(`${login}/repos`);
    return data;
  } catch (err) {}
};

export default getReposConfig;
