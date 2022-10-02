import React, { useEffect, useState } from "react";
import "./works.scss";
import { portfolioData } from "../../data";

const Works = () => {
    const [data, setData] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        setData(portfolioData);
    }, []);

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide((currentSlide) =>
                  currentSlide > 0 ? currentSlide - 1 : 3
              )
            : setCurrentSlide((currentSlide) =>
                  currentSlide < data.length - 1 ? currentSlide + 1 : 0
              );
    };

    return (
        <div className="works" id="works">
            <div
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map((el) => {
                    return (
                        <div className="container">
                            <div className="item">
                                <div className="left">
                                    <div className="leftContainer">
                                        <div className="imgContainer">
                                            <img
                                                src="assets/mobile.png"
                                                alt=""
                                            />
                                        </div>
                                        <h2>{el.title}</h2>
                                        <p>{el.desc}</p>
                                        <span>
                                            <a href={el.repo} target="blanck">Github Repo</a>
                                        </span>
                                    </div>
                                </div>

                                <div className="right">
                                    <img src={el.img} alt="" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <img
                src="assets/arrow.png"
                className="arrow left"
                alt=""
                onClick={() => {
                    handleClick("left");
                }}
            />
            <img
                src="assets/arrow.png"
                className="arrow right"
                alt=""
                onClick={() => {
                    handleClick("right");
                }}
            />
        </div>
    );
};

export default Works;
