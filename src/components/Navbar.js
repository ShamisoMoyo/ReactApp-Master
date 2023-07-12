import { Link } from "react-router-dom"

const Navbar = () => {
    
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All tasks</Link>
                    </li>
                    <li>
                        <Link to="/api/tasks/create">Add task</Link>
                    </li>
                    <li>
                        <Link to="/contact">Edit task</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )

}

export default Navbar