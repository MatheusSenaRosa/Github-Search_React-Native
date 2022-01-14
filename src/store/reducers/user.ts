import { ActionUser, CLEAR_USER, SET_USER } from "../actions/user";

type State = {
  avatar_url: string;
  bio: string;
  blog: string;
  followers: number | null;
  following: number | null;
  location: string;
  login: string;
  name: string;
  public_repos: number | null;
};

const initialState = {
  avatar_url: "",
  bio: "",
  blog: "",
  followers: null,
  following: null,
  location: "",
  login: "",
  name: "",
  public_repos: null,
} as State;

export default (state = initialState, action: ActionUser) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        name: action.name,
        login: action.login,
        avatar_url: action.avatar_url,
        bio: action.bio,
        blog: action.blog,
        location: action.location,
        followers: action.followers,
        following: action.following,
        public_repos: action.public_repos,
      } as State;

    case CLEAR_USER:
      return {
        ...initialState,
      };
  }
  return state;
};
