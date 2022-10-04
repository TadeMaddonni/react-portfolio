import React from "react";
import "./topbar.scss";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Topbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        tadeo.
                    </a>
                    <div className="itemContainer">
                        <a
                            href="https://www.linkedin.com/in/tadeo-maddonni-899836236/"
                            target="blanck"
                            className=""
                        >
                            <LinkedInIcon className="icon" />
                            Linkedin
                        </a>
                    </div>
                    <div className="itemContainer">
                        <EmailIcon className="icon" />
                        <span>
                            <a
                                className="emailTo"
                                href="mailto:tadeomaddonni@gmail.com"
                            >
                                tadeomaddonni@gmail.com
                            </a>
                        </span>
                    </div>
                </div>
                <div className="right">
                    <div
                        className="hamburger"
                        onClick={() => {
                            setMenuOpen((prevState) => !prevState);
                        }}
                    >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line2"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
