import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

const Intro = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            backDelay: 1500,
            backSpeed: 90,
            showCursor: true,
            strings: ["Developer"],
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/waving.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm </h2>
                    <h1>Tadeo Maddonni</h1>
                    <h3>
                        Frontend <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    );
};

export default Intro;
