import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'EMC Lab Management System',
            role: 'Frontend Lead & Integration Specialist',
            description: 'A specialized laboratory management system built for high-performance data handling and automated reporting workflows.',
            category: 'Full Stack Development',
            technologies: ['React', 'Vite', 'ASP.NET MVC', 'PostgreSQL'],
            features: [
                'Automated complex lab testing workflows and report generation.',
                'Optimized high-performance frontend data visualization.',
                'Implemented secure role-based access control (RBAC).',
                'Seamlessly integrated with legacy hardware systems.'
            ],
            github: null,
            demo: null,
            isPrivate: true
        },
        {
            title: 'Marketing CMS Platform',
            role: 'Full Stack Developer',
            description: 'A dynamic content management platform enabling the marketing team to manage product showcases and lead generation campaigns.',
            category: 'Web Application',
            technologies: ['Next.js', 'Strapi CMS', 'PostgreSQL'],
            features: [
                'Architected a headless CMS content delivery system.',
                'Developed SEO-optimized, pixel-perfect marketing pages.',
                'Integrated real-time lead capture and analytics dashboard.',
                'Reduced content deployment time by 60%.'
            ],
            github: null,
            demo: null,
            isPrivate: true
        },
        {
            title: 'Enterprise CRM Solution',
            role: 'Core Feature Developer',
            description: 'A comprehensive Customer Relationship Management solution handling large-scale business operations, events, and payments.',
            category: 'Enterprise CRM',
            technologies: ['Next.js', 'ASP.NET MVC', 'PostgreSQL'],
            features: [
                'Built dynamic form engines for custom field configuration.',
                'Integrated secure payment gateways and invoicing modules.',
                'Optimized complex SQL queries for legacy data migration.',
                'Enhanced system scalability for multi-tenant support.'
            ],
            github: null,
            demo: null,
            isPrivate: true
        },
        {
            title: 'Food Application',
            role: 'Frontend Developer',
            description: 'A modern food ordering application designed for seamless user experience with real-time cart management.',
            category: 'Frontend Development',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
            features: [
                'Responsive menu interface with dynamic filtering.',
                'Real-time shopping cart state management.',
                'Interactive UI animations for better engagement.'
            ],
            github: '#',
            demo: '#'
        },
        {
            title: 'Cara E-commerce Website',
            role: 'Full Stack Developer',
            description: 'A feature-rich e-commerce platform offering a complete shopping lifecycle from product browsing to checkout.',
            category: 'Full Stack',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'E-commerce'],
            features: [
                'Searchable product catalog with category filters.',
                'Local storage-based cart persistence.',
                'Mobile-first responsive layout design.'
            ],
            github: '#',
            demo: '#'
        }
    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <div className="section-title scroll-animate">
                    <h2>Featured Projects</h2>
                    <p className="section-subtitle">Real-world applications and professional work</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card scroll-animate"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="project-header">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-role-wrapper">
                                    <span className="role-label">My Role:</span>
                                    <span className="project-role">{project.role}</span>
                                </div>
                                <p className="project-description">{project.description}</p>
                            </div>

                            <div className="project-features">
                                <h4>Key Contributions:</h4>
                                <ul>
                                    {project.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="project-tech">
                                {project.technologies.map((tech, idx) => (
                                    <span key={idx} className="tech-tag">{tech}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                {project.isPrivate ? (
                                    <div className="private-badge disabled">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lock-icon"
                                        >
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                        </svg>
                                        <span>Company Project (Locked)</span>
                                    </div>
                                ) : (
                                    <>
                                        <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            View Code
                                        </a>
                                        <a href={project.demo} className="project-link primary" target="_blank" rel="noopener noreferrer">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-7.007 1.455 1.403-8 8.597z" />
                                            </svg>
                                            Live Demo
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
