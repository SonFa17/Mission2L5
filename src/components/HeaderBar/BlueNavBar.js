import "./HeaderBar.css";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const BlueNavBar = () => {
    return (
        <>
            <div className="blue-nav-bar-container">

                <ul className="blue-nav-container">
                    <li>
                        <Link className="blue-nav-text" to="/cars/find-cars">
                            Find a Car
                        </Link>
                    </li>

                    <li>
                        <Link className="blue-nav-text" to="/cars/how-to-buy">
                            How to Buy
                        </Link>
                    </li>

                    <li>
                        <Link className="blue-nav-text" to="/cars/sell-your-car">
                            Sell your Car
                        </Link>
                    </li>

                    <li>
                        <Link className="blue-nav-text" to="/cars/finance">
                            Finance
                        </Link>
                    </li>

                    <Dropdown></Dropdown>

                    <li>
                        <Link className="blue-nav-text" to="/cars/turners-subscription">
                            Turners Subscription
                        </Link>
                    </li>

                    <li>
                        <Link className="blue-nav-text" to="/cars/auction">
                            Auctions
                        </Link>
                    </li>

                    <li>
                        <Link className="blue-nav-text" to="/cars/services-and-info">
                            Services & Info
                        </Link>
                    </li>

                </ul>

            </div>
        </>
    )
}

export default BlueNavBar
