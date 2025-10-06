import React, { useState } from 'react';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '../assets/icons';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => {
                setSubmitStatus('');
            }, 3000);
        }, 2000);
    };

    const contactInfo = [
        {
            icon: '📧',
            title: 'Email',
            value: 'chandan050201@gmail.com',
            link: 'mailto:chandan050201@gmail.com'
        },
        {
            icon: '📱',
            title: 'Phone',
            value: '+91 8658121332',
            link: 'tel:+918658121332'
        },
        {
            icon: '📍',
            title: 'Location',
            value: 'Bengaluru, Karnataka  560037',
            link: '#'
        },
        {
            icon: <LinkedInIcon />,
            title: 'LinkedIn',
            value: '/in/chandankumar52',
            link: 'https://www.linkedin.com/in/chandankumar52/'
        }
    ];

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <div className="section-header">
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="title-underline"></div>
                    <p className="section-subtitle">
                        Let's discuss your next project or just say hello!
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-header">
                            <h3>Let's Connect</h3>
                            <p>
                                I'm always interested in new opportunities and creative projects.
                                Feel free to reach out if you'd like to collaborate or just have a chat!
                            </p>
                        </div>

                        <div className="contact-methods">
                            {contactInfo.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    className="contact-item"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="contact-icon">{item.icon}</div>
                                    <div className="contact-details">
                                        <span className="contact-title">{item.title}</span>
                                        <span className="contact-value">{item.value}</span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="social-links">
                            <a href="https://github.com/KumarChandan05" className="social-link" aria-label="GitHub">
                                <GitHubIcon width={20} height={20} />
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <TwitterIcon width={20} height={20} />
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your full name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="Project inquiry, collaboration, etc."
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    placeholder="Tell me about your project or just say hello!"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="spinner"></span>
                                        Sending...
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="success-message">
                                    ✅ Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>

            <div className="floating-elements">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
            </div>
        </section>
    );
};

export default Contact;