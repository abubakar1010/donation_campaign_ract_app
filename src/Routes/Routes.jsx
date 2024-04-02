import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import FeaturedDetails from "../Components/FeaturedDetails/FeaturedDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/donation",
            element: <Donation />
        },
        {
            path: "/statistics",
            element: <Statistics />
        },
        {
          path: "/featuredDetails/:id",
          element: <FeaturedDetails/>,
          loader: () => fetch("../../public/Data/featured.json")
        }
      ]
    },
  ]);

  export default router