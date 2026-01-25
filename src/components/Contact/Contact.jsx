import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        botcheck: ''
    });
    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Anti-spam check (honeypot)
        if (formData.botcheck) {
            console.warn('Bot detected');
            return;
        }

        setFormStatus('sending');

        try {
            const formDataObj = new FormData();
            formDataObj.append('access_key', '97dffdc2-ffb2-43a7-9fec-5ea6af8b53ce');
            formDataObj.append('name', formData.name);
            formDataObj.append('email', formData.email);
            formDataObj.append('message', formData.message);
            formDataObj.append('subject', `Portfolio Inquiry from ${formData.name}`);
            formDataObj.append('from_name', 'Portfolio Contact');

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formDataObj
            });

            const result = await response.json();

            if (result.success) {
                setFormStatus('success');
                setFormData({ name: '', email: '', message: '', botcheck: '' });

                // Reset success status after a delay
                setTimeout(() => {
                    setFormStatus('');
                }, 5000);
            } else {
                console.error('Submission failed:', result.message);
                setFormStatus('error');
                setTimeout(() => setFormStatus(''), 3000);
            }
        } catch (error) {
            console.error('Submission error:', error);
            setFormStatus('error');
            setTimeout(() => setFormStatus(''), 3000);
        }
    };

    const contactInfo = [
        {
            icon: '📧',
            title: 'Email',
            value: 'avinkumarsubburam09@gmail.com',
            link: 'mailto:avinkumarsubburam09@gmail.com'
        },
        {
            icon: '📱',
            title: 'Phone',
            value: '+91 93453 06018',
            link: 'tel:+919345306018'
        },
        {
            icon: '📍',
            title: 'Location',
            value: 'Coimbatore, Tamil Nadu',
            link: null
        }
    ];

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="section-title scroll-animate">
                    <h2>Get In Touch</h2>
                    <p className="section-subtitle">Let's build something amazing together</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info scroll-animate">
                        <h3>Contact Information</h3>
                        <p className="contact-intro">
                            I'm currently opening to new opportunities and collaborations.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="contact-cards">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="contact-card">
                                    <div className="contact-icon">{info.icon}</div>
                                    <div className="contact-details">
                                        <h4>{info.title}</h4>
                                        {info.link ? (
                                            <a href={info.link}>{info.value}</a>
                                        ) : (
                                            <p>{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="social-links">
                            <h4>Connect with me</h4>
                            <div className="social-icons">
                                <a href="https://linkedin.com/in/avinkumarsubburam-s" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                    LinkedIn
                                </a>
                                <a href="mailto:avinkumarsubburam09@gmail.com" className="social-icon Email">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                                    </svg>
                                    Email
                                </a>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form scroll-animate" onSubmit={handleSubmit}>
                        <input
                            type="checkbox"
                            name="botcheck"
                            className="hidden"
                            style={{ display: 'none' }}
                            onChange={(e) => setFormData({ ...formData, botcheck: e.target.checked })}
                            checked={formData.botcheck}
                        />
                        <h3>Send a Message</h3>
                        <div className="form-group">
                            <label htmlFor="name">Your Name <span className="required">*</span></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your full name"
                                className={formData.name ? 'filled' : ''}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Your Email <span className="required">*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email address"
                                className={formData.email ? 'filled' : ''}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Message <span className="required">*</span></label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Tell me about your project or inquiry..."
                                className={formData.message ? 'filled' : ''}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className={`btn btn-primary submit-btn ${formStatus}`}
                            disabled={formStatus === 'sending'}
                        >
                            {formStatus === 'sending' ? (
                                <>
                                    <span className="loading-spinner"></span>
                                    Sending Mail...
                                </>
                            ) : formStatus === 'success' ? (
                                'Message Sent Successfully ✓'
                            ) : (
                                'Send Message'
                            )}
                        </button>

                        <p className="trust-note">
                            <small>Typical response time: Within 24 hours</small>
                        </p>

                        {formStatus === 'success' && (
                            <div className="success-message">
                                <p>Thank you for reaching out! I'll get back to you shortly.</p>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
