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
                            Avin Kumar – Full Stack Developer Specializing in React, ASP.NET, and Modern Web Technologies
                        </h3>

                        <div className="about-paragraphs">
                            <p className="lead-text">
                                I'm Avin Kumar, a Full Stack Developer and Software Engineer passionate about building scalable, high-performance web applications. With hands-on experience in both frontend and backend development, I specialize in creating enterprise-grade solutions using the MERN stack, ASP.NET Core, and modern JavaScript frameworks like React and Next.js.
                            </p>
                            <p className="secondary-text">
                                As an ASP.NET Developer and React Developer, I've worked on complex enterprise applications including CRM systems, admin dashboards, and lab management platforms. My expertise spans authentication and authorization systems, REST API development, database optimization with PostgreSQL and SQL Server, and building responsive, SEO-friendly user interfaces.
                            </p>
                            <p className="secondary-text">
                                Currently working as a Software Engineer at Vaanam Technology in India, I focus on full stack development for enterprise clients. I continuously expand my skill set with technologies like API integration and scalable web application architecture. My approach combines clean code practices, modern design principles, and a commitment to delivering exceptional user experiences.
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
