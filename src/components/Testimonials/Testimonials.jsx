import React from "react";
import "./testimonials.scss";
import { skills } from "../../data";

const Testimonials = () => {
    const skillElements = skills.map((skill) => {
        return (
            <div className="card">
                <div className="top">
                    <img src={skill.img} alt="" />
                </div>
                <div className="bottom">
                    <h3>{skill.name}</h3>
                </div>
            </div>
        );
    });

    return (
        <div className="testimonials" id="testimonials">
            <h1>Skills</h1>
            <div className="container">{skillElements}</div>
        </div>
    );
};

export default Testimonials;
