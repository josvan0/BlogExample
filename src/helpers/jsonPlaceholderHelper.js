const ENDPOINT = 'https://jsonplaceholder.typicode.com';

export const postsUrl = (postId = -1, userId = -1) => {
  if (postId === -1 && userId === -1) {
    return `${ENDPOINT}/posts`;
  } else if (postId === -1) {
    return `${ENDPOINT}/users/${userId}/posts`;
  } else {
    return `${ENDPOINT}/posts/${postId}`;
  }
};

export const usersUrl = (userId) => `${ENDPOINT}/users/${userId}`;

export const commentsUrl = (postId, queryParams = true) => {
  if (queryParams) {
    return `${ENDPOINT}/comments?postId=${postId}`;
  } else {
    return `${ENDPOINT}/posts/${postId}/comments`;
  }
};

export const albumsUrl = (albumId = -1, userId = -1) => {
  if (albumId === -1 && userId === -1) {
    return `${ENDPOINT}/albums`;
  } else if (albumId === -1) {
    return `${ENDPOINT}/users/${userId}/albums`;
  } else {
    return `${ENDPOINT}/albums/${albumId}`;
  }
};

export const photosUrl = (albumId) => `${ENDPOINT}/albums/${albumId}/photos`;
