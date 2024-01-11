import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "konsta/react";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import Practice from "./pages/Practice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/exercise",
    element: <Exercise />,
  },
  {
    path: "/practice",
    element: <Practice />,
  },
]);

const MyApp = () => {
  return (
    <App theme="material">
      <RouterProvider router={router}></RouterProvider>
    </App>
  );
};

export default MyApp;
