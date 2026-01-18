import React, { useEffect, useState } from 'react';
import './Hero.css';
import profilePhoto from '../../assets/profile-photo.png';

const Hero = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimate(true);
        }, 500);
    }, []);

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero">
            <div className="hero-background">
                <div className="gradient-sphere sphere-1"></div>
                <div className="gradient-sphere sphere-2"></div>
            </div>

            <div className="container hero-container">
                <div className={`hero-content ${animate ? 'animate-in' : ''}`}>
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        Available for Work
                    </div>
                    <h1>
                        Hi, I'm <span className="text-gradient">Avin Kumar</span>
                    </h1>
                    <h2 className="hero-headline">
                        Building Scalable & Modern Web Applications
                    </h2>
                    <p className="hero-description">
                        MCA graduate passionate about building modern, responsive web applications using the MERN stack.
                        Experienced in developing scalable solutions with ASP.NET MVC and Docker-based deployments.
                    </p>
                    <div className="hero-cta-group">
                        <div className="hero-actions">
                            <button className="btn btn-primary" onClick={scrollToProjects}>
                                View My Work
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button className="btn btn-outline" onClick={scrollToContact}>
                                Contact Me
                            </button>
                        </div>

                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-number">3+</span>
                                <span className="stat-label">Years Exp</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Clients</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`hero-visual ${animate ? 'animate-in' : ''}`}>
                    <div className="hero-photo-container">
                        <div className="photo-backdrop"></div>
                        <img src={profilePhoto} alt="Avin Kumar - Full Stack Developer" className="hero-photo" />

                        <div className="photo-badge floating">
                            <div className="badge-icon">
                                <span role="img" aria-label="developer">👨‍💻</span>
                            </div>
                            <div className="badge-text">
                                <span className="badge-title">Full Stack Developer</span>
                                <span className="badge-subtitle">React, Next.js, ASP.NET & PostgreSQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
