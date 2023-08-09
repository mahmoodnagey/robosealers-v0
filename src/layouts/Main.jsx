// react router dom imports
import { Outlet, useLoaderData } from "react-router-dom";

// Assets
import wave from "../assets/wave.svg";

// helper functions
import { fetchData } from "../helpers";

// components
import Nav from "../components/Nav";

// loader
// eslint-disable-next-line react-refresh/only-export-components
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
    const { userName } = useLoaderData();
  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
          <Outlet />
      </main>
      <img src={wave} alt="" />
      
    </div>
  )
}

export default Main