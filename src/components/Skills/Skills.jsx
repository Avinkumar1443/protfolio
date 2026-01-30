import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            category: 'Frontend Development',
            skills: [
                { name: 'HTML5', level: 85 },
                { name: 'CSS3', level: 80 },
                { name: 'JavaScript', level: 82 },
                { name: 'React.js', level: 80 },
                { name: 'Next.js', level: 75 },
                { name: 'Bootstrap', level: 78 }
            ]
        },
        {
            category: 'Backend Development',
            skills: [
                { name: 'Node.js', level: 78 },
                { name: 'Express.js', level: 75 },
                { name: 'ASP.NET MVC', level: 75 },
                { name: 'RESTful APIs', level: 80 },
                { name: 'Strapi (Headless CMS)', level: 70 }
            ]
        },
        {
            category: 'Database & Tools',
            skills: [
                { name: 'PostgreSQL', level: 80 },
                { name: 'MySQL', level: 78 },
                { name: 'SQL Server', level: 75 }
            ]
        },
        {
            category: 'Other Skills',
            skills: [
                { name: 'Git & GitHub', level: 85 },
                { name: 'Responsive Design', level: 88 },
                { name: 'Problem Solving', level: 85 },
                { name: 'Team Collaboration', level: 85 }
            ]
        }
    ];

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <div className="section-title scroll-animate">
                    <h2>Technical Skills & Expertise</h2>
                    <p className="section-subtitle">Technologies I use to build modern web applications</p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="skill-category scroll-animate"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <h3 className="category-title">{category.category}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="skill-header">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percentage">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{ '--skill-level': `${skill.level}%` }}
                                            >
                                                <div className="skill-glow"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
