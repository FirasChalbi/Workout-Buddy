import { Link } from "react-router-dom";
import img from '../stay1.png'

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <img src={img} height="90px" width="210px" ></img>
                <Link to="/">
                    <h1>Workout Buddy</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar