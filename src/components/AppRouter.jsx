import { Routes, Route, Navigate } from "react-router-dom";
import { Posts, About, Error, PostPage } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/error" element={<Error />} />
      <Route path="/" element={<Navigate to="/posts" />} />
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
  );
};
