import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NavigationPage from "./pages/NavigationPage";
import CharactersPage from "./pages/CharactersPage";
import EpisodesPage, { loader as episodeLoader } from "./pages/EpisodesPage";
import HomePage from "./pages/HomePage";
import LocationsPage, { loader as locationLoader } from "./pages/LocationsPage";
import ErrorPage from "./pages/ErrorPage";
import CharacterDetailPage, {
  loader as detailLoader,
} from "./pages/CharacterDetailPage";
import LocationDetailPage, {
  loader as locationDetailLoader,
} from "./pages/LocationDetailPage";
import EpisodeDetailPage, {
  loader as episodeDetailLoader,
} from "./pages/EpisodeDetailPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavigationPage />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "characters",
          element: <CharactersPage />,
        },
        {
          path: "characters/:characterId",
          element: <CharacterDetailPage />,
          loader: detailLoader,
        },
        {
          path: "locations",
          element: <LocationsPage />,
          loader: locationLoader,
        },
        {
          path: "locations/:locationId",
          element: <LocationDetailPage />,
          loader: locationDetailLoader,
        },
        { path: "episodes", element: <EpisodesPage />, loader: episodeLoader },
        {
          path: "episodes/:episodeId",
          element: <EpisodeDetailPage />,
          loader: episodeDetailLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
