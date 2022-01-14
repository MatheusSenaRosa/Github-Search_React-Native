import api from "../config";

const getFollowingConfig = async (name: string) => {
  try {
    const { data } = await api.get(`${name}/following`);
    return data;
  } catch (err) {}
};

export default getFollowingConfig;
