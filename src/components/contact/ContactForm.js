import React, { useState } from 'react';

// Custom CSS styling based on your provided stylesheet
const styles = {
  contactFormContainer: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto'
  },
  heading: {
    fontFamily: "'Montserrat', sans-serif",
    color: '#0a6836',
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    position: 'relative',
    paddingBottom: '0.5rem',
    borderBottom: '3px solid #ffa500',
    width: 'fit-content'
  },
  formSuccess: {
    backgroundColor: 'rgba(139, 190, 198, 0.1)',
    color: '#28a745',
    padding: '1rem',
    borderRadius: '4px',
    marginBottom: '1.5rem',
    fontWeight: '500'
  },
  formError: {
    backgroundColor: 'rgba(220, 53, 69, 0.1)',
    color: '#dc3545',
    padding: '1rem',
    borderRadius: '4px',
    marginBottom: '1.5rem',
    fontWeight: '500'
  },
  formGroup: {
    marginBottom: '1.5rem'
  },
  label: {
    display: 'block',
    fontWeight: '500',
    marginBottom: '0.5rem',
    color: '#333333'
  },
  required: {
    color: '#dc3545'
  },
  input: {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    fontFamily: "'Roboto', sans-serif",
    fontSize: '1rem',
    transition: 'all 0.3s ease-in-out'
  },
  button: {
    display: 'inline-block',
    fontWeight: '500',
    textAlign: 'center',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    lineHeight: '1.5',
    borderRadius: '0.25rem',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#0a6836',
    color: '#ffffff',
    width: '100%'
  }
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    subject: '',
    contactNumber: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    // Validate required fields
    if (!formData.name || !formData.place || !formData.contactNumber) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all required fields.'
      });
      return;
    }

    const phoneNumber = '919900907884'; // India country code (91) + number

    const message = `👋 *New Contact Message*\n\n📛 Name: ${formData.name}\n📍 Place: ${formData.place}\n📌 Subject: ${formData.subject || 'N/A'}\n📱 Contact Number: ${formData.contactNumber}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp chat in new tab
    window.open(whatsappURL, '_blank');

    setFormStatus({
      submitted: true,
      error: false,
      message: 'Redirecting to WhatsApp...'
    });

    // Reset form
    setFormData({
      name: '',
      place: '',
      subject: '',
      contactNumber: ''
    });
  };

  return (
    <div style={styles.contactFormContainer}>
      <h2 style={styles.heading}>Send Us a Message</h2>

      {formStatus.submitted && (
        <div style={styles.formSuccess}>
          {formStatus.message}
        </div>
      )}

      {formStatus.error && (
        <div style={styles.formError}>
          {formStatus.message}
        </div>
      )}

      <div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="name">
            Name <span style={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="place">
            Place <span style={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="place"
            name="place"
            value={formData.place}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="contactNumber">
            Contact Number <span style={styles.required}>*</span>
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <button 
          onClick={handleSubmit}
          style={styles.button}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#085229';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#0a6836';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Send via WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ContactForm;