import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Cadastro } from "./Pages/Cadastro/index.tsx";
import { Login } from "./Pages/Login/index.tsx";
import { Dashboard } from "./Pages/Dashboard/index.tsx";
import { createContext } from "react";

export const TokenContext = createContext<
  [string | null, React.Dispatch<React.SetStateAction<string | null>>]
>([null, () => {}]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cadastro />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <Cadastro />,
  },
]);

const App = () => {
  const tokenState = useState<string | null>(null);
  return (
    <React.StrictMode>
      <TokenContext.Provider value={tokenState}>
        <RouterProvider router={router} />
      </TokenContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
