import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: 'Vaanam Technology',
            role: 'Software Engineer',
            period: 'May 2025 - Present',
            location: 'Coimbatore, India',
            current: true,
            responsibilities: [
                'Developing scalable enterprise web applications as a Full Stack Developer using ASP.NET Core, React, and Next.js for clients across multiple industries.',
                'Architecting and optimizing PostgreSQL and SQL Server databases for high-performance CRM applications and admin dashboard systems.',
                'Leading frontend development of responsive, SEO-optimized web products using modern JavaScript frameworks including React and Next.js.',
                'Building REST API integrations and authentication systems for enterprise application development projects.'
            ],
            keyProjects: ['Aquair', 'Smile Marketing', 'StudioMart'],
            technologies: ['ASP.NET Core', 'ASP.NET MVC', 'React', 'Next.js', 'PostgreSQL', 'SSMS', 'Vite']
        },
        {
            company: 'Yash Technology',
            role: 'ASP.NET MVC Developer Intern',
            period: 'Jan 2025 - Apr 2025',
            location: 'Hyderabad,India',
            current: false,
            responsibilities: [
                'Developed enterprise-level web applications as an ASP.NET MVC Developer using ASP.NET Core framework and C#.',
                'Built comprehensive admin modules with full CRUD operations, authentication and authorization systems, and secure user management.',
                'Integrated SQL Server databases using Entity Framework for efficient data handling in enterprise applications.',
                'Participated in Agile development processes and code reviews, collaborating with senior developers on scalable web application projects.'
            ],
            technologies: ['ASP.NET MVC Core', 'C#', 'SQL Server', 'Entity Framework', 'HTML/CSS', 'JavaScript']
        }
    ];

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <div className="section-title scroll-animate">
                    <h2>Professional Experience</h2>
                    <p className="section-subtitle">Software Engineer building enterprise web applications</p>
                </div>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`timeline-item scroll-animate ${index % 2 === 0 ? 'left' : 'right'}`}
                        >
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3 className="role-title">{exp.role}</h3>
                                    <div className="period-wrapper">
                                        {exp.current && <span className="current-badge">Current</span>}
                                        <span className="period">{exp.period}</span>
                                    </div>
                                </div>

                                <div className="company-info">
                                    <h4 className="company-name">{exp.company}</h4>
                                    <span className="location">{exp.location}</span>
                                </div>

                                <ul className="responsibilities">
                                    {exp.responsibilities.map((responsibility, idx) => (
                                        <li key={idx}>{responsibility}</li>
                                    ))}
                                </ul>

                                {exp.keyProjects && (
                                    <div className="key-projects">
                                        <h4 className="key-projects-title">Key Projects:</h4>
                                        <ul className="project-list">
                                            {exp.keyProjects.map((project, idx) => (
                                                <li key={idx} className="project-list-item">{project}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="technologies">
                                    {exp.technologies.map((tech, idx) => (
                                        <span key={idx} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="timeline-marker"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
