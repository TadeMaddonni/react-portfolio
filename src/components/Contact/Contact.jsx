import React, { useState } from "react";
import "./contact.scss";

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form action="https://formspree.io/f/xnqrvjwo" method="POST">
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <textarea
                        type="text"
                        placeholder="Message"
                        name="message"
                        required
                    ></textarea>
                    <button type="submit">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
