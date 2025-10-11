import React from "react";

const Header = () => {
    return (
        <header className="bg-primary text-white py-4 shadow">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                <h1 className="h3 fw-bold mb-3 mb-md-0">Resume Builder</h1>
                <nav>
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#features">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#templates">Templates</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
