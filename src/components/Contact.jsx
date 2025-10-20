import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '../assets/icons';
import { emailjsConfig, isEmailjsConfigured } from '../config/emailjs';
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
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');
        setErrorMessage('');

        // Check if EmailJS is configured
        if (!isEmailjsConfigured()) {
            setErrorMessage('Email service is not configured. Please contact me directly via email.');
            setIsSubmitting(false);
            return;
        }

        try {
            // Get current date and time
            const now = new Date();
            const submissionDate = now.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            const submissionTime = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            });

            // Prepare template parameters
            const templateParams = {
                name: formData.name,
                from_email: formData.email,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_name: 'Chandan Kumar', // Your name
                submission_date: submissionDate,
                submission_time: submissionTime,
            };

            // Send email using EmailJS
            await emailjs.send(
                emailjsConfig.serviceId,
                emailjsConfig.templateId,
                templateParams,
                emailjsConfig.publicKey
            );

            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('');
            }, 5000);

        } catch (error) {
            console.error('Email sending failed:', error);
            setErrorMessage('Failed to send message. Please try again or contact me directly via email.');
        } finally {
            setIsSubmitting(false);
        }
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
            link: 'https://www.google.com/maps/place/Bengaluru,+Karnataka+560037/@12.9565243,77.6474184,13z/data=!3m1!4b1!4m6!3m5!1s0x3bae122d4b84fc6f:0x7adaede97b682535!8m2!3d12.9566294!4d77.7046823!16s%2Fg%2F12vsd0jw2?authuser=0&entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D'
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
                            <a href="https://x.com/Chandan76554165" className="social-link" aria-label="Twitter">
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

                            {errorMessage && (
                                <div className="error-message">
                                    ❌ {errorMessage}
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