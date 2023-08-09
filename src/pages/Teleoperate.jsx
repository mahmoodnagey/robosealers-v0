// react router dom imports
import { useLoaderData } from "react-router-dom";

// helper functions
import { fetchData } from "../helpers";

// library imports
import { toast } from "react-toastify"

// components
import Intro from "../components/Intro";

// loader
// eslint-disable-next-line react-refresh/only-export-components
export function TeleoperateLoader() {
  const userName = fetchData("userName");
  return { userName };
}

// action
// eslint-disable-next-line react-refresh/only-export-components
export async function TeleoperateAction({request}) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`Welcome, ${formData.userName}`)
  }
  catch (e){
    throw new Error("There was a problem creating your account.")
  }
}


const Teleoperate = () => {
    const { userName } = useLoaderData();
  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>Welcome back, <span className="accent">{userName}</span></h1>
          
        </div>
      ) : <Intro />}
    </>
  )
}

export default Teleoperate