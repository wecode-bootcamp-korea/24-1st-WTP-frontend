// const MOVIES_BASE_URL = 'http://10.58.1.85:8000';

// export const GET_MOVIES_LIST = `${MOVIES_BASE_URL}/movie?`;

const MOVIES_BASE_URL = 'http://localhost:3000/data';
const MOVIES_INFO = 'http://10.58.4.196:8000/details';

export const GET_MOVIES_INFO = `${MOVIES_BASE_URL}/MockMovieInfo.json`;
export const GET_MOVIES_COMMENTS = `${MOVIES_BASE_URL}/MockComments.json`;
export const GET_MOVIES_GENRE = `${MOVIES_INFO}/related_movies?id=2`;
// http://10.58.4.196:8000/details/related_movies?id=
