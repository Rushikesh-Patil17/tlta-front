import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                TLTA
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNav"
            >
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a className="nav-link" href="/adminManageUsers">
                            Manage Users
                        </a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="/adminAssessments">
                            Manage Assessments
                        </a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="/adminActivities">
                            Manage Activities
                        </a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="/usersActivity">
                            Review User's Activities
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Header;
