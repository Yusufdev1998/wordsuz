import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "konsta/react";
import Home from "./pages/Home";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import PracticeWord from "./pages/PracticeWord";
import PracticeWordGroup from "./pages/PracticeWordGroup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/practice-word",
    element: <PracticeWord />,
  },
  {
    path: "/practice-group",
    element: <PracticeWordGroup />,
  },
]);

const queryClient = new QueryClient();
const MyApp = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App theme="material">
          <RouterProvider router={router}></RouterProvider>
        </App>
      </QueryClientProvider>
    </Provider>
  );
};

export default MyApp;
