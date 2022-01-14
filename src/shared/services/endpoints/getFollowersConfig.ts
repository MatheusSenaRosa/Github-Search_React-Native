import api from "../config";

const getFollowersConfig = async (name: string) => {
  try {
    const { data } = await api.get(`${name}/followers`);
    return data;
  } catch (err) {}
};

export default getFollowersConfig;
