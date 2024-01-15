import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "konsta/react";
import Home from "./pages/Home";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import PracticeWord from "./pages/PracticeWord";
import PracticeWordGroup from "./pages/PracticeWordGroup";

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

const MyApp = () => {
  return (
    <Provider store={store}>
      <App theme="material">
        <RouterProvider router={router}></RouterProvider>
      </App>
    </Provider>
  );
};

export default MyApp;
