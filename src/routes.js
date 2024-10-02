const BASE_URL = "https://jsonplaceholder.typicode.com";

export const routes = {
  posts: () => `${BASE_URL}/posts`,
  post: (id) => `${BASE_URL}/posts/${id}`,
  postComments: (id) => `${BASE_URL}/posts/${id}/comments`
};
