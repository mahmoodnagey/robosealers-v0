// react router dom imports
import { NavLink, Form } from "react-router-dom";

// library
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid'

// eslint-disable-next-line react/prop-types
const Nav = ({userName}) => {
  return (
    <nav>
        <NavLink
            to="/"
            aria-label="Go to Home"
        >
            <span>Robosealers</span>
        </NavLink>
        {
            userName && (
                <Form
                    method="post"
                    action="logout"
                    onSubmit={(event) => {
                        if (!confirm("Are you sure you want to logout?")) {
                            event.preventDefault();
                        }
                    }}
                >
                    <button type="submit" className="btn btn--dark">
                        <span>Sign out</span>
                        <ArrowLeftOnRectangleIcon width={20} />
                    </button>
                    
                </Form>
            )
        }
    </nav>
  )
}

export default Nav