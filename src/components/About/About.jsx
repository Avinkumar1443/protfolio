import React from 'react';
import './About.css';

const About = () => {
    const highlights = [
        {
            icon: '🎓',
            title: 'MCA Graduate',
            description: 'Master of Computer Applications with strong CS foundation'
        },
        {
            icon: '💼',
            title: 'ASP.NET MVC',
            description: 'Enterprise application development experience'
        },
        {
            icon: '🗄️',
            title: 'SSMS',
            description: 'Proficient in SQL Server management and optimization'
        },
        {
            icon: '⚛️',
            title: 'MERN Stack',
            description: 'Full stack development with MongoDB, Express, React, Node'
        }
    ];

    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="section-title scroll-animate">
                    <h2>About Me</h2>
                </div>

                <div className="about-content">
                    <div className="about-text scroll-animate">
                        <h3 className="about-intro">
                            Full Stack Web Developer with a strong foundation in MERN stack and ASP.NET MVC
                        </h3>

                        <div className="about-paragraphs">
                            <p className="lead-text">
                                I am passionate about creating scalable, high-performance web applications that solve real-world problems.
                                My approach combines clean code practices with modern design principles to deliver exceptional user experiences.
                            </p>
                            <p className="secondary-text">
                                During my internship at Yash Technology, I gained valuable hands-on experience building enterprise-grade
                                applications using ASP.NET MVC. I successfully implemented complex CRUD operations, managed SQL Server
                                databases, and collaborated with senior developers to deliver robust solutions.
                            </p>
                            <p className="secondary-text">
                                I maintain a continuous learning mindset, constantly exploring new technologies like Docker and Next.js
                                to stay ahead in the rapidly evolving tech landscape. I thrive in collaborative environments where I can
                                contribute to innovative projects and grow as a developer.
                            </p>
                        </div>
                    </div>

                    <div className="highlights-grid">
                        {highlights.map((highlight, index) => (
                            <div
                                key={index}
                                className="highlight-card scroll-animate"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className="highlight-icon-wrapper">
                                    <span className="highlight-icon">{highlight.icon}</span>
                                </div>
                                <h3>{highlight.title}</h3>
                                <p>{highlight.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
