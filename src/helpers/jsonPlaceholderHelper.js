const ENDPOINT = 'https://jsonplaceholder.typicode.com';

export const postsUrl = (postId = -1) => {
  if (postId === -1) {
    return `${ENDPOINT}/posts`;
  } else {
    return `${ENDPOINT}/posts/${postId}`;
  }
};

export const usersUrl = (userId = -1) => {
  if (userId === -1) {
    return `${ENDPOINT}/users`;
  } else {
    return `${ENDPOINT}/users/${userId}`;
  }
};

export const commentsUrl = (postId, queryParams=true) => {
  if (queryParams) {
    return `${ENDPOINT}/comments?postId=${postId}`;
  } else {
    return `${ENDPOINT}/posts/${postId}/comments`;
  }
};
