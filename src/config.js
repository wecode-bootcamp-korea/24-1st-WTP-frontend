const MOVIES_BASE_URL = 'http://localhost:3000/data';
const MOVIES_INFO = 'http://10.58.0.52:8000/details';

export const GET_MOVIES_COMMENTS = `${MOVIES_BASE_URL}/MockComments.json`;
export const GET_MOVIES_BASIC = `${MOVIES_INFO}/`;
export const GET_MOVIES_GENRE = `${MOVIES_INFO}/related_movies?id=`;
