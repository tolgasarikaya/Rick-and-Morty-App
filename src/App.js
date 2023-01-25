import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import MainPage from "./pages/MainPage";
import CharactersPage, { fetchCharacters } from "./pages/CharactersPage";
import LocationsPage from "./pages/LocationsPage";
import EpisodesPage from "./pages/EpisodesPage";
import Root from "./pages/Root";

function App() {
  const curPage = useSelector((state) => state.pageInfo.curPage);
  const params = useParams();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "", element: <MainPage /> },
        {
          path: "characters",
          element: <CharactersPage />,
          loader: () => fetchCharacters(curPage),
        },
        {
          path: `/characters/:page`,
          element: <CharactersPage />,
          loader: () => fetchCharacters(curPage),
        },
        { path: "locations", element: <LocationsPage /> },
        { path: "episodes", element: <EpisodesPage /> },
      ],
    },
  ]);
  console.log(params.page);
  return <RouterProvider router={router} />;
}

export default App;
