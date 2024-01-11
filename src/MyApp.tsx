import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { App } from "konsta/react";
import Home from "./pages/Home";
import ExerciseWord from "./pages/ExerciseWord";
import PracticeWordGroup from "./pages/PracticeWordGroup";
import MyPopup from "./components/base/MyPopup";
import { store } from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/exercise-word",
    element: <ExerciseWord />,
  },
  {
    path: "/practice-word-group",
    element: <PracticeWordGroup />,
  },
]);

const MyApp = () => {
  return (
    <Provider store={store}>
      <App theme="material">
        <RouterProvider router={router}></RouterProvider>
        <MyPopup />
      </App>
    </Provider>
  );
};

export default MyApp;
