const MOVIES_BASE_URL = 'http://localhost:3000/data';
const MOVIES_INFO = 'http://10.58.2.252:8000';

export const GET_MOVIES_COMMENTS = `${MOVIES_BASE_URL}/MockComments.json`;
export const GET_MOVIES_BASIC = `${MOVIES_INFO}/movies/`;
export const GET_MOVIES_GENRE = `${MOVIES_INFO}/movies/related_movies?id=`;
//login,signup
export const USERS_LIST = `${MOVIES_INFO}/users`;
//search
export const MOVIES_LIST = `${MOVIES_INFO}/movies`;
