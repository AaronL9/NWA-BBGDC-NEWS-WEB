import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import Home from "./pages/home/Home";
import News from "./pages/news/News";
import ErrorPage from "./pages/error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { element: <Home />, index: true },
      { path: "/:id", element: <News /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
