import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NavigationPage from "./pages/NavigationPage";
import CharactersPage from "./pages/CharactersPage";
import EpisodesPage from "./pages/EpisodesPage";
import HomePage from "./pages/HomePage";
import LocationsPage, { loader as locationLoader } from "./pages/LocationsPage";
import ErrorPage from "./pages/ErrorPage";
import CharacterDetailPage, {
  loader as detailLoader,
} from "./pages/CharacterDetailPage";

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
        { path: "episodes", element: <EpisodesPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
