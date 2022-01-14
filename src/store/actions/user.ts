export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";

export type userData = {
  avatar_url: string;
  bio: string;
  blog: string;
  followers: number;
  following: number;
  html_url: string;
  location: string;
  login: string;
  name: string;
  public_repos: number;
};

export type ActionUser = {
  type: string;
  avatar_url: string;
  bio: string;
  blog: string;
  followers: number;
  following: number;
  location: string;
  login: string;
  name: string;
  public_repos: number;
};

export const setUser = (userData: userData) => {
  return {
    type: SET_USER,
    login: userData.login,
    name: userData.name,
    avatar_url: userData.avatar_url,
    bio: userData.bio,
    blog: userData.blog,
    location: userData.location,
    followers: userData.followers,
    following: userData.following,
    public_repos: userData.public_repos,
  } as ActionUser;
};

export const clearUser = () => {
  return {
    type: CLEAR_USER,
  };
};
