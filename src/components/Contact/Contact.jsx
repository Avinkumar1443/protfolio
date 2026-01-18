import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
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
        setFormStatus('sending');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: '97dffdc2-ffb2-43a7-9fec-5ea6af8b53ce',
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `Portfolio Inquiry from ${formData.name}`,
                    from_name: 'Portfolio Contact'
                })
            });

            const result = await response.json();

            if (result.success) {
                setFormStatus('success');
                setFormData({ name: '', email: '', message: '' });

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
                                <a href="https://github.com/avinkumar" target="_blank" rel="noopener noreferrer" className="social-icon github">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form scroll-animate" onSubmit={handleSubmit}>
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
                                <span className="loading-spinner"></span>
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
