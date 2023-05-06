import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import Details from "./pages/details/Details";
import Games from "./pages/games/Games";
import Home from "./pages/home/Home";
import Movies from "./pages/movies/Movies";
import TvShows from "./pages/tvshows/TvShows";
import { createRef } from "react";

export const routes = [
  {
    path: "/home",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/movie",
    name: "Movies",
    element: <Movies />,
  },
  {
    path: "/tvshow",
    name: "Tv shows",
    element: <TvShows />,
  },
  {
    path: "/game",
    name: "Games",
    element: <Games />,
  },
  {
    path: "/bookmarks",
    name: "",
    element: <Bookmarks />,
  },
  {
    path: "/details/:slug",
    name: "",
    element: <Details />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error Page</div>,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
]);
