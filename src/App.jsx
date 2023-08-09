import { createBrowserRouter, RouterProvider } from "react-router-dom";

// library
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Routes
import Teleoperate, {TeleoperateAction, TeleoperateLoader} from './pages/Teleoperate';

// Layouts
import Main, { mainLoader } from "./layouts/Main";

// Actions
import { logoutAction } from "./actions/logout";

import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Teleoperate />,
        loader: TeleoperateLoader,
        action: TeleoperateAction,
        errorElement: <Error />
      },
      {
        path: "logout",
        action: logoutAction
      },
    ]
  },

]);

function App() {
 

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App
