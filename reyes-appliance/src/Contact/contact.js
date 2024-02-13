import { useState } from "react";
import axios from "axios";
import "./index.css";

export default function Contact() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("Data: ", firstname, lastname, email, message)

        try {
            const res = await fetch('http://localhost:5000/send', {
                method: 'POST',
                body: JSON.stringify({
                    firstname, lastname, email, message
                }),
                headers: {
                    'content-type': 'application/json',
                },
            })
        } catch (any) {
            console.error('Error', any);
        }
    }

    return (
        <div className="container">
            <h1>Contact Us!</h1>
            <h2>Lets get you right, we all hate when our everyday appliances break.
                That’s why we are here to help.  </h2>
            <div className="form-container">
                <div className="left-side">
                    <form className="submit-form" onSubmit={onSubmit}>
                        <label className="label-form">First Name</label>
                        <input
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            type="text"
                            placeholder="First"
                            className="form-input"
                        />
                        <label className="label-form">Last Name</label>
                        <input
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            type="text"
                            placeholder="Last Name"
                            className="form-input"
                        />
                        <label className="label-form">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                            className="form-input"
                        />
                        <label className="label-form">Subject</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Tell us about your issue. We'll answer back and set up an appointment!"
                            className="form-input text">
                        </textarea>
                        <input type="submit" value="Submit" className="form-submit" />
                    </form>
                </div>
                <div className="right-side">
                    <div className="right-header"> Reach Us Directly </div>
                    <div className="right-title">
                        <div className="inner-title">Email:</div>  <br />
                        reyesappliancerepair@gmail.com
                    </div>
                    <div className="right-title">
                        <div className="inner-title"> Phone Number:</div> <br />
                        (347)-256-0951
                    </div>
                    <div className="right-title">
                        <div className="inner-title">Hours Of Operation: </div><br />
                        Mon-Sat: 9:00 AM - 8:00 PM <br />
                        Sunday: CLOSED </div>
                </div>
            </div>
        </div>
    )
}