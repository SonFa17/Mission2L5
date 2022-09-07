import "./HeaderBar.css";
import { Link } from "react-router-dom";


const TopNavBar = () => {
    return (
        <>
            <ul className="top-nav-container">
                <li>
                    <Link className="top-nav-text" to="/cars">
                        Cars
                    </Link>
                </li>

                <li>
                    <Link className="top-nav-text" to="/turners-subscription">
                    Turners Subscription
                    </Link>
                </li>

                <li>
                    <Link className="top-nav-text" to="/trucks-and-machinery">
                    Trucks & Machinery
                    </Link>
                </li>

                <li>
                    <Link className="top-nav-text" to="/damaged-and-end-of-life">
                    Damaged & End of Life
                    </Link>
                </li>

                <li>
                    <Link className="top-nav-text" to="/general-goods">
                    General Goods
                    </Link>
                </li>

                <li>
                    <Link className="top-nav-text" to="/buses-caravans-and-motorhomes">
                    Buses, Caravans & Motorhomes
                    </Link>
                </li>

            </ul>
        </>
    )
}

export default TopNavBar
