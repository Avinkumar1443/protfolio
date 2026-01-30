import React from 'react';
import './Hero.css';
import profilePhoto from '../../assets/profile-photo.png';
// WebP Image conversion failed in environment, using optimized PNG
// import profilePhotoWebP from '../../assets/profile-photo.webp';

const Hero = () => {
    // JS animation delay removed for immediate FCP

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
                {/* CSS animation class for immediate render */}
                <div className="hero-content animate-fadeInUp">
                    {/* <div className="hero-badge">
                        <span className="badge-dot"></span>
                        Available for Work
                    </div> */}
                    <h1>
                        Hi, I'm <span className="text-gradient">Avin Kumar</span>
                    </h1>
                    <h2 className="hero-headline">
                        Full Stack Developer Building Enterprise Web Applications
                    </h2>
                    <p className="hero-description">
                        I'm Avin Kumar, a Full Stack Developer and Software Engineer specializing in modern web application development. With expertise in React, Next.js, and ASP.NET Core, I build scalable, high-performance solutions for enterprise clients and startups.
                    </p>
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
                            <span className="stat-number">2+</span>
                            <span className="stat-label">Years Exp</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">7+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Clients</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual animate-fadeInRight">
                    <div className="hero-photo-container">
                        <div className="photo-backdrop"></div>

                        {/* Optimizations: Explicit Size, High Priority, Aspect Ratio 
                            Note: WebP source removed due to generation failure 
                        */}
                        <div className="image-wrapper">
                            <img
                                src={profilePhoto}
                                alt="Avin Kumar - Full Stack Developer"
                                className="hero-photo"
                                width="400"
                                height="400"
                                fetchpriority="high" // Critical for LCP
                                decoding="async"
                                style={{ aspectRatio: "1/1" }} // Prevent CLS
                            />
                        </div>

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
