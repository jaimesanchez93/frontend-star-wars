import "./styles.css";
import axios from "axios";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PlanetListComponent />,
  },
]);

export default function App(): JSX.Element {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

function PlanetListComponent() {
  const [planets, setPlanets] = React.useState<any>([]);

  React.useEffect(() => {
    axios.get("https://swapi.dev/api/planets").then((planetsResponse: any) => {
      setPlanets(
        planetsResponse.data.results.map(({ name, url }: any) => ({
          name,
          id: url.split("/").at(-2),
        }))
      );
    });
  }, []);

  return (
    <div>
      <h2>Planets!</h2>
      <ul>
        {planets.map((planet: any) => (
          <li key={planet.name}>
            <div>{planet.id + "-" + planet.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
