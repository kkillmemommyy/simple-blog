import { About, Posts, Error, PostPage, Login } from "../pages";

export const routes = [
  { path: "/about", component: About, private: true },
  { path: "/posts", component: Posts, private: true },
  { path: "/posts/:id", component: PostPage, private: true },
  { path: "/login", component: Login, private: false },
  { path: "/error", component: Error, private: false },
];
