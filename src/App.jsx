import { useEffect, useState } from "react";
import Router from "./router/router";
import publicRoutes from "./router/routes/publicRoutes";
import { getRoutes } from "./router/routes";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);

  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes([...allRoutes, routes]);
    console.log("routes in effect", routes, allRoutes);
  }, []);

  return <Router allRoutes={allRoutes} />;
}

export default App;
