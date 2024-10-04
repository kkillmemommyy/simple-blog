import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "../routers";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";

export const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) =>
        route.private ? (
          <Route
            key={route.path}
            path={route.path}
            element={
              <PrivateRoute>
                <route.component />
              </PrivateRoute>
            }
          />
        ) : (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        )
      )}
      <Route path="/" element={<Navigate to="/posts" />} />
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
  );
};
