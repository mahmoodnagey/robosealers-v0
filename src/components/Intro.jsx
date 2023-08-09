import { Form } from "react-router-dom";

// library
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'

// assets
import robot from "../assets/robot.jpg"

const Intro = () => {
  return (
    <div className="intro">
        <div>
            <h1>
                Control your <span className="accent">Robosealers</span>
            </h1>
            <p>
                Monitoring the data and behaviors of your Robosealers.
            </p>
            <Form method="post">
                <input 
                    type="text"
                    name="userName"
                    required
                    placeholder="What is your name?"
                    aria-label="Your Name"
                    autoComplete="given-name"
                />
                <button type="submit" className="btn">
                    <span>Sign in</span>
                    <ArrowRightOnRectangleIcon width={20} />
                </button>
            </Form>
        </div>
        <img src={robot} alt="Person with money" width={600}/>
    </div>
  )
}

export default Intro