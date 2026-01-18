import React, { useState, useEffect, useRef } from 'react';
import './Footer.css';

const socialLinks = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/avinkumarsubburam-s',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        )
    },
    {
        name: 'Email',
        url: 'mailto:avinkumarsubburam09@gmail.com',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
            </svg>
        )
    }
];

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const footerRef = useRef(null);

    useEffect(() => {
        if (!footerRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        observer.observe(footerRef.current);

        return () => observer.disconnect();
    }, []);


    const currentYear = new Date().getFullYear();

    return (
        <footer ref={footerRef} className={`footer ${isVisible ? 'visible' : ''}`}>
            <div className="container footer-grid">
                <div className="footer-left">
                    <h3 className="gradient-text">Avin Kumar</h3>
                    <p className="secondary-text">Web Development Enthusiast</p>
                </div>

                <div className="footer-center">
                    <span className="footer-divider" aria-hidden="true"></span>
                    <p>© {currentYear} Avin Kumar. All rights reserved.</p>
                </div>

                <div className="footer-right">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            className="social-pill"
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
