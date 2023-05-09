import { Suspense } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  Navigate,
} from "react-router-dom";

import logo from "../logo.svg";
import { routes } from "./Routes";

export const Navigation = () => {
  return (
    <Suspense fallback={null}>
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            {routes.map(({ to, name, path }) => {
              if (path !== "*")
                return (
                  <li key={path}>
                    <NavLink
                      key={path}
                      to={to}
                      className={({ isActive }) =>
                        isActive ? "nav-active" : ""
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                );
            })}
          </ul>
        </nav>
        <Routes>
          {routes.map(({ Component, path, to }) =>
            path !== "*" ? (
              <Route path={path} element={<Component />} />
            ) : (
              <Route path={path} element={<Navigate to={to} replace />} />
            )
          )}
        </Routes>
      </div>
    </BrowserRouter>
    </Suspense>

  );
};
