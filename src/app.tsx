import { useReducer } from "react";
import { makeInitialTarefaState, tarefaReducer } from "./domain/reducers";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { TarefaPage } from "./pages/tarefa";

export function App() {
  const [appState, dispatch] = useReducer(
    tarefaReducer,
    makeInitialTarefaState()
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home appState={appState} dispatch={dispatch} />,
    },
    {
      path: "/task/:id",
      element: <TarefaPage appState={appState} />,
    },
  ]);

  return <RouterProvider router={router} />;
}
