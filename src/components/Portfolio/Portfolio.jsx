import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import { portfolioData } from "../../data";

const Portfolio = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(portfolioData);
    }, []);

    const portfolioEelements = data.map((el) => {
        return (
            <a href={el.repo} target="blanck">
                <div className="item">
                    <img src={el.img} alt="" />
                    <h3>{el.title} </h3>
                </div>
            </a>
        );
    });
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Frontend</li>
            </ul>
            <div className="container">{portfolioEelements}</div>
        </div>
    );
};

export default Portfolio;
