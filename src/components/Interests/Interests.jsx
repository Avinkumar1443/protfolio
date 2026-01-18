import React from 'react';
import './Interests.css';

const Interests = () => {
    const interests = [
        {
            icon: '📅',
            title: 'Event Organizer',
            description: 'Planned and coordinated national-level and inter-college events, handling logistics, scheduling, and team coordination for smooth execution.'
        },
        {
            icon: '🏆',
            title: 'Sports Enthusiast',
            description: 'Actively coordinated and participated in inter-college sports events, strengthening leadership, teamwork, and time-management skills.'
        },
        {
            icon: '🤝',
            title: 'Team Collaboration',
            description: 'Experienced team player with strong collaboration and communication skills, working effectively with diverse teams to achieve common goals.'
        }
    ];

    return (
        <section id="interests" className="section interests">
            <div className="container">
                <div className="section-title scroll-animate">
                    <h2>Beyond Coding</h2>
                    <p className="section-subtitle">Interests that shape my teamwork and leadership skills</p>
                </div>

                <div className="interests-grid">
                    {interests.map((interest, index) => (
                        <div
                            key={index}
                            className="interest-card scroll-animate"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="interest-header">
                                <div className="interest-icon">{interest.icon}</div>
                                <h3 className="interest-title">{interest.title}</h3>
                            </div>
                            <p className="interest-description">{interest.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Interests;
