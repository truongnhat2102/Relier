import React, { useState } from 'react'
import '../assets/styles/components/Button.css'
import emailjs from 'emailjs-com';

const FormContact = () => {
    const [formData, setFormData] = useState({
        inputname: '',
        inputemail: '',
        inputphone: '',
        inputcompany: '',
        role: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            name: formData.inputname,
            email: formData.inputemail,
            phone: formData.inputphone,
            company: formData.inputcompany,
            role: formData.role,
            message: formData.message
        };

        emailjs
            .send(
                'Relier',      // Replace with your service ID
                'react contact form',     // Replace with your template ID
                templateParams,
                'MszpXe_6QxpEP1FkQ'          // Replace with your public user ID
            )
            .then(
                (response) => {
                    console.log('Email sent successfully!', response.status, response.text);
                    alert('Message sent successfully!');
                },
                (error) => {
                    console.log('Failed to send email.', error);
                    alert('Failed to send message.');
                }
            );
    };
    return (
        <div className='container mb-5'>
            <div className="row pb-4">
                <div className="col-lg-4">

                    <div className="contact row mb-4">
                        <div className="contact-icon col-lg-3 col-3">
                            <div className="py-3 mb-2 text-center border rounded text-secondary">
                                <i className="fa-solid fa-newspaper display-6"></i>
                            </div>
                        </div>
                        <ul className="contact-info list-unstyled col-lg-9 col-9  light-300">
                            <li className="h5 mb-0">Relier</li>
                            <li className="text-muted">Relier</li>
                        </ul>
                    </div>

                    <div className="contact row mb-4">
                        <div className="contact-icon col-lg-3 col-3">
                            <div className="border py-3 mb-2 text-center border rounded text-secondary">
                                <i className="fa-solid fa-laptop display-6"></i>
                            </div>
                        </div>
                        <ul className="contact-info list-unstyled col-lg-9 col-9 light-300">
                            <li className="h5 mb-0">Address</li>
                            <li className="text-muted">Da Nang</li>
                        </ul>
                    </div>

                    <div className="contact row mb-4">
                        <div className="contact-icon col-lg-3 col-3">
                            <div className="border py-3 mb-2 text-center border rounded text-secondary">
                                <i className="fa-solid fa-money-bill"></i>
                            </div>
                        </div>
                        <ul className="contact-info list-unstyled col-lg-9 col-9 light-300">
                            <li className="h5 mb-0"> Phone Number</li>
                            <li className="text-muted"></li>
                            <li className="text-muted">010-020-0340</li>
                        </ul>
                    </div>

                </div>

                <div className="col-lg-8 ">
                    <form className="contact-form row" method="post" onSubmit={handleSubmit} role="form">

                        <div className="col-lg-6 mb-4">
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className="form-control form-control-lg light-300"
                                    id="floatingname"
                                    name="inputname"
                                    placeholder="Name"
                                    value={formData.inputname}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor='floatingname light-300'>Name</label>
                            </div>
                        </div>

                        <div className="col-lg-6 mb-4">
                            <div className="form-floating">
                                <input
                                    type="email"
                                    className="form-control form-control-lg light-300"
                                    id="floatingemail"
                                    name="inputemail"
                                    placeholder="Email"
                                    value={formData.inputemail}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="floatingemail light-300">Email</label>
                            </div>
                        </div>

                        <div className="col-lg-6 mb-4">
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className="form-control form-control-lg light-300"
                                    id="floatingphone"
                                    name="inputphone"
                                    placeholder="Phone"
                                    value={formData.inputphone}
                                    onChange={handleChange}
                                />
                                <label htmlFor="floatingphone light-300">Phone</label>
                            </div>
                        </div>

                        <div className="col-lg-6 mb-4">
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className="form-control form-control-lg light-300"
                                    id="floatingcompany"
                                    name="inputcompany"
                                    placeholder="Company Name"
                                    value={formData.inputcompany}
                                    onChange={handleChange}
                                />
                                <label htmlFor="floatingcompany light-300">Company Name</label>
                            </div>
                        </div>

                        <div className="col-12 mb-4">
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Who you are?</option>
                                <option value="Startup">Startup</option>
                                <option value="Investor">Investor</option>
                                <option value="Guest">Guest</option>
                            </select>
                        </div>

                        <div className="col-12">
                            <div className="form-floating mb-3">
                                <textarea
                                    className="form-control light-300"
                                    rows="8"
                                    placeholder="Message"
                                    id="floatingtextarea"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                                <label htmlFor="floatingtextarea light-300">Message</label>
                            </div>
                        </div>

                        <div className="col-md-12 col-12 m-auto text-end">
                            <button type="submit" className="my-button">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default FormContact