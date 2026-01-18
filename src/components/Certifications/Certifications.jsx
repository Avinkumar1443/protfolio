import React, { useState } from 'react';
import './Certifications.css';
import ibmCert from '../../assets/AVINKUMAR IBM CERTIFICATE.pdf';
import smartcliffCert from '../../assets/Smart Cliff Certificate.jpg';

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certifications = [
        {
            title: 'MERN Stack Development',
            issuer: 'Edureka',
            date: '2025',
            status: 'Completed',
            icon: '⚛️',
            skills: ['Express.js', 'React.js', 'Node.js', 'MongoDB'],
            image: null
        },
        {
            title: 'Responsive Web Design',
            issuer: 'SmartCliff Learning Solutions',
            date: '2024',
            duration: '100 Hours',
            status: 'Completed',
            icon: '📱',
            skills: ['HTML5', 'CSS3', 'Flexbox', 'Grid'],
            image: smartcliffCert,
            type: 'image'
        },
        {
            title: 'Python Basic',
            issuer: 'HackerRank',
            date: '2024',
            status: 'Completed',
            icon: '🐍',
            skills: ['Python Programming', 'Data Structures', 'Algorithms'],
            image: null
        },
        {
            title: 'IBM Artificial Intelligence',
            issuer: 'IBM',
            date: '2023',
            status: 'Completed',
            icon: '🤖',
            skills: ['Machine Learning', 'AI Concepts', 'Model Evaluation'],
            image: ibmCert,
            type: 'pdf'
        }
    ];

    const openModal = (cert) => {
        setSelectedCert(cert);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedCert(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section id="certifications" className="section certifications">
            <div className="container">
                <div className="section-title scroll-animate">
                    <h2>Certifications & Courses</h2>
                    <p className="section-subtitle">Professional credentials and continuous learning</p>
                </div>

                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="certification-card scroll-animate"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="cert-header-content">
                                <div className="cert-icon">{cert.icon}</div>
                                <div className="cert-main-info">
                                    <h3 className="cert-title">{cert.title}</h3>
                                    <span className="cert-issuer">{cert.issuer}</span>
                                </div>
                            </div>

                            <div className="cert-meta">
                                <div className="meta-row">
                                    <span className={`cert-status ${cert.status.toLowerCase()}`}>
                                        {cert.status}
                                    </span>
                                    <span className="cert-date">{cert.date}</span>
                                </div>
                                {cert.duration && (
                                    <div className="meta-row duration">
                                        <span className="duration-icon">⏳</span>
                                        <span>{cert.duration}</span>
                                    </div>
                                )}
                            </div>

                            <div className="cert-skills">
                                {cert.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-badge">{skill}</span>
                                ))}
                            </div>

                            {cert.image && (
                                <button onClick={() => openModal(cert)} className="view-cert-btn">
                                    View Certificate
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Certificate Modal */}
            {selectedCert && (
                <div className="cert-modal-overlay" onClick={closeModal}>
                    <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal-btn" onClick={closeModal} aria-label="Close Modal">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <div className="modal-body">
                            {selectedCert.type === 'pdf' ? (
                                <iframe
                                    src={selectedCert.image}
                                    className="modal-pdf-viewer"
                                    title={selectedCert.title}
                                />
                            ) : (
                                <img src={selectedCert.image} alt={selectedCert.title} className="modal-image" />
                            )}
                            <div className="modal-info">
                                <h3>{selectedCert.title}</h3>
                                <p>Issued by {selectedCert.issuer} • {selectedCert.date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certifications;
