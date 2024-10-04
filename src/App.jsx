import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./modules/Shared Components/Home/Home";
import { ToastContainer } from "react-toastify";
import MasterLayout from "./modules/Shared Components/MasterLayout/MasterLayout";
import Card from "./modules/Card/Card";
import Login from "./modules/Auth/Login/Login";
import CardDetails from "./modules/Card/CardDetails";
import PartmentData from "./modules/Shared Components/Partment/PartmentData";
import LandData from "./modules/Shared Components/Land/LandData/LandData";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      // errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "card", element: <Card /> },
        { path: "login", element: <Login /> },
        { path: "card-details", element: <CardDetails /> },
        { path: "partment-data", element: <PartmentData /> },
        { path: "LandData", element: <LandData /> },
      ],
    },
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
