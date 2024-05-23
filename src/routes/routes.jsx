import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import AppLayout from "../layout/AppLayout";
import RestaurantDetailedPage from "../components/RestaurantDetailedPage/RestaurantDetailedPage";

// import { ShimmerPostDetails } from "react-shimmer-effects";

//Lazy Loading --- > Dynamic import
const Home = lazy(() => import("../pages/Home"));
const Banner = lazy(() => import("../components/Banner/Banner"));
const Comments = lazy(() => import("../components/Comments/Comments"));
const Offer = lazy(() => import("../components/Offer/Offer"));
const Contact = lazy(() => import("../components/Contact/Contact"));
const Cart = lazy(() => import("../components/Cart/Cart"));
const ErrorPage = lazy(() => import("../components/ErrorPage/ErrorPage"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<p>Loading</p>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<p>Loading</p>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/banner",
        element: (
          <Suspense fallback={<p>Loading</p>}>
            <Banner />
          </Suspense>
        ),
      },
      {
        path: "/comments",
        element: (
          <Suspense fallback={<p>Loading</p>}>
            <Comments />
          </Suspense>
        ),
      },
      {
        path: "/offer",
        element: (
          <Suspense fallback={<p>Loading</p>}>
            <Offer />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<p>Loading</p>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:id",
        element: (
          <Suspense fallback={<p>Loading</p>}>
            <RestaurantDetailedPage />
          </Suspense>
        ),
      },
    ],
    errorElement: (
      <Suspense fallback={<p>Loading</p>}>
        <ErrorPage />
      </Suspense>
    ),
  },
]);

export default appRouter;
