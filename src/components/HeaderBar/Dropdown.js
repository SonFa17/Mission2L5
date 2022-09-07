import "./HeaderBar.css";
import { Link } from "react-router-dom";
import { Menu, MenuItem } from '@mui/material'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import React from "react";
import dropdownIcon from '../img/nav-bar-icon.png';

const Dropdown = () => {
    return (
        <>
            <div className="blue-nav-drop-down">
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <React.Fragment>
                            <div variant="contained" {...bindTrigger(popupState)}>
                                Car Insurance
                                <img src={dropdownIcon} alt="dropdown icon" className="dropdown-icon"></img>
                            </div>
                            <Menu className="blue-nav-drop-down-container" {...bindMenu(popupState)}>
                                <Link className="blue-nav-drop-down-quote-container" to="/cars/insurance-quotes">
                                    <div className="blue-nav-drop-down-quote" onClick={popupState.close}>GET QUOTE</div>
                                </Link>

                                <Link className="blue-nav-drop-down-text" to="/cars/compare-policies">
                                    <MenuItem onClick={popupState.close}>Compare our Policies</MenuItem>
                                </Link>

                                <Link className="blue-nav-drop-down-text" to="/cars/faq">
                                    <MenuItem onClick={popupState.close}>FAQ</MenuItem>
                                </Link>

                                <Link className="blue-nav-drop-down-text" to="/cars/faq">
                                    <MenuItem onClick={popupState.close}>Retrieve a quote</MenuItem>
                                </Link>

                                <Link className="blue-nav-drop-down-text" to="/cars/claims">
                                    <MenuItem onClick={popupState.close}>Start Claim</MenuItem>
                                </Link>

                            </Menu>
                        </React.Fragment>
                    )}
                </PopupState>
            </div>
        </>
    )
}

export default Dropdown
