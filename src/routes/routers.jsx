import  { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage/landingPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import NewTicket from "../pages/NewTicket/NewTicket";
import PageNotFound from "../pages/PageNotFound/pageNotFound";

const Routers = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/newticket",
        element: <NewTicket />,
      },
      {
        path: "/editticket/:id",
        element: <NewTicket />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ]);
  return <RouterProvider router={router}/>;
};

export default Routers